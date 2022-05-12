import { Text, StyleSheet, View, Image, Colors, FlatList, SectionList, SafeAreaView, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { PFText } from '../../components';
import SampleData from '../../utils/SampleData';
import ImageModal from 'react-native-image-modal';

// Tensorflow import
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { fetch, decodeJpeg, bundleResourceIO, asyncStorageIO, cameraWithTensors } from '@tensorflow/tfjs-react-native';

import * as jpeg from 'jpeg-js'

// Firebase Import
import firebase from 'firebase';


export default function PlantCarePlantInformation({navigation, route}) {

    const [plantInfo, setplantInfo] = useState([])
    const [predicting, setpredicting] = useState(true)
    const [loadingText, setloadingText] = useState('')

    // Plant informations
    const [plantName, setplantName] = useState('')
    const [plantDesc, setplantDesc] = useState('')
    const [plantFam, setplantFam] = useState('')
    const [plantKingdom, setplantKingdom] = useState('')

    const [plantPrediction, setplantPrediction] = useState('')
    const [failedToPredict, setfailedToPredict] = useState(false)

    // useEffect(() => {
    //     (async () => {
    //         setloadingText('Loading Tensorflow')
    //         await tf.ready()

    //         setloadingText('Loading Mobilenet')
    //         const model = await mobilenet.load()

    //         setloadingText('Converting image to tensor')
    //         const response = await fetch(route.params.imageUrl, {}, { isBinary: true });

    //         const imageData = await response.arrayBuffer();

    //         // const imageTensor = decodeJpeg(imageData);
    //         setloadingText('Decoding Image')
    //         const imageTensor = jpeg.decode(imageData);

    //         setloadingText('Classifying Image')
    //         const prediction = await model.classify(imageTensor);

    //         console.log(`Prediction: ${prediction[0]['className']} ${prediction[0]['probability']}`)
            

    //         const fbPlantIdentity = await firebase.firestore().collection('PlantIdentity').doc(prediction[0]['className']).get().then((doc) => {
    //             if (doc.exists) {
    //                 console.log("Document data:", doc.data());
    //                 setplantName(doc.data().plantName)
    //                 setplantDesc(doc.data().description)
    //                 setplantFam(doc.data().family)
    //                 setplantKingdom(doc.data().kingdom)
    //                 setpredicting(false)
    //             } else {
    //                 // doc.data() will be undefined in this case
    //                 setloadingText('Failed to identify plant :(')
    //                 console.log("No such document!");
    //             }
    //         }).catch((error) => {
    //             console.log("Error getting document:", error);
    //         });
    //         // if (!fbPlantIdentity.exists()) {
    //         //     console.log ('No such document!');
    //         //     setloadingText('No such Plant!');
    //         // } else {
    //         //     console.log(fbPlantIdentity.data());
    //         //     setpredicting(false)
    //         // }
    //     })();
    //   }, []);

    let plantPredictionName = ''
    let plantPredictionDesc = ''

    useEffect(() => {
        (async () => {
            setloadingText('Loading Tensorflow')
            await tf.ready()
            setloadingText('Loading Mobilenet')
            const model = await mobilenet.load()
            setloadingText('Converting image to tensor')
            const response = await fetch(route.params.imageUrl, {}, { isBinary: true });
            const imageData = await response.arrayBuffer();
            // const imageTensor = decodeJpeg(imageData);
            setloadingText('Decoding Image')
            const imageTensor = jpeg.decode(imageData);

            setloadingText('Classifying Image')
            const prediction = await model.classify(imageTensor);
            console.log(`Prediction: ${prediction[0]['className']} ${prediction[0]['probability']}`)
            setplantPrediction(String(prediction[0]['className']))
            plantPredictionName = prediction[0]['className']
            
            
        })()
        .then((res) => {
            const fbPlantIdentity = firebase.firestore().collection('PlantIdentity').doc(plantPredictionName).get()
            .then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    setplantName(doc.data().plantName)
                    setplantDesc(doc.data().description)
                    setplantFam(doc.data().family)
                    setplantKingdom(doc.data().kingdom)
                    setpredicting(false)
                } else {
                    // doc.data() will be undefined in this case
                    setloadingText('Failed to identify plant :(')
                    console.log("No such document!");
                }
            })
        });
      }, []);

      const onMonitorPress = async () => {
        if(firebase.auth().currentUser){
            // upload to firebase
            await firebase.firestore().collection('PlantMonitoring').add({
                imageUrl: route.params.imageUrl,
                firebaseDirectory: route.params.firebaseDirectory,
                plantName: plantPrediction,
                plantDescription: plantDesc,
                userId: firebase.auth().currentUser.uid
            }).then((res) => {
                navigation.navigate('PlantCareReminder',{
                    documentId: res.id
                }) 
                console.log('Document Id: ' + res.id)
            }).catch((err) => {
                console.log(err)
            })
            
        }else{
            Alert.alert('You have to Login to use this feature')
            return
        }
      }

    return (
        <SafeAreaView  style={styles.container}>
            <StatusBar style='auto'/>

        { predicting ? 
                <View>
                    { failedToPredict ? 
                        <View>
                            
                        </View>
                        :
                        <View style={styles.loadingContainer}>
                            <PFText>{loadingText}</PFText>
                        </View>
                    }
                </View>
             : 
            <View style={{paddingBottom: 150}}>

            <ScrollView
                showsVerticalScrollIndicator={false}>

            <View>
            <Image 
                style={{ height: 220, resizeMode: 'cover'}}
                // source={require('./../../assets/img/plantcare/pc_photo1.png')}/>
                source={{
                    uri: route.params.imageUrl
                }}/>
            </View>

            {/* Floating icon */}
            <View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.iconContainer}
                // onPress={() => navigation.navigate('Instruction')}
                onPress={() => alert('Succesfully added to favorites!')}>

                <Image
                source={ require('../../assets/img/plantcare/icn_heart.png')}
                // source={ require('../../assets/img/plantcare/icn_heart-active.png')}
                style={styles.iconHeart}
                />
            </TouchableOpacity>
            </View>

            {/* Plant Information */}
            <View style={styles.plantDetailsContainer}>

            <PFText weight='semi-bold' style={styles.plantName}>{plantName}</PFText>

                <View style={styles.plantType}>
                <View style={styles.kingdom}>
                    <PFText weight='semi-bold' style={{ marginEnd: 20 }}>Kingdom</PFText>  
                    {/* <PFText weight='medium'>Plantae</PFText> */}
                    <PFText weight='medium'>{plantKingdom} </PFText>
                </View>

                <View style={styles.family}>
                    <PFText weight='semi-bold' style={{ marginEnd: 34 }}>Family</PFText>   
                    <PFText weight='light'>{plantFam} </PFText>
                    {/* <PFText weight='light'>Amaranthaceae</PFText> */}
                </View>
                </View>

                <View style={styles.plantDescription}>
                <PFText weight='semi-bold' style={{ paddingBottom: 3 }}>Description</PFText>
                <PFText weight='light' style={styles.description}>{plantDesc}.{'\n'}</PFText>
                {/* <PFText weight='light' style={styles.description}>Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). It is not known by whom, or when, spinach was introduced to India, but the plant was subsequently introduced to ancient China, where it was known as "Persian vegetable". Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). It is not known by whom, or when, spinach was introduced to India, but the plant was subsequently introduced to ancient China, where it was known as "Persian vegetable.". Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries).{'\n'}</PFText> */}
                </View>

            </View>

            {/* Images */}
            {/* <View style={styles.flatListContainer}> */}
                    
                {/* <FlatList 
                    style={styles.flatListImage}
                    horizontal={true} 
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    showsHorizontalScrollIndicator={false} 
                    data={SampleData.myPlantCare}
                    renderItem={ ({ item, index }) => (

                    <ImageModal
                        resizeMode="contain"
                        imageBackgroundColor="#FFFFFF"
                        source={{ uri: item.imageURL }}
                        style={styles.imageModalStyle}
                        key={index} // Important to set a key for list items, but its wrong to use indexes as keys 
                    /> 
                        
                    )}
                /> */}

            {/* </View> */}

            </ScrollView>

            <View style={styles.btnBG}>
                {/* <TouchableOpacity onPress={() => alert('Haluu!')}> */}
                <TouchableOpacity onPress={onMonitorPress}>
                    <View style={styles.btnMonitor}>
                        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Monitor this plant</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    }
    </SafeAreaView>
    );          
}

