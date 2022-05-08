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
      <ScrollView>
        {/* <View>
          <ScrollView horizontal = {true}>
            <PFFlatList
              numColumns={5}
              noDataMessage='Loading...'
              data={SampleData.followFriend}
              renderItem={(item) => (
                <PFFriendCard
                  userPhoto={item.userPhoto}
                  name={item.name}
                  onPress={() => {navigation.navigate()
                  }}
                />
              )}
              keyExtractor={(item,index) => index}
            />
          </ScrollView>
        </View>   */}
        <View>
          <PFFlatList
            numColumns={1}
            noDataMessage='No Comment'
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
        </View>      
      </ScrollView>
      <View style={styles.addComment}>
        <View style={ styles.container }>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/img/profiles/Alejandre.jpg')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.userImage}
          />
          <View styles={{flexDirection: 'column'}}>
            <View style={ styles.container }>
              <TextInput style={styles.commentTxtBox} placeholder={'Aa'}></TextInput>
                <View style={{margin: 5, marginLeft: 15}}>
                  <Image
                    // FAB using TouchableOpacity with an image
                    // For online image
                    source={ require('../../assets/drawerIcons/socmedIcons/send_icon.png')}
                    // For local image
                    //source={require('./images/float-add-icon.png')}
                    style={styles.commentReactSize}
                  />
                </View>
            </View>
          </View>
        </View>
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
    borderRadius: 100,
    marginRight: 10,
    marginLeft: 5
  },
  createpostIcon: {
    height: 30,
    width: 30,
    marginLeft: 90,
    marginTop: 5
  },
  addComment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15,
    width: (Dimensions.get('window').width/1),
    backgroundColor: '#639d04'
  },
  textFormat: {
    paddingLeft: 10,
    paddingTop: 8,
    color: '#1d4123',
    fontFamily: 'poppins-semiBold'
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
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#1D4123',
    borderBottomWidth: 1,
    // marginLeft: 20,
    // marginRight: 20,
    marginBottom: 10,
    marginTop: 5
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
    height: 30,
    width: 30,
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
  