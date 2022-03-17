import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Button, Image } from 'react-native'
import React, { Component, useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { PFPrimaryButton } from '../../../../components';
import { set } from 'react-native-reanimated';

import firebase from 'firebase';

  // function takePicture(){
  //   if (camera) {
  //       // const options = {quality: 1, base64: true};
  //       const data = await this.camera.takePictureAsync(null);
  //       console.log(data);
  //       // this.camera.takePictureAsync(options).then((data) => {
  //       //   console.log(data);
  //       // })
  //   }
  // }

export default function PlantCareCamera ({navigation, route, }){
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [camera, setcamera] = useState(null)

  const [imageurl, setimageurl] = useState(null)

  const takePicture = async () => {
    if (camera) {
        const data = await camera.takePictureAsync(null);
        console.log(data);
        setimageurl(data.uri);
        // firebase.storage().ref().child('assets/img/plantCare/image.jpg').put(data.uri).then((res) => {
        //   console.log(res);
        // });
    }
  }
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} 
        // ref={ref => {
        //   this.camera = ref;
        // }}
        //   this.camera = ref;
        // }}
        ref={(ref) => setcamera(ref)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            {/* <Text style={styles.text}> Flip {JSON.stringify(itemTitle)} </Text> */}
            <Text style={styles.text}> Flip {route.params.title} </Text>
            <Text style={styles.text}> </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center' }}>
          <View style={{alignItems: 'center', borderColor: 'white', borderWidth: 4, padding: 10, borderRadius: 49, marginBottom: 10}}>
            <TouchableOpacity style={styles.captureButton} onPress={() => takePicture()}>

            </TouchableOpacity>
          </View>
        </View>
      </Camera>

      <Image style={{width: 150, height: 150}} source={{ uri: imageurl }}></Image>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  camera: {
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