import { Button, Text, View, StyleSheet, TextInput, Image, Dimensions, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Portal } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';

export default function TutorialPage({navigation}) {
    return (
        <View style={styles.mainContainer}> 
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.box}>
              <View style={{marginBottom: 10}}>
                <Image 
                  source={require('../../assets/img/tutorials/Intro.png')}
                  style={{
                    resizeMode: 'cover', 
                    alignSelf: 'center',
                    width: 298,
                    height: 280,
                    margin: 0
                  }}
                  />
              </View>
              <View style={{marginBottom: 15}}>
                <Image 
                  source={require('../../assets/img/tutorials/Social_Media.png')}
                  style={{
                    resizeMode: 'cover', 
                    alignSelf: 'center',
                    width: 298,
                    height: 210,
                    margin: 0
                  }}
                  />
              </View>
              <View style={{marginBottom: 15}}>
                <Image 
                  source={require('../../assets/img/tutorials/Discussion.png')}
                  style={{
                    resizeMode: 'cover', 
                    alignSelf: 'center',
                    width: 298,
                    height: 210,
                    margin: 0
                  }}
                  />
              </View>
              <View style={{marginBottom: 15}}>
                <Image 
                  source={require('../../assets/img/tutorials/Garden.png')}
                  style={{
                    resizeMode: 'cover', 
                    alignSelf: 'center',
                    width: 298,
                    height: 210,
                    margin: 0
                  }}
                  />
              </View>
              <View style={{marginBottom: 15}}>
                <Image 
                  source={require('../../assets/img/tutorials/Shop.png')}
                  style={{
                    resizeMode: 'cover', 
                    alignSelf: 'center',
                    width: 298,
                    height: 210,
                    margin: 0
                  }}
                  />
              </View>
              <View style={{marginBottom: 15}}>
                  <View style={styles.guestButtonArea}>
                    <Text style={{ color: '#639d04', fontSize: 12, fontFamily: 'poppins-regular', textAlignVertical: 'center', textAlign: 'center'}}>For a detailed instruction, go to Settings - How to use the Phytoflex App</Text>
                  </View>
              </View>
            </View>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  box: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1d4123',
    width: '100%',
    padding: 10,
    flexDirection: 'column'
  },
  guestButtonArea: {
    height: 50,
    width: 260,
    marginTop: 5,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
    
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    borderWidth: 1,
    borderColor: '#639d04',
    fontFamily: 'poppins-regular'
  }
})