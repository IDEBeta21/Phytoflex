import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { Portal } from 'react-native-paper';

import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';

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
  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);

  //get user info

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
  refdata2.forEach((item) => {
   profilePic = item.profilePic
   userName = item.userName
  });

  firebase.storage().ref().child(profilePic).getDownloadURL().then((url) => {
    setimage(url);
    })
 

  return (
    <View style={ styles.mainContainer }>
      <View style={ styles.container }>
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={{uri : image}}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.userPhoto}
        />
        <View styles={{flexDirection: 'column'}}>
          <PFText weight='semi-bold' size={15} style={{marginLeft: 10}}>@{userName}</PFText>
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