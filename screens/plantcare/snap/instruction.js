import { Text, StyleSheet, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native';

export default function Instruction({navigation}) {
  return (
        
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={{
        backgroundColor: '#ffffff', 
        marginHorizontal: 12,
        paddingBottom: 14,
        marginTop: 16
      }}>


      {/* 1 */}
        <View style={styles.card}>
          <PFText style={styles.text}>1. Focus the plant in the center of the frame, avoid dark or blurry images.</PFText>
          <Image style={styles.image}
            source={require('./../../../assets/img/plantcare/instruction/image1.png')}/>
        </View>

      {/* 2 */}
        <View style={styles.card}>
          <PFText style={styles.text}>2. If the plant is too big for the frame, just make sure to include the leaves or flower of the plant.</PFText>
          <Image style={styles.image}
            source={require('./../../../assets/img/plantcare/instruction/image2.png')}/>
        </View>
        
      {/* 3 */}
        <View style={styles.card}>
          <PFText style={styles.text}>3. Avoid getting too close, just make sure the leaves or flower are clear and in complete view.</PFText>
          <Image style={styles.image}
            source={require('./../../../assets/img/plantcare/instruction/image3.png')}/>
        </View>
        
      {/* 4 */}
        <View style={styles.card}>
          <PFText style={styles.text}>4. Focus on the flower if your plant has flowers.</PFText>
          <Image style={styles.image}
            source={require('./../../../assets/img/plantcare/instruction/image4.png')}/>
        </View>

      {/* 5 */}
        <View style={styles.card}>
          <PFText style={styles.text}>5. Only include one species at a time.</PFText>
          <Image style={styles.image}
            source={require('./../../../assets/img/plantcare/instruction/image3.png')}/>
        </View>

      </ScrollView>
    </View>

    
  )
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: '#ffffff', 
    flex: 1,
    alignItems: 'center',
  }, 

  card: { 
    paddingBottom: 20,
    flex: 1,
  },

  text: {
    paddingBottom: 6,
    textAlign: 'justify',
  },

  image: {
    width: 336, 
    height: 139, 
    resizeMode: 'contain', 
    alignItems: 'center', 
  },


})