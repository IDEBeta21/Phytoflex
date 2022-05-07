import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, SafeAreaView, Alert, FlatList, Pressable} from 'react-native';
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

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { DrawerContent } from '../global/Drawer';

import { ScrollView } from 'react-native-gesture-handler';

export default function PlantCareResult({navigation, route}) {
  // Calling Plantcare search screen

  const [loginVisible, setloginVisible] = useState(false)
  const [confirmVisible, setconfirmVisible] = useState(false)
  const [alertVisible, setalerVisible] = useState(false)

  const [popupvisible, setpopupvisible] = useState(false)

  const [inpText, setinpText] = useState("")

  const [checked, setchecked] = useState(false)

  // const imgref = (url) => {
  //   firebase.storage().refFromURL(url).then((res) => {
  //     return res;
  //   })
  // }

  console.log("Firebase Directory" + route.params.firebaseDirectory)

  
  return (
    <View style={ styles.mainContainer }>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false} >

        <View style={styles.imageContainer}>
          <Image 
            style={styles.imageStyle}
            source={require('./../../assets/img/plantcare/tips/garden.jpg')}
            />
        </View>
        
        <PFFlatList
          numColumns={2}
          noDataMessage='No Plant item to post'
          data={SampleData.myGarden}
          style={{alignSelf: 'center', backgroundColor: 'pink', color: 'pink' }}
          renderItem={(item) => (

            <MyGardenItem  
              imageURL={item.imageURL}
              commonName={item.commonName}
              plantType={item.plantType}
              onPress={() => navigation.navigate('PlantCarePlantInformation')}
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

  imageContainer: {
    marginStart: 7, 
    marginEnd: 7,
    marginTop: 7,
    marginBottom: 7,
  },

  imageStyle: {
    width: 'auto',
    height: 240,
    flex: 1,
    resizeMode: 'cover',
    // resizeMode: 'contain',
    borderRadius: 10,
  },

})