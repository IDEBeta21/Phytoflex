import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from '../global/globalStyles';
import { useNavigation } from '@react-navigation/native';


// For testing langs. Delete din later
import { FAB, Portal, Provider, Title, } from 'react-native-paper';

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

  const [userSnaps, setuserSnaps] = useState([])

  const [noSnapMessage, setnoSnapMessage] = useState('')

  const [snapLoading, setsnapLoading] = useState(true)

  const imgref = (url) => {
    firebase.storage().refFromURL(url).then((res) => {
      return res;
    })
  }

  useEffect(() => {
    (async() => {
      const user = firebase.auth().currentUser

      if(user){
        await firebase.firestore()
        .collection('PlantMonitoring').where('userId', '==' , user.uid).get()
        .then((res) => {
          let snap = res.docs.map(doc => { // saka gumamit ako ng map
            const data = doc.data();
            const id = doc.id;
            return {id, ...data}
          })
          setuserSnaps(snap);
          setsnapLoading(false)
          // console.log();
        })
      }else{
        setnoSnapMessage('Login First to Monitor your Plants')
        setsnapLoading(false)
      }

      
      // await firebase.auth().then((res) => {
      //   console.log(res.currentUser.uid)
      // })
    })()
  }, [])

  async function onRefresh () {
    setsnapLoading(true)
    const user = firebase.auth().currentUser

      if(user){
        await firebase.firestore()
        .collection('PlantMonitoring').where('userId', '==' , user.uid).get()
        .then((res) => {
          let snap = res.docs.map(doc => { // saka gumamit ako ng map
            const data = doc.data();
            const id = doc.id;
            return {id, ...data}
          })
          setuserSnaps(snap);
          setsnapLoading(false)
          // console.log();
        })
      }else{
        setnoSnapMessage('Login First to Monitor your Plants')
        setsnapLoading(false)
      }

  }
  

  return (
    <View style={ styles.mainContainer }>
        {/* Search box */}
        {/* <View style={styles.searchBoxContainer}>
          <Image
            style={styles.searchBoxIcon}
            source={require('../../assets/drawerIcons/plantCareIcons/search.png')}
            resizeMode='contain'
          />
          <TextInput
            style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1}}
            placeholder='Search' 
          />
        </View> */}

       

          

        
            

          {snapLoading ? 
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <PFText size={16}>Loading...</PFText>
            </View>
            :
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.flContainer}>
                {/* {
                  noSnapMessage == '' ?  */}
                    <View style={{flexDirection: 'row'}}>
                      <Title style={{ color: Colors.primary , marginLeft: 7, fontSize: 15, fontFamily: 'poppins-regular', color: '#1D4123' ,flex: 1}}>
                        Recent Snaps</Title> 
                      <TouchableOpacity style={{alignItems: 'flex-end', marginRight: 7}} onPress = {() => onRefresh()}>
                        <Title style={{ color: Colors.primary , marginLeft: 7, fontSize: 15, fontFamily: 'poppins-regular', color: '#1D4123', flex: 1, }}>
                        Refresh</Title> 
                      </TouchableOpacity>
                    </View>
                  {/* :
                  null
                } */}
                <SafeAreaView style={{ height: 169 }}>
                  <FlatList 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={{ paddingLeft: 1, paddingRight: 7 }}
                    // data={SampleData.myGarden}
                    data={userSnaps}
                    renderItem={({item}) => (
                    
                      <RecentSnapsItem
                          // imageURL={firebase.storage().refFromURL(item.imageURL)}
                          imageURL={item.firebaseDirectory}
                          description={item.plantName}
                          onPress={() => alert("Hello")}/>

                      )}
                    keyExtractor={(item,index) => index}
                  />
                </SafeAreaView> 
              </View>
              <PFFlatList
                  numColumns={2}
                  noDataMessage={noSnapMessage}
                  // noDataMessage='No Plant item to post'
                  // data={SampleData.myGarden}
                  data={userSnaps}
                  renderItem={(item) => (
                    <MyGardenItem 
                      // imageURL={firebase.storage().refFromURL(item.imageURL)}
                      imageURL={item.firebaseDirectory}
                      plantType={""}
                      commonName={item.plantName}
                      onPress={() => navigation.navigate('PlantCareAlbum',{
                        plantMonitoringId: item.id
                      })}/>
                    )}
                  keyExtractor={(item,index) => index}
                />
            </ScrollView>
          }

      <FAB
        icon="camera-outline"
        style={{ position: 'absolute', backgroundColor: '#ffffff', margin: 16, right: 0, bottom: -1, }} 
        onPress={() => navigation.navigate('PlantCareCamera')}
        />


    </View>
  );
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  searchBoxContainer: {
    marginStart: 7,
    marginRight: 7,
    backgroundColor: '#E5E7EA',
    paddingVertical: 7,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
  },

  searchBoxIcon: {
    height: 20,
    width: 20,
    marginStart: 6,
    marginEnd: 6,
  },

  flContainer: {
    flex: 1,
    backgroundColor: "#ffffff", 
    paddingHorizontal: 0,
    marginBottom: 13,
  },
})