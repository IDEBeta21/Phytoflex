import { Text, StyleSheet, View, Image, Colors, FlatList, SectionList, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { PFText } from '../../components';
import SampleData from '../../utils/SampleData';
import ImageModal from 'react-native-image-modal';


export default function PlantCarePlantInformation({navigation}) {

return (

    <SafeAreaView style={styles.container}>

        <ScrollView
            showsVerticalScrollIndicator={false}>

        <View>
          <Image 
            style={{ height: 220, resizeMode: 'cover'}}
            source={require('./../../assets/img/plantcare/pc_photo1.png')}/>
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

          <PFText weight='semi-bold' style={styles.plantName}>Cactus</PFText>

            <View style={styles.plantType}>
               <View style={styles.kingdom}>
                 <PFText weight='semi-bold' style={{ marginEnd: 20 }}>Kingdom</PFText>  
                 <PFText weight='medium'>Plantae</PFText>
               </View>

               <View style={styles.family}>
                 <PFText weight='semi-bold' style={{ marginEnd: 34 }}>Family</PFText>   
                 <PFText weight='light'>Amaranthaceae</PFText>
               </View>
            </View>

            <View style={styles.plantDescription}>
               <PFText weight='semi-bold' style={{ paddingBottom: 3 }}>Description</PFText>
               <PFText weight='light' style={styles.description}>Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). It is not known by whom, or when, spinach was introduced to India, but the plant was subsequently introduced to ancient China, where it was known as "Persian vegetable". Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). It is not known by whom, or when, spinach was introduced to India, but the plant was subsequently introduced to ancient China, where it was known as "Persian vegetable.". Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries).{'\n'}</PFText>
            </View>

        </View>

        {/* Images */}
        <View style={styles.flatListContainer}>
                
            <FlatList 
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
            />

        </View>

        </ScrollView>

        <View style={styles.btnBG}>
            <TouchableOpacity onPress={() => alert('Haluu!')}>
                <View style={styles.btnMonitor}>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Monitor this plant</Text>
                </View>
            </TouchableOpacity>
        </View>

    </SafeAreaView>

);          
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff", 
        paddingHorizontal: 0,
    },

    flatListContainer: {
        flex: 1,
        backgroundColor: "#ffffff", 
        paddingHorizontal: 0,
        marginBottom: 13,
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
        height: 64,   
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