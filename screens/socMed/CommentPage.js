import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList, PFCommentCard,
  PFCard, PFPostsCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';


export default function CommentPage({navigation}) {

  return (
    <View style={ styles.mainContainer }>
      <PFFlatList
          numColumns={1}
          noDataMessage='No Followers'
          data={SampleData.commentDetails}
          renderItem={(item) => (
            <PFCommentCard 
              userPhoto={item.userPhoto}
              name={item.name}
              comment={item.comment}
              reactionNum={item.reactionNum}
              replyNum={item.replyNum}
              time={item.time}/>
          )}
          keyExtractor={(item,index) => index}
      />
        {/* Comments Container
        <View style={styles.commentSection}>
          <View style={ styles.container }>
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/img/profiles/Vega.jpg')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.userPhoto1}
            />
            <View styles={{flexDirection: 'column'}}>
            <View style={ styles.container }>
            <PFText weight='semi-bold' size={13}>Jocelyn Vega</PFText>
                <PFText weight='semi-bold' size={10} style={{marginLeft: 8, marginTop: 3}}>•</PFText>
                <PFText size={10} style={{marginLeft: 8, marginTop: 3}}>10m</PFText>
              </View>
              <View style={ styles.container }>
                <TextInput style={styles.commentTxtBox}>Love that plant.</TextInput>
                  <View style={{borderWidth: 1, borderRadius: 100, borderColor: Colors.primary, margin: 5, marginLeft: 10}}>
                    <Image
                      // FAB using TouchableOpacity with an image
                      // For online image
                      source={ require('../../assets/drawerIcons/socmedIcons/bloom_react.png')}
                      // For local image
                      //source={require('./images/float-add-icon.png')}
                      style={styles.commentReactSize}
                    />
                  </View>
              </View>
              <View style={ styles.container }>
                <PFText size={11} onPress={() => navigation.navigate('')} style={{marginLeft: 5}}>Reply</PFText>
              </View>
            </View>
          </View>
        </View>
        <PFText style={{marginTop: 10}} onPress={() => navigation.navigate('')}>View All Comments</PFText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    // margin: 5,
    paddingTop: 10,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  userPhoto: {
    height: 40,
    width: 40,
    borderRadius: 100
  },
  userPhoto1: {
    height: 35,
    width: 35,
    borderRadius: 100,
    marginRight: 10
  },
  container: {
    flexDirection:'row'
  },
  addbtn: {
    height: 30,
    width: 30,
    marginLeft: 5,
    borderRadius: 100
  },
  image: {
    height:290,
    width: (Dimensions.get('window').width/2) * 1.6,
    borderRadius: 10
  },
  reactContainer: {
    flexDirection: 'row', 
    borderWidth: 1, 
    borderRadius: 30, 
    alignItems: 'center', 
    padding: 5,
    paddingLeft: 20,
    marginTop: 10
  },
  reactSize: {
    height: 30,
    width: (Dimensions.get('window').width) * 0.10,
    marginRight: 30,
    marginLeft: 20
  },
  commentReactSize: {
    height: 20,
    width: 20,
    margin: 4
  },
  commentSection: {
    marginTop: 10
  },
  commentTxtBox: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    width: 230,
    height: 40,
    fontFamily: 'poppins-light',
    color: '#1D4123',
    fontSize: 13,
    padding: 10
  }
})