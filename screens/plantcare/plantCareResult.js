import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, Pressable} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';
import { globalStyles } from '../global/globalStyles';
import { useNavigation } from '@react-navigation/native';

import firebase from 'firebase';

// global import
import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton, PFRadioButton,
  PFFlatList, 
  AccountListItem, PlantListItem, MyGardenItem,
  PFCard
} from '../../components';
import PlantCarePlantInfo from './plantCarePlantInfo';


import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { DrawerContent } from '../global/Drawer';

import { ScrollView } from 'react-native-gesture-handler';

export default function PlantCareResult({navigation}) {
  // Calling Plantcare search screen

  const [loginVisible, setloginVisible] = useState(false)
  const [confirmVisible, setconfirmVisible] = useState(false)
  const [alertVisible, setalerVisible] = useState(false)

  const [popupvisible, setpopupvisible] = useState(false)

  const [inpText, setinpText] = useState("")

  const [checked, setchecked] = useState(false)

  const imgref = (url) => {
    firebase.storage().refFromURL(url).then((res) => {
      return res;
    })
  }

  
  return (
    <View style={ styles.mainContainer }>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginVertical: 14 }}
      >

      <View style={{alignItems: 'center'}}>
        <Image 
        style={{
          width: 508,
          height: 250,
          resizeMode: 'stretch',
          //Below lines will help to set the border radius
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 17,
          borderTopRightRadius: 17,
          borderTopLeftRadius: 17,
          marginTop: 8,
          marginBottom: 12,
          overflow: 'hidden',
        }}
            // style={{height: 100, width: 100}}
            // imageStyle={{ borderRadius: 6}}
            // style={{ height: 250, marginBottom: 12, borderBottomLeftRadius: 7  }}
            source={require('./../../assets/img/plantcare/tips/garden.jpg')}/>
      </View>
      
        <PFFlatList
            
            numColumns={2}
            noDataMessage='No Plant item to post'
            data={SampleData.myGarden}
            style={{alignSelf: 'center', backgroundColor: 'pink', color: 'pink' }}
            renderItem={(item) => (
              <MyGardenItem  
              style={{alignSelf: 'center', marginLeft: 12.5, marginBottom: 12 }}
                // imageURL={firebase.storage().refFromURL(item.imageURL)}
                imageURL={item.imageURL}
                commonName={item.commonName}
                plantType={item.plantType}
                onPress={ () => navigation.navigate('PlantCarePlantInformation')}
                  />
              )}
            keyExtractor={(item,index) => index}

          />

     

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    color: '#ffffff',
  },

  searchBoxContainer: {
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    // flex:1,
  },
  searchBoxIcon: {
    height: 20,
    width: 20
  },
  fabContainer: {
    backgroundColor: Colors.white,
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 20,

    borderRadius: 35,
    // borderColor: 'black',
    // borderWidth: 5,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 10,
  },

  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F7FA',
  },
  
  fabImage: {
    // marginTop: 7,
    resizeMode: 'contain',
    width: 25,
    height: 25,
    //backgroundColor:'black'
  },
})