const styles = StyleSheet.create({

    loadingContainer: {
        flex: 1,
        // alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: "#ffffff", 
        paddingHorizontal: 0,
    },

    flatListContainer: {
        flex: 1,
        backgroundColor: "#ffffff", 
        paddingHorizontal: 0,
        marginBottom: 0,
   },
   
    btnMonitor: {
        marginTop: 8,
        padding: 10,
        marginStart: 14,
        marginEnd: 14,
        height: 47,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#639D04',
        borderRadius: 30,
        borderColor: '#000000',     
    },

    btnBG: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,   
        backgroundColor: '#ffffff',   

        //shadow effect
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 12,
    },

    item: {
        margin: 5,
        borderColor: '#000000',
    },

    plantDetailsContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 12,
    },

    plantName: {
        fontSize: 28,

    },

    plantType: {
        flexDirection: 'column',
      },

    kingdom: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },

    family: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },

    plantDescription: {
        flex: 1,
        paddingTop: 20,
    }, 

    description: {
        lineHeight: 22,
        textAlign: 'justify',
    },

    flatListImage: {
        height: 150,
    },

    iconContainer: {
        backgroundColor: '#ffffff',
        // backgroundColor: '#FF6262',
        position: 'absolute',
        width: 57,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',    
        borderRadius: 35,
        shadowColor: "black",

        //shadow effect
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 10,

        //Align to right
        position: 'absolute',
        right: 0,
        marginRight: 12,
        marginTop: -28,
      },

    iconHeart: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
      },

    imageModalStyle: {
        width: 150,
        height: 150,
        borderWidth:2,
        margin:4,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
      


})