import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';

import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList, 
  AccountListItem, PlantListItem, AddressListItem, BadgeHistoryListItem, MessagaNotifItem,
  PFCard,PFPostsCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';


export default function CreateQuestionPage({navigation}) {

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.container }>
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={ require('../../assets/img/profiles/Alejandre.jpg')}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.userPhoto}
        />
        <View styles={{flexDirection: 'column'}}>
          <PFText weight='semi-bold' size={15} style={{marginLeft: 10}}>@leyy</PFText>
          <PFText size={11} style={{marginLeft: 10}}>Public //pending part</PFText>
        </View>
      </View>

      <PFText size={15} style={{marginLeft: 25, marginTop: 20, marginBottom: 100}}>Your Question...</PFText>
      <View>
        <View style={styles.hr} />
           {/*<Text style={styles.or}>or</Text>*/}
      </View>
      
      <PFPrimaryButton style={{marginTop: 310, marginLeft: 25, marginRight: 20}} title={'Post'} onPress={() => navigation.navigate('DiscussionHomePage')}></PFPrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 600,
    borderWidth: 1,
    borderRadius: 15,
    margin: 15
  },
  userPhoto: {
    height: 45,
    width: 45,
    borderRadius: 100
  },
  container: {
    flexDirection:'row',
    marginLeft: 20,
    marginTop: 15
  },
  container1: {
    flexDirection:'row',
    marginLeft: 20
  },
  container2: {
    flexDirection:'row',
    marginLeft: 20,
    marginTop: 5
  },

  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#1D4123',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10
  }
})