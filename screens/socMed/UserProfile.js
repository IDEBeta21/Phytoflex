import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
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


export default function UserProfilePage({navigation}) {

  return (
    
    <View>
      <View style={styles.container}>
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={ require('../../assets/img/profiles/Alejandre.jpg')}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.userPhoto}
        />
        <View styles={{flexDirection: 'column'}}>
          <PFText weight='semi-bold' size={25} style={{marginLeft: 10, paddingRight: 10, paddingLeft: 10, paddingTop: 0, paddingBottom: 0}}>Leila Jane L. Alejandre</PFText>
          <PFText size={15} style={{marginLeft: 10, paddingLeft: 10, }}>@leyy</PFText>
        </View>
      </View>

      <View></View>

      <View>
      <View style={styles.hr} />
      </View>

      <View></View>

      <View>
      <View style={styles.hr} />
      </View>

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
              timeDate={item.timeDate}/>
          )}
          keyExtractor={(item,index) => index}
        />
    </View>

  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 570,
    borderWidth: 1,
    borderRadius: 15,
    margin: 15
  },
  userPhoto: {
    height: 90,
    width: 90,
    borderRadius: 100
  },
  container: {
    flexDirection:'row',
    margin: 20,
    padding: 10
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
  addbtn: {
    height: 30,
    width: 30,
    marginLeft: 5,
    borderRadius: 100
  },
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },
  or: {
    width: 30,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  }
})