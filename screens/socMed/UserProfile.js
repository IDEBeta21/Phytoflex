import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';

import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFFollowedButton,
  PFFlatList, 
  AccountListItem, PlantListItem, AddressListItem, BadgeHistoryListItem, MessagaNotifItem,
  PFCard,PFPostsCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';


export default function UserProfilePage({navigation}) {

  return (
    
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/img/profiles/Alejandre.jpg')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.userPhoto}
          />
          <View styles={{flexDirection: 'column', marginLeft: 10}}>
            <View style={{width: 250}}>
              <PFText weight='semi-bold' size={20} style={{marginLeft: 10, paddingRight: 10, paddingLeft: 10, paddingTop: 0, paddingBottom: 0}}>Leila Jane L. Alejandre</PFText>
            </View>
            <PFText size={13} style={{marginLeft: 10, paddingLeft: 10, }}>@leyy</PFText>
            {/* <PFFollowedButton title={'Following'} onPress={() => navigation.navigate('')}></PFFollowedButton> */}
            <TouchableOpacity onPress={() => gotoHome()}>
              <View style={styles.guestButtonArea}>
                <Text style={{ color: '#639d04', fontSize: 12, fontFamily: 'poppins-regular'}}>Following</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.followCon}>
          <View style={styles.container2}>
            <Text style={styles.txt}>150</Text>
            <Text style={styles.txt1}>Followers</Text>
          </View>
          <View style={styles.container3}>
            <Text style={styles.txt}>200</Text>
            <Text style={styles.txt1}>Following</Text>
          </View>
        </View>

        <View>
          <View style={styles.hr} />
        </View>

        <View style={styles.txtStyles}>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/logo.png')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.userPhoto1}
          />
          <Text style={styles.txt3}>Joined Phytoflex since July 2021</Text>
        </View>

        <View>
          <View style={styles.hr1} />
        </View>

        <View style={styles.mainPostContainer}>
          <PFFlatList
            numColumns={1}
            noDataMessage='No Followers'
            data={SampleData.cardPostData}
            renderItem={(item) => (
              <PFPostsCard 
                imageURL={item.imageURL}
                userPhoto={item.userPhoto}
                name={item.name}
                description={item.description}
                timeDate={item.timeDate}
                onPress={() => navigation.navigate('PostPage')}/>
            )}
            keyExtractor={(item,index) => index}
          />
        </View>
      </ScrollView>
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
  mainPostContainer: {
    // margin: 5,
    paddingTop: 10,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  userPhoto: {
    height: 90,
    width: 90,
    borderRadius: 100,
    marginTop: 15
  },
  userPhoto1: {
    height: 30,
    width: 30,
    borderRadius: 100
  },
  container: {
    flexDirection:'row',
    padding: 20,
    marginLeft: 20,
  },
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#639d04',
    borderBottomWidth: 2,
  },
  hr1: {
    position: 'relative',
    top: 0,
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
  },
  or: {
    width: 30,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  guestButtonArea: {
    height: 30,
    width: 100,
    marginTop: 5,
    padding: 5,
    marginLeft: 20,
    borderRadius: 100,
    
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
  },
  container2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginLeft: 50,
    marginRight: 30,

  },
  container3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginRight: 50,
    marginLeft: 30,
  },
  txt: {
    fontFamily: 'poppins-regular',
    color: 'white',
    fontSize: 18,
    padding: 0,
    margin: 0
  },
  txt1: {
    fontFamily: 'poppins-regular',
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    padding: 0,
    margin: 0
  },
  container4: {
    height: 200,
    padding: 10
  },
  txtStyles: {
    padding: 3,
    paddingLeft: 20,
    height: 30,
    flexDirection: 'row',
    margin: 10
  },
  txt3: {
    fontFamily: 'poppins-regular',
    color: Colors.primary,
    fontSize: 13,
    marginLeft: 10,
    marginTop: 5,
  },
  followCon: {
    flexDirection: 'row', 
    backgroundColor: '#1d4123', 
    paddingLeft: 30, 
    paddingRight: 30
  }
})