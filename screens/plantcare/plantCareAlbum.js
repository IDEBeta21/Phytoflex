import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable, StatusBar} from 'react-native';
import React, { Component, useState } from 'react';
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

export default function PlantCareAlbum ({navigation}) {
  return (

    <SafeAreaView 
      contentContainerStyle={{ flex: 1, }}> 

      <ScrollView 
        showsVerticalScrollIndicator={false}>
        
        <View style={styles.cardContainer}>
          <View style={{ flexDirection: 'row', }}>

            <View style={{ width: '27%' }}>
              <Image
                  style={styles.imageStyle}
                  source={require('./../../assets/img/plantcare/pc_photo1.png')} 
                />
            </View>

              {/* Text container */}
            <View style={{ width: '73%' }}>
              <Text style={styles.title}>WATER THE PLANTS - 08:00 AM</Text>
              <View style={{ flex: 1 }}>
                <Text  
                  numberOfLines={4} 
                  style={styles.description}>Small reddish spots appear on the leaves in the early stage  reddish spots appear on the leaves in the early stage  reddish. Small reddish spots appear on the leaves in the early stage.</Text>
              </View>
            </View>  

          </View>
        </View>  

        <View style={styles.divider} />

          <FlatList 
              numColumns={2} 
              showsHorizontalScrollIndicator={false} 
              data={SampleData.myGarden}
              contentContainerStyle={{ paddingTop: 15, paddingBottom: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10  }}
              renderItem={({item}) => (
              
                <DailyPlantMonitor
                    // imageURL={firebase.storage().refFromURL(item.imageURL)}
                    imageURL={item.imageURL}
                    description={item.commonName}
                    onPress={() => alert("Hello")}
                />
              )}
                keyExtractor={(item,index) => index}
          />

      </ScrollView>

        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => alert('Pressed')}
        />

    </SafeAreaView>
    
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
    margin: 16, 
    right: 0, 
    bottom: 0, 
    backgroundColor: '#ffffff', 
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