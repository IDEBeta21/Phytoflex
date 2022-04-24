import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable} from 'react-native';
import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Portal, Divider } from 'react-native-paper';
import { globalStyles } from '../global/globalStyles';
import { useNavigation } from '@react-navigation/native';

import firebase from 'firebase';

// global import
import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton, PFRadioButton,
  PFFlatList, 
  AccountListItem, PlantListItem, MyGardenItem, RecentSnapsItem,
  PFCard
} from '../../components';
import PlantCarePlantInfo from './plantCarePlantInfo';


import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { DrawerContent } from '../global/Drawer';

import { ScrollView } from 'react-native-gesture-handler';

export default function PlantCareHomePage({navigation}) {
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
      >
        <View style={styles.searchBoxContainer}>
          <Image
            style={styles.searchBoxIcon}
            source={require('../../assets/drawerIcons/plantCareIcons/search.png')}
            resizeMode='contain'
          />
          <TextInput
            style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1}}
            placeholder='Search' 
          />
        </View>

        <View style={styles.flContainer}>

          <PFText weight='light' style={{ color: 'black', marginLeft: 12 }}>Recent Snaps</PFText>
            <StatusBar style="light"/>
            <SafeAreaView style={{ height: 169 }}>
              {/* 176 */}

                <FlatList 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={{ paddingRight: 12, paddingLeft: 2 }}
                    data={SampleData.myGarden}
                    renderItem={({item}) => (
                    
                    <RecentSnapsItem 
                      style={{marginLeft: 10 }}
                        // imageURL={firebase.storage().refFromURL(item.imageURL)}
                        imageURL={item.imageURL}
                        description={item.commonName}
                        onPress={() => Alert.alert(item.plantFamilyName)}/>
                      )}
                    keyExtractor={(item,index) => index}
                  />

            </SafeAreaView>
        </View>

       

        <PFFlatList
            numColumns={2}
            noDataMessage='No Plant item to post'
            data={SampleData.myGarden}
            renderItem={(item) => (
              <MyGardenItem 
              // style={{marginLeft: 12.25, marginBottom: 12}}
                // imageURL={firebase.storage().refFromURL(item.imageURL)}
                imageURL={item.imageURL}
                plantType={item.plantType}
                commonName={item.commonName}
                onPress={() => Alert.alert(item.commonName)}/>
              )}
            keyExtractor={(item,index) => index}
          />

      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.fabContainer}
        onPress={() => navigation.navigate('Instruction')}
        >
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={ require('../../assets/drawerIcons/plantCareIcons/camera.png')}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.fabImage}
        />
      </TouchableOpacity>


       <Button 
          position='absolute'
          title='Result'
          onPress={ () => navigation.navigate('PlantCareResult')}
          // backgroundColor = "#000000"
          color = "#1A9B95"
          />

       <Button 
        style={{marginBottom: 12}}
          title='Plant Information'
          position='absolute'
         
          onPress={ () => navigation.navigate('PlantCarePlantInformation')}
          // backgroundColor = "#000000"
          color = "#8B81B6"
          /> 

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 12
  },
  searchBoxContainer: {
    marginLeft: 12,
    marginRight: 12,
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
    width: 20,
    marginRight: 8,
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

  flContainer: {
    flex: 1,
    backgroundColor: "#ffffff", 
    paddingHorizontal: 0,
    marginBottom: 13,
  },
})