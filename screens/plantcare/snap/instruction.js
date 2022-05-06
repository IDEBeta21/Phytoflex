import { Text, StyleSheet, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native';

export default function Instruction({navigation}) {
  return (

    
      <View style={{flex:1 }}>
        
        <View>
          <ScrollView 
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <SafeAreaView
            contentContainerStyle={{ margin: 12}}
            style={{flex: 1}}>
              
            {/* Image 1 */}
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={require('./../../../assets/img/plantcare/instruction/Step1.png')}/>
            </View>

            {/* Image 2 */}
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={require('./../../../assets/img/plantcare/instruction/Step2.png')}/>
            </View>

            {/* Image 3 */}
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={require('./../../../assets/img/plantcare/instruction/Step3.png')}/>
            </View>

            {/* Image 4 */}
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={require('./../../../assets/img/plantcare/instruction/Step4.png')}/>
            </View>

            {/* Image 5 */}
            <View style={styles.imageContainer}>
              <Image 
                style={styles.image}
                source={require('./../../../assets/img/plantcare/instruction/Step5.png')}/>
            </View>
          
            </SafeAreaView>
            </ScrollView>
        </View>

      {/* Camera button 
        <View style={styles.textContainer}>
            <PFSecondaryButton 
              onPress={() => {navigation.navigate('PlantCareCamera', {title: "Hello world"})}}
              title={'Capture'} 
              style={{width: 200}}>
            </PFSecondaryButton>
        </View> */}
        
      </View>
    
  )
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    elevation: 20
  },

  image: {
    width: 357, height: 206, 
  },

  imageContainer: {
    alignItems: 'center', padding: 20, paddingTop: 8
  }
})