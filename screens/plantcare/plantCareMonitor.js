import { Text, StyleSheet, SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { Component, useState} from 'react';
import useAutoFocusInputs from 'use-auto-focus-inputs';
import { TextInput, Button } from 'react-native-paper';

// import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native'; 
import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton, PFRadioButton,
  PFFlatList, 
  AccountListItem, PlantListItem, MyGardenItem, RecentSnapsItem,
  PFCard
} from '../../components';
import { color } from 'react-native-reanimated';


export default function PlantCareMonitor({navigation}) {
  return (

    <ScrollView>
      <SafeAreaView>

        <PFText weight='regular' style={styles.label}>Title</PFText>
          <TextInput
            style={{marginStart: 12, marginEnd: 12, borderColor: 'green', fontFamily: 'poppins-light', }}
                mode="outlined"
                placeholder="Type something"
                // label="Outlined input"
                activeOutlineColor='green'
                maxLength={50}
                // multiline={true}
                // numberOfLines={1}
                // outlineColor='black'
              />

        <PFText weight='regular' style={styles.label}>Description</PFText>
          <TextInput
            style={{marginStart: 12, marginEnd: 12, borderColor: 'pink' }}
                mode="outlined"
                // label="Outlined input"
                placeholder="Type something"
                activeOutlineColor='green'
                multiline={true}
                scrollEnabled={true}
                editable={true}
                numberOfLines={8}
                maxLength={140}
                right={<TextInput.Affix text="/140" />}
              />

        <Button 
          style={{ marginTop: 15, marginStart: 12, marginEnd: 12, padding: 10}}
        
          labelStyle={{ color: 'white', fontFamily: 'poppins-semiBold' }}
          icon="image" 
          mode="contained" 
          color='#639D04' 
          onPress={() => console.log('Pressed')}> Upload a photo</Button>
    

      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    elevation: 20
  },

  label:{
    fontSize: 16,
    marginTop: 24,
    color: '#000000',
    // marginTop: 12,
    paddingStart: 12,
    paddingBottom: 0,
    marginBottom: 0,
    // paddingBottom: 4,
    // fontSize: 14,
    fontFamily: 'poppins-semiBold'
},

  input: {
    // height: 40,
    // margin: 12,
    marginTop: 0,
    // marginBottom: 12,
    marginStart: 12,
    marginEnd: 12,
    borderWidth: 1,
    // padding: 10,
    fontFamily: 'poppins-light',
  },
})