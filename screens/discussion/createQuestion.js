import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { Portal } from 'react-native-paper';
import {ImagePicker} from 'react-native-image-picker';
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


export default function CreateQuestionPage({navigation, route}) {
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
  //Create Post
    const [qstContent,setContent] = useState('');

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
          <PFText weight='light' size={10} style={{marginLeft: 10}}>05/13/22 2:50 PM</PFText>
        </View>
      </View>

      <View style={{height: 200}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput
              multiline
              placeholder="Write your Question?"
              style={{ height: 200, padding: 10, textAlignVertical: 'top' }}
              value={qstContent}
              onChangeText={setContent}/>
          </ScrollView>
        </View>

        {/*This is where the uploaded image show*/}
        <View style={{height: 80, padding: 20}}>
          
        </View>
      <View>
        <View style={styles.hr} />
           {/*<Text style={styles.or}>or</Text>*/}
      </View>
      
      <PFPrimaryButton style={{marginTop: 30, marginLeft: 25, marginRight: 20}} title={'Edit'} onPress={() => navigation.navigate('EditQuestionPage')}></PFPrimaryButton>
      <PFPrimaryButton
        style={{marginTop: 15, marginLeft: 25, marginRight: 20 }}
        title="Post"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: '',
            params: { post: qstContent },
            merge: true,
          });
        }}
      />
      </View>
    
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    width: "100%",
    //borderWidth: 1,
    borderRadius: 10,
    padding: 20,
   // numberOfLines: 4
   fontFamily: 'poppins-light',
   fontSize: 15,
   marginBottom: 202
  },
  mainContainer: {
    height:530,
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