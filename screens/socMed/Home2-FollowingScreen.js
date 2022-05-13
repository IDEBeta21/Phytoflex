import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, SafeAreaView, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Portal } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList, PFFriendCard,
  AccountListItem, PlantListItem, AddressListItem, BadgeHistoryListItem, MessagaNotifItem,
  PFCard, PFPostsCard, PFPostsNoImageCard, FriendListItem, PFPostsImageOnlyCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import firebase from 'firebase';

import { ScrollView } from 'react-native-gesture-handler';

export default function FollowingScreenPage({navigation}) {

  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);

  const getUsers = async() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.email);
        firebase.firestore()
    .collection('users').where("userEmail", "==", user.email).get().then((snapshot) => {
      let users = snapshot.docs.map(doc => { 
        const data2 = doc.data();
        const id2 = doc.id;
        return {id2, ...data2}
      })
      setrefdata2(users);
      console.log(refdata2);
      setrefnull2(false);
    }).catch((err) => {
      Alert.alert(err)
    }) 
      } else {
        // User not logged in or has just logged out.
      }
    });
            // Get data inside document
    
  }
  useEffect(() => {
  
    getUsers();
}, []);
   
  //display userImage from firebase
  const [image, setimage] = useState(null)
  let profilePic = "";
  let userName = "";
  let userfullName = "";
  refdata2.forEach((item) => {
   profilePic = item.profilePic
   //userName = item.userName
   userfullName = item.fName + "  " + item.lName 
  });

  firebase.storage().ref().child(profilePic).getDownloadURL().then((url) => {
    setimage(url);
    })

  return (
    <View style={ styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginLeft: 20, marginRight: 15}}>
        <View style={{height: 150, marginTop: 10, width: 110}}>
          <TouchableOpacity style={ styles.conFollow }>
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={require('../../assets/drawerIcons/socmedIcons/add_btn.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={{height: 40, width: 40, borderRadius: 100}}
            />
            <PFText size={12} weight={'semi-bold'} style={{textAlign: 'center', textAlignVertical: 'center', paddingTop: 5}}>Follow a friend</PFText>
            {/* <TouchableOpacity onPress={() => gotoHome()}>
              <View style={styles.guestButtonArea}>
                <Text style={{ color: '#1d4123', fontSize: 10, fontFamily: 'poppins-regular'}}>Following</Text>
              </View>
            </TouchableOpacity> */}
          </TouchableOpacity>
        </View>
          {/* <ScrollView horizontal = {true}>
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
          </ScrollView> */}
        </View>  
        <View>
          <PFFlatList
            numColumns={1}
            noDataMessage='                                                                   You have no friends yet. Click the add button or search your friend.'
            data={SampleData.cardPostData1}
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
      <View style={styles.createpost}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('UserProfilePage')}
            >
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={{uri : image}}
                //source={ require('../../assets/img/profiles/Alejandre.jpg')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.userPhoto}
              />
            </TouchableOpacity>
            <PFText weight='semi-bold' size={15} style={styles.textFormat}>{userfullName}</PFText>
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
