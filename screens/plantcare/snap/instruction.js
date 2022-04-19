import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native';

export default function Instruction({navigation}) {
  return (

    <View style={{flex:1, paddingBottom: 48}}>
      <View>
        <ScrollView>
          <View style={{alignItems: 'center', padding: 20, paddingTop: 30}}>
            <Image 
              style={{width: 357, height: 207}}
              source={require('./../../../assets/img/plantcare/instruction/Step1.png')}/>
          </View>

          <View style={{alignItems: 'center', padding: 20, paddingTop: 8}}>
            <Image 
              style={{width: 357, height: 206}}
              source={require('./../../../assets/img/plantcare/instruction/Step2.png')}/>
          </View>

          <View style={{alignItems: 'center', padding: 20, paddingTop: 8}}>
            <Image 
              style={{width: 357, height: 207}}
              source={require('./../../../assets/img/plantcare/instruction/Step3.png')}/>
          </View>

          <View style={{alignItems: 'center', padding: 20, paddingTop: 8}}>
            <Image 
              style={{width: 357, height: 186}}
              source={require('./../../../assets/img/plantcare/instruction/Step4.png')}/>
          </View>

          <View style={{alignItems: 'center', padding: 20, paddingTop: 8}}>
            <Image 
              style={{width: 357, height: 184}}
              source={require('./../../../assets/img/plantcare/instruction/Step5.png')}/>
          </View>
        </ScrollView>
      </View>

      <View style={styles.textContainer}>
          <PFSecondaryButton 
            onPress={() => {navigation.navigate('PlantCareCamera', {title: "Hello world"})}}
            title={'Capture'} 
            style={{width: 200}}>
          </PFSecondaryButton>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    elevation: 20
  }
})