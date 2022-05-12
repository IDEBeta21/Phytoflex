import { Text, StyleSheet, SafeAreaView, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { Component, useState} from 'react';
import useAutoFocusInputs from 'use-auto-focus-inputs';
import { TextInput, Button } from 'react-native-paper';

// import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native'; 
import { PFText } from '../../components';
import { color } from 'react-native-reanimated';


export default function PlantCareDescription({navigation}) {
  return (

    <ScrollView showsVerticalScrollIndicator={false}
    contentContainerStyle={{ backgroundColor: 'white'}}>
      <SafeAreaView>

        <View style={{ paddingBottom: 5, }}>
          <Image
          style={styles.image}
          source={require('./../../assets/img/plantcare/Image.png')}/>
        </View>

        <PFText weight='poppins-semiBold' style={styles.label}>Plant name</PFText>
          <TextInput
            style={styles.input}
                mode="outlined"
                placeholder="Cactus"
                // label="Outlined input"
                activeOutlineColor='green'
                maxLength={40}
                // multiline={true}
                // numberOfLines={1}
                // outlineColor='black'
          />

        <PFText weight='regular' style={styles.label}>Kingdom</PFText>
          <TextInput
            style={styles.input}
                mode="outlined"
                placeholder="Plantae"
                // label="Outlined input"
                activeOutlineColor='green'
                maxLength={50}
                // multiline={true}
                // numberOfLines={1}
                // outlineColor='black'
          />

        <PFText weight='regular' style={styles.label}>Family</PFText>
          <TextInput
            style={styles.input}
                mode="outlined"
                placeholder="Amaranthaceae"
                // label="Outlined input"
                activeOutlineColor='green'
                maxLength={50}
                // multiline={true}
                // numberOfLines={1}
                // outlineColor='black'
          />


        <PFText weight='regular' style={styles.label}>Description</PFText>
          <TextInput
            style={styles.input}
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
          style={styles.button}
          labelStyle={{ color: 'white', fontFamily: 'poppins-semiBold' }}
          // icon="image" 
          mode="contained" 
          color='#639D04' 
          onPress={() => console.log('Pressed')}> Monitor this plant</Button>
    

      </SafeAreaView>
    </ScrollView>

  )
}

const styles = StyleSheet.create({

  label:{
    fontSize: 16,
    paddingStart: 14,
    marginTop: 16,
    marginBottom: -4,
    fontFamily: 'poppins-semiBold'
  },

  input: {
    marginStart: 14, 
    marginEnd: 14, 
    borderColor: 'green', 
    fontFamily: 'poppins-light', 
  },

  image: {
    width: '100%', 
    height: 237, 
    resizeMode: 'cover',
  },

  button: {
    marginTop: 15, 
    marginBottom: 15, 
    marginStart: 14, 
    marginEnd: 14, 
    padding: 10
  }



  
})