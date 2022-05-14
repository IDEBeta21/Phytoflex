import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList,
  PFCard, PFPostsCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';


export default function PostPage({navigation}) {

  const [liked, setLiked] = useState(false);

  return (
    <View style={ styles.mainContainer }>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={ styles.container }>
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={ require('../../assets/logo.png')}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.userPhoto}
        />
        <View styles={{flexDirection: 'column'}}>
          <PFText weight='semi-bold' size={15} style={{marginLeft: 10}}>Phytoflex</PFText>
          <View style={ styles.container1 }>
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/socmedIcons/public_green.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.iconStyle}
            />
            <PFText size={11} style={{marginLeft: 5}}>03/30/22 12:00 PM</PFText>
          </View>
        </View>
      </View>

      <PFText size={13} style={{marginTop: 10, marginBottom: 10, marginLeft: 10}}>Welcome to Phytoflex!</PFText>
      <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('')}
      >
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={ require('../../assets/img/socmed/Cover.png')}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      
      <View style={styles.reactContainer}>
          <View style={styles.reactSize}>
            <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
              <MaterialCommunityIcons
                name={liked ? "flower": "flower-outline" }
                size={24} 
                color={liked ? "#1D4123" : "#1D4123"}
                style={{marginTop: 3}}
              />
            </Pressable>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CommentPage')}
          >
            <Image
              source={ require('../../assets/drawerIcons/socmedIcons/comments.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('')}
          >
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/socmedIcons/more_icon.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
        </View>

        {/* Comments Container */}
        <View style={styles.commentSection} onPress={() => navigation.navigate('CommentPage')}>
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
                <TextInput style={styles.commentTxtBox} editable={false}>Love that plant.</TextInput>
                <View style={{borderWidth: 1, borderRadius: 100, borderColor: Colors.primary, paddingLeft: 2, paddingRight: 2, margin: 5, marginLeft: 10}}>
                  <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                    <MaterialCommunityIcons
                      name={liked ? "flower": "flower-outline" }
                      size={24} 
                      color={liked ? "#1D4123" : "#1D4123"}
                      style={{marginTop: 3}}
                    />
                  </Pressable>
                </View>
              </View>
              <View style={ styles.container }>
                <PFText size={11} onPress={() => navigation.navigate('')} style={{marginLeft: 5}}>Reply</PFText>
              </View>
            </View>
          </View>
        </View>
          <Pressable onPress={() => navigation.navigate('CommentPage')}>
            <PFText style={{marginTop: 10}}>View All Comments</PFText>
          </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 585,
    borderWidth: 1,
    borderRadius: 15,
    margin: 15,
    padding: 15
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
  iconStyle: {
    height: 12,
    width: 12,
    marginLeft: 10,
    marginTop: 2
  },
  container: {
    flexDirection:'row'
  },
  container1: {
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
    width: (Dimensions.get('window').width/1) * 0.82,
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
    width: 200,
    height: 40,
    fontFamily: 'poppins-light',
    color: '#1D4123',
    fontSize: 13,
    padding: 10
  }
})