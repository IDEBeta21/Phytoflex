import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Camera } from "expo-camera";
import firebase from "firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore"; 


export default function TakePhoto({navigation, route}) {
    let camera;

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
    if (!Camera) return;
    let photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo); // This code should work but doesn't, it always returns null
    console.log(photo.uri);
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

    let imageDirectory = 'discussion/image/postImage' + new Date().toString() + '.jpg';

    await firebase.storage().ref().child(imageDirectory).put(blob)
    .then((res) => {
      console.log(res);
    })
  

      // To update imageURL:
      await  firebase.firestore()
      .collection('Question').where('qstID', '==', route.params.qstID).get().then((res) => {
        res.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
          const docRef = firebase.firestore().collection('Question').doc(doc.id);
              // update profile picture
                      docRef.update({
                        qstImage: imageDirectory
              })
        })
      })
    
    
    blob.close();
    navigation.navigate("DiscussionHomePage");
  }

   
    return(

      <View style={{ flex: 1 }}>
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
                    color: "#ffffff",
                    fontSize: 20,
                  }}
                >
                  Re-take
                </Text>
                
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

    )

}

