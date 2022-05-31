import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable, StatusBar, DatePickerAndroid} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';

import { globalStyles } from '../global/globalStyles';
import { useNavigation } from '@react-navigation/native';


// For testing langs. Delete din later
import { FAB } from 'react-native-paper';

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
import { DailyPlantMonitor } from '../../components/FlatList/Item/DailyPlantMonitor';

export default function PlantCareAlbum ({navigation, route}) {

  const [plantDesc, setplantDesc] = useState('')
  const [formalPlantName, setformalPlantName] = useState('')
  const [plantImageUrl, setplantImageUrl] = useState('')
  const [reminders, setreminders] = useState([])

  useEffect(() => {
    (async() => {
      console.log(route.params.plantMonitoringId)
      loadReminders()
    })()
  }, [])

  // Load reminders
  async function loadReminders(){
    await firebase.firestore()
      .collection('PlantMonitoring').doc(route.params.plantMonitoringId)
      .get().then((doc) => {
        console.log(doc.data())
        setformalPlantName(doc.data().plantName)
        setplantDesc(doc.data().plantDescription)
        setplantImageUrl(doc.data().imageUrl)
        // setreminders(doc.data().reminders)
      })

    await firebase.firestore()
    .collection('PlantReminder').where('documentId', '==', route.params.plantMonitoringId)
    .get().then((res) => {
      let snap = res.docs.map(doc => { // saka gumamit ako ng map
        const data = doc.data();
        const id = doc.id;
        return {id, ...data}
      })
      setreminders(snap)
    })
  } 

    // Delete an Album
    const deletePlantAlbum = async(itemId) => {
      await firebase.firestore().collection('PlantReminder').doc(itemId).delete()
      .then(async(res) => {
        loadReminders()
        Alert.alert("Removed reminder successfully")
      })
      
    }

  // Show the prompt to detele an Album
  const showDeleteAlert = (itemId) =>{
    return Alert.alert(
      "Delete this Reminder?",
      "Are you sure you want to remove this reminder?",
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

  return (

    <View 
      // contentContainerStyle={{ flex: 1, }}
      style={{flex: 1}}
      > 
      <View >

      <ScrollView 
        showsVerticalScrollIndicator={false}>
        
        <View style={styles.cardContainer}>
          <View style={{ flexDirection: 'row', }}>

            <View style={{ width: '27%' }}>
              <Image
                  style={styles.imageStyle}
                  // source={require('./../../assets/img/plantcare/pc_photo1.png')} 
                  source={{uri: plantImageUrl}} 
                />
            </View>

              {/* Text container */}
            <View style={{ width: '73%' }}>
              {/* <Text style={styles.title}>WATER THE PLANTS - 08:00 AM</Text> */}
              <Text style={styles.title}>{formalPlantName}</Text>
              <View style={{ flex: 1 }}>
                {/* <Text  
                  numberOfLines={4} 
                  style={styles.description}>Small reddish spots appear on the leaves in the early stage  reddish spots appear on the leaves in the early stage  reddish. Small reddish spots appear on the leaves in the early stage.</Text> */}
                <Text  
                  // numberOfLines={4} 
                  style={styles.description}>{plantDesc}</Text>
              </View>
            </View>  

          </View>
        </View>  

        <View style={styles.divider} />

          <FlatList 
              numColumns={2} 
              showsHorizontalScrollIndicator={false} 
              // data={SampleData.myGarden}
              data={reminders}
              contentContainerStyle={{ paddingTop: 15, paddingBottom: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10  }}
              renderItem={({item}) => (
              
                <DailyPlantMonitor
                    // imageURL={firebase.storage().refFromURL(item.imageURL)}
                    imageURL={item.reminderImageUrl}
                    description={item.title}
                    onPress={() => navigation.navigate('PlantCareReminderDetails',{
                      imageUrl: item.reminderImageUrl,
                      title: item.title,
                      description: item.remiderDesc,

                      reminderMsg: item.notifMessage,
                      reminderType: item.reminderType,
                      reminderTime: item.reminderTime,
                      reminderDate: item.reminderDate,
                      reminderFreq: item.frequency,
                      doneStatus: item.doneStatus,

                    })}

                    onLongPress={() => showDeleteAlert(item.id)}
                />
              )}
                keyExtractor={(item,index) => index}
          />

      </ScrollView>
      </View>

        <FAB
          style={{ position: 'absolute', backgroundColor: '#ffffff', margin: 16, right: 0, bottom: -1, }} 
          icon="plus"
          onPress={() => {navigation.navigate('PlantCareMonitor', { 
            documentId: route.params.plantMonitoringId,
            reminderImageUrl: plantImageUrl
          }) }}
        />

    </View>
    
  )
}

const styles = StyleSheet.create({

  cardContainer: {
    flex: 1,  
    marginStart: 8, 
    marginEnd: 8, 
    marginTop: 12, 
    paddingVertical: 7,
 },
 
  title: {
    color: '#639D04', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 14,
  },

  description: {
     textAlign: 'justify', 
     fontFamily: 'poppins-regular', 
     color: '#1D4123', 
     fontSize: 12, 
     textAlign: 'justify' 
  },

  fab: {
    position: 'absolute', 
    backgroundColor: '#ffffff', 
    margin: 16, 
    right: 0, 
    bottom: -1, 
  },

  divider: {
    paddingTop: 2, 
    borderBottomColor: '#D7D7D7', 
    borderBottomWidth: 1, 
    marginStart: 9, 
    marginEnd: 9 
  },

  imageStyle: {
     height: 80, 
     width: 80, 
     backgroundColor: '#43683F',
     borderRadius: 100 
  },

})