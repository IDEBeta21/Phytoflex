import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Pressable, StyleSheet, Dimensions, Image } from "react-native";
import { Camera } from "expo-camera";
// import { fireStorage } from "../config/environment";\
import firebase from "firebase";
import { PFPrimaryButton, PFRadioButton, PFSecondaryButton, PFText, PFActivityIndicator } from "../../../../components";
import { Button, Button as PaperButton } from "react-native-paper";
import Colors from "../../../../utils/globalColors";
import { ReactNativeFirebase } from "@react-native-firebase/app";

// Tensorflow import
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { fetch, decodeJpeg, bundleResourceIO, asyncStorageIO, cameraWithTensors } from '@tensorflow/tfjs-react-native';

import * as jpeg from 'jpeg-js'

export default function plantCareCamera({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState([]);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [loadingCapture, setLoadingCapture] = useState(false)
  

  const [imageurl, setimageurl] = useState('')

  const [uploadReference, setuploadReference] = useState('')
  const [firebaseUrl, setfirebaseUrl] = useState('')

  // const cameraRef = useRef(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      await tf.ready()
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    setLoadingCapture(true)
    if (!cameraRef) return;
    let photo = await cameraRef.takePictureAsync();
    setCapturedImage(photo);
    // let photoUri = photo.uri;
    // setCapturedImage([...capturedImage, photo]); // This code should work but doesn't, it always returns null
    console.log(photo);
    let str = photo['uri'].toString();
    console.log(str);
    setimageurl(str);
    // console.log(imageurl);
    // console.log(capturedImage);
    // navigation.navigate("PlantCareCameraPreview", {photoData: imageurl})
    // console.log(capturedImage);
    // uploadImageAsync(photo.uri.toString());
    await uploadImageAsync(photo.uri);
    
    // await tf.ready()
    // const model = await mobilenet.load()

    // const image = photo['uri']
    // // const imageAssetPath = Image.resolveAssetSource(image);
    // // const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
    // const response = await fetch(image, {}, {isBinary: true})

    // const imageData = await response.arrayBuffer()
    // const imageTensor = jpeg.decode(imageData)
    // const prediction = await model.classify(imageTensor)
    // console.log(`${prediction[0]['className']} ${prediction[0]['probability']}`)
    
    // setPreviewVisible(true);
    setLoadingCapture(false)
  };

  
  async function uploadImageAsync(uri) {
    // Convert image to blob for image upload
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    // Upload image to firebase
    const imageName = new Date().toString() + '.jpg'
    // const ref = 'assets/img/plantCare/' + imageName + '.jpg'
    const ref = 'assets/img/plantCare/'

    setuploadReference(ref + imageName)
    await firebase.storage().ref().child(ref + imageName).put(blob)
    .then((res) => {
      console.log(res);
    })
    console.log(blob);

    

    // const model = await mobilenet.load(); 
    
    const tfjsuri =  await firebase.storage().ref(ref + imageName).getDownloadURL().
    then((url) => {
      // return url
      console.log('Image url: ' + ref + imageName)
      console.log('Firebase URL ' + url)
      navigation.navigate('PlantCarePlantInformation',{
        firebaseDirectory: ref + imageName,
        imageUrl: url
      })
    }); 

    // const response = await fetch(tfjsuri, {}, { isBinary: true });

    // const imageData = await response.arrayBuffer();

    // // const imageTensor = decodeJpeg(imageData);
    // const imageTensor = jpeg.decode(imageData);

    // const prediction = await model.classify(imageTensor);

    // console.log(`${prediction[0]['className']} ${prediction[0]['probability']}`)





    // console.log(downloadUrl);

    // const snapshot = await ref.put(blob);
    // console.log(blob);
    blob.close();
  }

  return (
    <View
      // style={{flex: 1,}}
      style={styles.container}
    >
      {previewVisible ? (
        <View>
          <ImageBackground
            source={{ uri: capturedImage && capturedImage.uri }}
            // style={{flex: 1}}
            style={styles.cameraContainer}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                padding: 15,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
              </View>
            </View>
          </ImageBackground>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{flex:1, alignItems: 'center'}}>
              <PFSecondaryButton 
                title={'Re-take'}
                onPress={() => setPreviewVisible(false)}
                style={{width: 150,}}
                labelStyle={{fontSize: 16}}/>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
              <PFPrimaryButton 
                title={'Done'} 
                onPress={() => uploadImageAsync(imageurl)}
                style={{width: 150}}
                labelStyle={{fontSize: 16}}/>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Camera
            // style={{ flex: 1 }}
            style={styles.cameraContainer}
            type={type}
            ref={(r) => {
              cameraRef = r;
            }}
            // ref = {camera}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: "5%",
                  left: "5%",
                }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={{ fontSize: 20, marginBottom: 10, color: "white" }}>
                  {" "}
                  Flip{" "}
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  flex: 1,
                  width: "100%",
                  padding: 20,
                  justifyContent: "space-between",
                }}
              >
                {/* <View
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={takePicture}
                    style={{
                      width: 70,
                      height: 70,
                      bottom: 0,
                      borderRadius: 50,
                      backgroundColor: "#fff",
                    }}
                  />
                </View> */}
              </View>
            </View>
          </Camera>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <View style={{flex: 4, alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}>
              <TouchableOpacity 
                style={{
                  width: 100,
                  borderColor: Colors.primary,
                  borderWidth: 2,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  paddingHorizontal: 10,
                  paddingVertical: 7,
                  width: 110,
                }}
                color={Colors.primary}
              ><PFText center size={14}>Photos</PFText></TouchableOpacity>
            </View>
            <View style={{flex: 4, alignItems: 'center', justifyContent: 'center', }}>
              {!loadingCapture ? 
                <TouchableOpacity
                  onPress={takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    // backgroundColor: "#fff",
                    backgroundColor: 'grey'
                  }}
              /> : 
                <PFText>Loading...</PFText>
              }
            </View>
            <View style={{flex: 4, }}>
              <Pressable onPress={() => navigation.navigate('Instruction')}>
                <View style={{alignItems: 'center', justifyContent: 'center', }}>
                  <PFText style={{fontSize: 20}}>?</PFText>
                  <PFText>Instruction</PFText>
                </View>
              </Pressable>
            </View>
          </View>
        </View> 
      )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  cameraContainer: {
    //flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (4/3)
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  captureButton:{
    width: 70, 
    height: 70, 
    backgroundColor: 'white', 
    borderRadius: 35,
  },
})