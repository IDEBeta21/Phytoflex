import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from '../global/globalStyles';
import { useNavigation } from '@react-navigation/native';


// For testing langs. Delete din later
import { Card, FAB, Portal, Provider, Title, } from 'react-native-paper';

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

  // Delete an Album
  const deletePlantAlbum = async(itemId) => {
    await firebase.firestore().collection('PlantMonitoring').doc(itemId).delete()
    .then(async(res) => {
      var itemId_query = firebase.firestore().collection('PlantReminder').where('documentId','==', itemId);
      await itemId_query.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
        });
      }).then((res) => {
        Alert.alert('Plant removed successfully')
        onRefresh();
      });
    })
    
  }

  // Show the prompt to detele an Album
  const showDeleteAlert = (itemId) =>{
    return Alert.alert(
      "Delete this Album?",
      "Are you sure you want to remove this Plant Album?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deletePlantAlbum(itemId)
            // Alert.alert(itemId)
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  const imgref = (url) => {
    firebase.storage().refFromURL(url).then((res) => {
      return res;
    })
  }

  useEffect(() => {
    (async() => {
      // const user = firebase.auth().currentUser

      // if(user){
      //   await firebase.firestore()
      //   .collection('PlantMonitoring').where('userId', '==' , user.uid).get()
      //   .then((res) => {
      //     let snap = res.docs.map(doc => { // saka gumamit ako ng map
      //       const data = doc.data();
      //       const id = doc.id;
      //       return {id, ...data}
      //     })
      //     setuserSnaps(snap);
      //     setsnapLoading(false)
      //     // console.log();
      //   })
      // }else{
      //   setnoSnapMessage('Login First to Monitor your Plants')
      //   setsnapLoading(false)
      // }
      onRefresh()

      
      // await firebase.auth().then((res) => {
      //   console.log(res.currentUser.uid)
      // })
    })()
  }, [])

  // Refresh the list of plant albums
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
              contentContainerStyle={{ paddingTop: 5, paddingBottom: 3 }}
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
                  <ScrollView 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  >
                    <TouchableOpacity onPress={() => navigation.navigate('PlantCareCamera')}>
                      <Card style={styles.cardContainer} 
                      // onPress={() => navigation.navigate('PlantCareCamera')}
                      >
                
                        <Card.Cover 
                          // source={require('../../assets/img/snap.png')}
                          source={require('../../assets/img/snap.png')}
                          resizeMode={'cover'}
                          style={{ 
                            height: 165, 
                            width: 100,
                            
                            borderTopLeftRadius: 7, 
                            borderTopRightRadius: 7, 
                            borderBottomLeftRadius: 7, 
                            borderBottomRightRadius: 7,

                          }}
                          // onPress={() => navigation.navigate('PlantCareCamera')}
                        />
                        {/* </Card> */}

                      <View 
                        // text in front of image
                        style={{position: 'absolute', top: 0, left: 0, right: 0, height: 190, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 7,  }}>

                          <Image
                          source={require('../../assets/img/camera-outline.png')}
                          />
                          <Text  
                            // adjustsFontSizeToFit 
                            numberOfLines={2}
                            style={{lineHeight: 20, textAlign: 'center', color: '#ffffff', fontFamily: 'poppins-regular', color: "white", textShadowColor: 'black', textShadowOffset: { width: -1, height: 0 }, textShadowRadius: 10, fontWeight: '800' }}>Identify a Plant</Text>  
                      </View>
                        
                    </Card>
                  </TouchableOpacity>

                  <FlatList 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    contentContainerStyle={{ paddingLeft: 1, paddingRight: 7 }}
                    // data={SampleData.myGarden}
                    data={userSnaps}
                    renderItem={({item}) => (
                      <Pressable onPress={() => navigation.navigate('PlantCareAlbum',{
                          plantMonitoringId: item.id
                        })}>
                        
                      <RecentSnapsItem
                          // imageURL={firebase.storage().refFromURL(item.imageURL)}
                          imageURL={item.firebaseDirectory}
                          description={item.plantName}
                          // onPress={() => navigation.navigate('PlantCareAlbum',{
                          //   plantMonitoringId: item.id
                          // })}
                          />

                      </Pressable>
                      )}
                    keyExtractor={(item,index) => index}
                  />
                </ScrollView>
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
                      })}

                      onLongPress={() => showDeleteAlert(item.id)}
                    />
                  )}
                  keyExtractor={(item,index) => index}
                />
            </ScrollView>
          }

      {/* <FAB
        icon="plus"
        style={{ position: 'absolute', backgroundColor: '#ffffff', margin: 16, right: 0, bottom: -1, }} 
        onPress={() => navigation.navigate('PlantCareCamera')}
        /> */}


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

  cardContainer: {
    marginLeft: 7, 
    marginRight: -1,
    height:  79,
    width: 100,
    borderTopLeftRadius: 7, 
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7, 
    borderBottomRightRadius: 7,
    flexDirection: 'row',
    // width: (Dimensions.get('window').width/2) * 0.93
  },
})