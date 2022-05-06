import { Text, StyleSheet, View, ScrollView, Image, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
// import React, { Component, useState } from 'react';
import React, { Component  } from 'react';
import {useState} from "react";
// import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { Avatar, Card, Title, Paragraph, Surface } from 'react-native-paper';

import firebase from 'firebase';
import { MyComponent1 } from '../../components'

import { NavigationContainer } from '@react-navigation/native';

import { 
    PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
    PFModalLogin , PFModalAlert, PFModalPrompt, 
    PFPrimaryButton, PFSecondaryButton, PFRadioButton,
    PFFlatList, 
    AccountListItem, PlantListItem, MyGardenItem,
    PFCard
  } from '../../components';
import SampleData from '../../utils/SampleData';


export default function PlantCarePlantCareTips({navigation}) {
  return (
    
    <View style={ styles.mainContainer }>

      <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          paddingBottom: 1, 
          backgroundColor: 'white', 
          paddingTop: 9, 
        }}>

    
        <PFFlatList
            numColumns={1}
            data={SampleData.myTips}
            renderItem={(item) => (
            
              
                <Card style={styles.card} 
                // onPress={ () => navigation.navigate('PlantCareTips')} 
                >
                  
                  <Card.Cover 
                    source={{uri: item.imageURL}}
                    style={{borderTopLeftRadius: 7, borderTopRightRadius: 7}}  
                  />
                    <Surface style={styles.surface}>
                      <Card.Content style={styles.styleContent}>
                        <PFText weight='semi-bold'>{item.title}</PFText>
                        <PFText weight='light' numberOfLines={2}>{item.description}</PFText>
                      </Card.Content> 
                    </Surface>
                   
                </Card>
              

               )}
          />

      </ScrollView>

    </View>

  );
}



const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: 'pink',
  },

  card: {
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 9,
    // height: 263,
    alignSelf: 'stretch',
    alignContent: 'center',
  },

  surface: {
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    
    shadowColor: "#E3E3E3",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity:  0.24,
    shadowRadius: 17.43,
    elevation: 21
 
  },

  btn_active: {
    height: 36,
    borderRadius: 24,
    width: 91,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    backgroundColor: "#639D04",
  },

  btn: {
    height: 36,
    borderRadius: 24,
    width: 91,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    backgroundColor: "#e4e9f2",
  },

  styleContent:{
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  
  }


  })





