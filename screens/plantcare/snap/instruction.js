import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components'
import { NavigationContainer } from '@react-navigation/native'

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

                {/* <Text>instruction  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.</Text> */}
          
        </ScrollView>
      </View>
      <View style={styles.textContainer}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('PlantCareCamera')}> */}
          {/* <PFText>Proceed to capturing...</PFText> */}
          <PFSecondaryButton 
            onPress={() => {navigation.navigate('PlantCareCamera', {title: "Hello world"})}}
            title={'Capture'} style={{width: 200}}></PFSecondaryButton>
        {/* </TouchableOpacity> */}
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    // paddingRight: 10,
    paddingVertical: 5,
    // paddingBottom: 50,
    // marginBottom: 60,
    elevation: 20
  }
})