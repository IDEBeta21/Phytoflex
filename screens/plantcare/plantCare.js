import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, StatusBar, SafeAreaView, Title, Paragraph, Alert, FlatList, Card, Pressable} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';
import { globalStyles } from '../global/globalStyles';
import { useNavigation } from '@react-navigation/native';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { MyComponent } from './../../components/Card/Cardy';
import firebase from 'firebase';

// global import
import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton, PFRadioButton,
  PFFlatList,
  AccountListItem, PlantListItem, MyGardenItem,
  PFCard, 
} from '../../components';
import PlantCarePlantInfo from './plantCarePlantInfo';
// import MyGardenItemSample from '../../components/FlatList/Item/MyGardenItemSample.js';
import Colors from '../../utils/globalColors';
import SampleData from '../../utils/SampleData';
import { ScrollView } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';



export default function PlantCare({navigation}) {
  
  return (

    <View style={ styles.mainContainer }>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >

        <SafeAreaView style={styles.container}>
        <PFFlatList style={styles.flatlist}
              
            data={SampleData.myPlantCare}
            renderItem={(item) => (

              <MyComponent
                // imageURL={firebase.storage().refFromURL(item.imageURL)}
                imageURL={item.imageURL}
                title={item.title}
                description={item.description}
                
                onPress={() => alert('Hilo madapaka')}
              />
               
              )}
            keyExtractor={(item,index) => index}
        />

        </SafeAreaView>

      </ScrollView>



      {/* Floating icon */}


      <View style={{ justifyContent: 'flex-end', bottom: 8 }}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.fabContainer}
          // onPress={() => navigation.navigate('Instruction')}
          onPress={() => alert('Instruction')}
          >
            
          <Image
            source={ require('../../assets/img/plantcare/icn_plus.png')}
            style={styles.fabImage}
          />

        </TouchableOpacity>
      </View>
   

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    paddingBottom: 8, 
    paddingTop: 12,
    backgroundColor: '#DFDFDF',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#DFDFDF',
  },
  
  fabContainer: {
    alignItems: 'center',
    // backgroundColor: '#ffffff',
    backgroundColor: '#639D04',
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 35,
   
    //shadow effect
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 10,
  },
  
  fabImage: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
   
  },

  card: {
    flex: 1,
    height: 263,
    width: 327,
    alignContent: 'center',
    marginLeft: 16,
    marginRight: 12,
    borderColor: 'white'
  },

  flatlist: {
    flexDirection: 'row',
  }


})