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


export default function CreatePostPage({navigation}) {

  return (
    <View>
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
            <PFText weight='semi-bold' size={15} style={{marginLeft: 10}}>Leila Jane Alejandre</PFText>
            <View style={ styles.container1 }>
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/drawerIcons/socmedIcons/public_green.png')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.iconStyle}
              />
              <PFText size={11} style={{marginLeft: 5}}>Public</PFText>
            </View>
          </View>
        </View>

        <PFText size={15} style={{marginLeft: 25, marginTop: 20, marginBottom: 205}}>Write something...</PFText>
        <View>
          <View style={styles.hr} />
            {/* <Text style={styles.or}>or</Text> */}
        </View>
        
        <View style={ styles.container2 }>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('')}                          
            style={{flexDirection: 'row'}}
          >
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/socmedIcons/add_image_green.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.addbtn}
            />
            <PFText size={15} style={{marginLeft: 10, marginTop: 5}}>Add Photos</PFText>
          </TouchableOpacity>  
        </View>

        <View>
          <View style={styles.hr} />
            {/* <Text style={styles.or}>or</Text> */}
        </View>

        <View style={ styles.container2 }>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/drawerIcons/socmedIcons/add_video_green.png')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.addbtn}
          />
          <PFText size={15} style={{marginLeft: 10, marginTop: 5}}>Add Videos</PFText>
        </View>

        <View>
          <View style={styles.hr} />
            {/* <Text style={styles.or}>or</Text> */}
        </View>

        <View style={ styles.container2 }>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/drawerIcons/socmedIcons/change_privacy_green.png')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.addbtn}
          />
          <PFText size={15} style={{marginLeft: 10, marginTop: 5}}>Change Privacy</PFText>
        </View>
      </View>
      <PFPrimaryButton style={{marginTop: 10, marginLeft: 25, marginRight: 20}} title={'Post'} onPress={() => navigation.navigate('CreatePostPage')}></PFPrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 440,
    borderWidth: 1,
    borderRadius: 15,
    margin: 15
  },
  userPhoto: {
    height: 45,
    width: 45,
    borderRadius: 100
  },
  iconStyle: {
    height: 15,
    width: 15,
    marginLeft: 10
  },
  container: {
    flexDirection:'row',
    marginLeft: 20,
    marginTop: 15
  },
  container1: {
    flexDirection:'row'
  },
  container2: {
    flexDirection:'row',
    marginLeft: 15,
  },
  addbtn: {
    height: 30,
    width: 30,
    marginLeft: 5,
    borderRadius: 100
  },
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#1D4123',
    borderBottomWidth: 1,
    // marginLeft: 20,
    // marginRight: 20,
    marginBottom: 5,
    marginTop: 5
  },
  or: {
    width: 30,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  }
})