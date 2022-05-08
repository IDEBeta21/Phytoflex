
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Pressable, StyleSheet, Dimensions } from "react-native";
import { Camera } from "expo-camera";
// import { fireStorage } from "../config/environment";\
import firebase from "firebase";
import { PFPrimaryButton, PFRadioButton, PFText } from "../../../../components";
import { Button, Button as PaperButton } from "react-native-paper";
import Colors from "../../../../utils/globalColors";

export default function plantCareCameraPreview({navigation, route}) {
  // const [hasPermission, setHasPermission] = useState(null);
  // const [previewVisible, setPreviewVisible] = useState(true);
  const imageData = route.photoData;
  const [capturedImage, setCapturedImage] = useState(route.photoData);
  const [type, setType] = useState(Camera.Constants.Type.back);

  console.log(route.photoData)
  useEffect(() => {
    // (async () => {
    //   const { status } = await Camera.requestPermissionsAsync();
    //   setHasPermission(status === "granted");
    // })();
    // setCapturedImage(route.photoData)
  }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  const takePicture = async () => {
    if (!camera) return;
    // let photo = await camera.takePictureAsync();
    // setCapturedImage(await camera.takePictureAsync());
    // setPreviewVisible(true);
    // let photoUri = photo.uri;
    // setCapturedImage([...capturedImage, photo]); // This code should work but doesn't, it always returns null
    // console.log(photo);
    // console.log(capturedImage);
    // console.log(capturedImage);
    // uploadImageAsync(photo.uri.toString());
    // uploadImageAsync(photo.uri);
  };

  async function uploadImageAsync(uri) {
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

    // const ref = 
    await firebase.storage().ref().child('assets/img/plantCare/' + new Date().toString() + '.jpg').put(blob)
    .then((res) => {
      console.log(res);
    })
    // const snapshot = await ref.put(blob);
    blob.close();
  }

  return (
    <View
      // style={{flex: 1,}}
      style={styles.container}
    >
      {/* {previewVisible ? ( */}
        <ImageBackground
          source={{ uri: capturedImage }} //&& capturedImage.uri }}
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
              <TouchableOpacity
                onPress={() => setPreviewVisible(false)}
                style={{
                  width: 130,
                  height: 40,

                  alignItems: "center",
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                  }}
                >
                  Re-take
                </Text>
                <Pressable >
                  
                </Pressable>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      {/* ) : (
        <View>
          <Camera
            // style={{ flex: 1 }}
            style={styles.cameraContainer}
            type={type}
            ref={(r) => {
              camera = r;
            }}
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
                </View> *
              </View>
            </View>
          </Camera>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
            <View style={{flex: 4, alignItems: 'center', justifyContent: 'center', }}>
              <Button 
                style={{
                  width: 100,
                  borderColor: Colors.primary,
                  borderWidth: 1,
                  backgroundColor: 'white',
                  borderRadius: 20,
                }}
                color={Colors.primary}
              >Photos</Button>
            </View>
            <View style={{flex: 4, alignItems: 'center', justifyContent: 'center', }}>
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
              />
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
      )} */}
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