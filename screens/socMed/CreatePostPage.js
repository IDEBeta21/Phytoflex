import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { Portal } from 'react-native-paper';

import firebase from 'firebase';

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


export default function CreatePostPage({navigation}) {
  //geting CurrentPostDate
  const [postcurrentDate, setCurrentDate] = useState('');
  const [postcurrentTime, setCurrentTime] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate( date + '/' + month + '/' + year );
    setCurrentTime( hours + ':' + min );
  }, []);

  //const db = getFirestore(app);
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [postCaption,setCaption] = useState('');
  

  function addData(){
    firebase.firestore().collection('Posts').add({
      fName:'Pedro',
      lName:'Penduko',
      imageURL:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      postCaption,
      postcurrentDate,
      postcurrentTime,
      userId:'',
      postId:'',
      userName
    }).then((res) => {
      Alert.alert(res)
    }).catch((err) => {
      Alert.alert(err)
    })
  }

  return (
    <View>
      <View style={ styles.mainContainer }>
        <View style={ styles.container }>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/img/profiles/Alejandre.jpg')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.userPhoto}
          />
          <View styles={{flexDirection: 'column'}}>
            <PFText weight='semi-bold' size={15} style={{marginLeft: 10}} value={userName}>Leila Jane Alejandre</PFText>
            <View style={ styles.container1 }>
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/drawerIcons/socmedIcons/public_green.png')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.iconStyle}
              />
              <PFText size={11} style={{marginLeft: 5}}>Public</PFText>
            </View>
          </View>
        </View>

        {/* <PFText size={15} style={{marginLeft: 25, marginTop: 20, marginBottom: 205}}>Write something...</PFText> */}
        <View style={{height: 200}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TextInput 
              placeholder=" Write something... "
              style={styles.input} 
              multiline={true} 
              numberOfLines={2}
              onChangeText = {(text) => setCaption(text)}
              value= {postCaption}/>
          </ScrollView>
        </View>

        {/*This is where the uploaded image show*/}
        <View style={{height: 80, padding: 20}}>
          
        </View>

        <View>
          <View style={styles.hr} />
            {/* <Text style={styles.or}>or</Text> */}
        </View>
        
        <View style={ styles.container2 }>
          <TouchableOpacity
            activeOpacity={0.7}
            //to Delete
            onPress={() => navigation.navigate('ChatPage')} 
            style={{flexDirection: 'row'}}
          >
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/socmedIcons/add_image_green.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.addbtn}
            />
            <PFText size={15} style={{marginLeft: 10, marginTop: 5}}>Add Photos</PFText>
          </TouchableOpacity>  
        </View>

        <View>
          <View style={styles.hr} />
            {/* <Text style={styles.or}>or</Text> */}
        </View>

        <View style={ styles.container2 }>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/drawerIcons/socmedIcons/add_video_green.png')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.addbtn}
          />
          <PFText size={15} style={{marginLeft: 10, marginTop: 5}}>Add Videos</PFText>
        </View>

        <View>
          <View style={styles.hr} />
            {/* <Text style={styles.or}>or</Text> */}
        </View>

        <View style={ styles.container2 }>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/drawerIcons/socmedIcons/change_privacy_green.png')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.addbtn1}
          />
          <PFText size={15} style={{marginLeft: 10, marginTop: 5}}>Change Privacy</PFText>
        </View>
      </View>
      <PFPrimaryButton style={{marginTop: 10, marginLeft: 25, marginRight: 20}} title={'Post'} onPress={() => addData()}                       ></PFPrimaryButton>
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
    height: 470,
    borderWidth: 1,
    borderRadius: 15,
    margin: 15
  },
  userPhoto: {
    height: 45,
    width: 45,
    borderRadius: 100
  },
  iconStyle: {
    height: 12,
    width: 12,
    marginLeft: 10,
    marginTop: 2
  },
  container: {
    flexDirection:'row',
    marginLeft: 20,
    marginTop: 15
  },
  container1: {
    flexDirection:'row'
  },
  container2: {
    flexDirection:'row',
    marginLeft: 15,
  },
  addbtn: {
    height: 25,
    width: 25,
    marginLeft: 5,
    marginTop: 3
  },
  addbtn1: {
    height: 22,
    width: 22,
    marginLeft: 5,
    marginTop: 4
  },
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#1D4123',
    borderBottomWidth: 1,
    // marginLeft: 20,
    // marginRight: 20,
    marginBottom: 5,
    marginTop: 5
  },
  or: {
    width: 30,
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  }
})