import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList, 
  AccountListItem, PlantListItem, AddressListItem, BadgeHistoryListItem, MessagaNotifItem,
  PFCard, PFPostsCard, PFPostsNoImageCard,
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';

export default function AllScreenPage({navigation}) {

  return (
    <View style={ styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <PFFlatList
            numColumns={1}
            noDataMessage='No Followers'
            data={SampleData.cardPostNoImageData}
            renderItem={(item) => (
              <PFPostsNoImageCard 
                name={item.name}
                description={item.description}
                timeDate={item.timeDate}/>
            )}
            keyExtractor={(item,index) => index}
          />
        </View>      
      </ScrollView>
      <View style={styles.createpost}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('UserProfilePage')}
            >
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/img/profiles/Alejandre.jpg')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.userImage}
              />
            </TouchableOpacity>
            <PFText weight='semi-bold' size={15} style={styles.textFormat}>Leila Jane Alejandre</PFText>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('CreatePostPage')}
            >
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/drawerIcons/socmedIcons/add_post.png')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.createpostIcon}
              />
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 100
  },
  createpostIcon: {
    height: 30,
    width: 30,
    marginLeft: 90,
    marginTop: 5
  },
  createpost: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    marginLeft: 20
  },
  textFormat: {
    paddingLeft: 10,
    paddingTop: 8
  },
  userPhoto: {
    height: 40,
    width: 40,
    borderRadius: 100
  },
  conFollow: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    marginRight: 10
  },
  guestButtonArea: {
    height: 25,
    width: 80,
    borderRadius: 100,
    
    alignItems: 'center', 
    justifyContent: 'center',
    
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    borderWidth: 1,
    borderColor: '#1d4123',
    fontFamily: 'poppins-regular',
    marginTop: 8
  },
})
