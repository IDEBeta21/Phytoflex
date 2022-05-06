// import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Button, Image } from 'react-native'
// import React, { Component, useState, useEffect} from 'react';
// import { Camera } from 'expo-camera';
// import { PFPrimaryButton } from '../../../../components';
// import { set } from 'react-native-reanimated';

// import firebase from 'firebase';

//   // function takePicture(){
//   //   if (camera) {
//   //       // const options = {quality: 1, base64: true};
//   //       const data = await this.camera.takePictureAsync(null);
//   //       console.log(data);
//   //       // this.camera.takePictureAsync(options).then((data) => {
//   //       //   console.log(data);
//   //       // })
//   //   }
//   // }

// export default function PlantCareCamera ({navigation, route, }){
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   const [camera, setcamera] = useState(null)

//   const [imageurl, setimageurl] = useState(null)

//   const takePicture = async () => {
//     if (camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await camera.takePictureAsync(options);
//       console.log(data);
//       setimageurl(data.uri);
//       // firebase.storage().ref().child('assets/img/plantCare/image.jpg').put(data.uri).then((res) => {
//       //   console.log(res);
//       // });
//       // const processed = await firebase.vision().imageLabelerProcessImage(data.uri, {
//       //   confidenceThreshold: 0.8,
//       // }).then();

//       await firebase.vision().imageLabelerProcessImage(data.uri, {
//         confidenceThreshold: 0.8,
//       }).then((processed) => {
//         firebase.storage().ref().child('assets/img/plantCare/image.jpg').put(processed).then((res) => {
//           console.log(res);
//         });
//       });

      
//     }
//   }
//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type} 
//         // ref={ref => {
//         //   this.camera = ref;
//         // }}
//         //   this.camera = ref;
//         // }}
//         ref={(ref) => setcamera(ref)}
//       >
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}>
//             {/* <Text style={styles.text}> Flip {JSON.stringify(itemTitle)} </Text> */}
//             <Text style={styles.text}> Flip </Text>
//             <Text style={styles.text}> </Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{alignItems: 'center' }}>
//           <View style={{alignItems: 'center', borderColor: 'white', borderWidth: 4, padding: 10, borderRadius: 49, marginBottom: 10}}>
//             <TouchableOpacity style={styles.captureButton} onPress={() => takePicture()}>

//             </TouchableOpacity>
//           </View>
//         </View>
//       </Camera>

//       <Image style={{width: 150, height: 150}} source={{ uri: imageurl }}></Image>

      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'grey'
//   },
//   camera: {
//     //flex: 1,
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').width * (4/3)
//   },
//   buttonContainer: {
//     flex: 1,
//     backgroundColor: 'transparent',
//     flexDirection: 'row',
//     margin: 20,
//   },
//   button: {
//     flex: 0.1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//     color: 'white',
//   },
//   captureButton:{
//     width: 70, 
//     height: 70, 
//     backgroundColor: 'white', 
//     borderRadius: 35,
//   },
// })



import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Pressable } from "react-native";
import { Camera } from "expo-camera";
// import { fireStorage } from "../config/environment";\
import firebase from "firebase";

export default function PlantCareCamera() {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (!camera) return;
    let photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo); // This code should work but doesn't, it always returns null
    console.log(photo.uri);
    // console.log(capturedImage);
    // uploadImageAsync(photo.uri.toString());
    uploadImageAsync(photo.uri);
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
      style={{
        flex: 1,
      }}
    >
      {previewVisible ? (
        <ImageBackground
          source={{ uri: capturedImage && capturedImage.uri }}
          style={{
            flex: 1,
          }}
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
      ) : (
        <Camera
          style={{ flex: 1 }}
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
              <View
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
              </View>
            </View>
          </View>
        </Camera>
      )}
    </View>
  );
}