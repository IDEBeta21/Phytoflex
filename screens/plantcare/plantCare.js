import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, StatusBar, SafeAreaView, Title, Paragraph, Alert, FlatList, Card, Pressable} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';
import { globalStyles } from '../global/globalStyles';
import { useNavigation } from '@react-navigation/native';
// import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { MyComponent } from './../../components/Card/Cardy';
import { FAB } from 'react-native-paper';
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
        <PFFlatList style={styles.flatList}
          data={SampleData.myPlantCare}
          renderItem={(item) => (

            <MyComponent
              // imageURL={firebase.storage().refFromURL(item.imageURL)}
              imageURL={item.imageURL}
              title={item.title}
              description={item.description}
              
              onPress={() => alert('Hello')}
            />
               
              )}
            keyExtractor={(item,index) => index}
        />

        </SafeAreaView>
      </ScrollView>

      {/* Floating icon */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => alert('Instruction')}
      />
   
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    paddingBottom: 8, 
    paddingTop: 12,
    // backgroundColor: '#DFDFDF',
    backgroundColor: '#f5f2f2',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#DFDFDF',
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

  flatList: {
    flexDirection: 'row',
  },

  fab: {
    position: 'absolute',
    // margin: 16,
    // right: 0,
    bottom: 0,
    marginBottom: 12,
    alignSelf: 'center',
    // justifyContent: 'flex-end',
    // flex: 1,
    backgroundColor: '#639D04',

  }


})