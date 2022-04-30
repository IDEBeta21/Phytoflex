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
  PFCard, PFPostsCard,
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';

export default function FollowingScreenPage({navigation}) {

  return (
    <View style={ globalStyles.socmed }>
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
              onPress={() => Alert.alert(item.name)}/>
          )}
          keyExtractor={(item,index) => index}
        />
      <View style={styles.createpost}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('')}
        >
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/logo.png')}
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
  userImage: {
    height: 40,
    width: 40
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
    paddingVertical: 5
  },
  textFormat: {
    paddingLeft: 10,
    paddingTop: 8
  }
})
