import {
    View, Text, StyleSheet, ScrollView, TextInput, 
    Image, TouchableOpacity, Pressable, Button, 
    Alert, Modal
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import EditAddress from './EditAddress';
import firebase from 'firebase';
import React,  { useState, useEffect } from 'react';


function FuncEditAddress({navigation}){
  return(
    <EditAddress navigation={navigation}/>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function UserProfileDrawer({navigation}) {
 //get user info
 const [refdata2, setrefdata2] = useState([]); // declaration 
 const [refnull2, setrefnull2] = useState(true);
 

          //get user
   
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
            
            }
          //display userImage
          let userImage = "";
          let userfullName = "";
          let userName = "";
          let followers = "";
          let following = "";
          let badgePoints = "";
          let gender = "";
          let contactNumber = "";
          let userEmail ="";
          let bday= "";
          let password= "";
          let address= "";

          refdata2.forEach((item) => {
            userImage = item.profilePic
            userfullName = item.fName + "  " + item.lName 
            userName = item.userName
            followers = item.followers
            following = item.following
            badgePoints = item.userBadgePoints
            gender = item.gender
            contactNumber = item.contactNumber
            userEmail = item.userEmail
            bday = item.bday
            password = item.userPass
            address = item.Address
          
          })

          const [image, setimage] = useState(null)


          firebase.storage().ref().child(userImage).getDownloadURL().then((url) => {
            setimage(url);
          })

            useEffect(() => {
              
              getUsers();
              }, [])

  return (
    <View>
    <StatusBar style="auto" />
    <ScrollView>
      <View style ={{width: '100%', backgroundColor: '#1D4123', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.item}>
              <TouchableOpacity>
                  <Image
                    source={{uri : image}}
                    style={{ width: 100, height: 100, borderRadius:120, resizeMode:'cover', marginTop: 10}}>
                  </Image>
              </TouchableOpacity>
          </View>
          <View>
            <Text style={{
                textAlign: 'left',
                color: 'white', 
                fontFamily: 'poppins-semiBold', 
                fontSize: 25,
                marginTop: 6,}}>
                {userfullName}
            </Text> 
            <Text style={{
                color: 'white', 
                fontFamily: 'poppins-light', 
                fontSize: 16 }}>
                {userName}
            </Text>
          <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'flex-start', marginBottom: 26}}>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('EditProfile')}
                  style={styles.buttonArea}>
                <View style={{color: 'white', }}>
                  <Text style={{
                      color: '#1D4123', 
                      fontFamily: 'poppins-semiBold', 
                      paddingHorizontal: 16}}>
                      Edit Profile
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>          
    </ScrollView>

    <ScrollView>
      <View style ={{width: '100%', backgroundColor: '#1D4123', height: '100%'}}>
        <View style={styles.container1}>
          <View style={styles.item1}>
            <Text style={styles.textNum}>
                {followers}
            </Text> 
            <Text style={styles.textCaption}>
                Followers
            </Text> 
          </View>
          <View style={styles.item1}>
            <Text style={styles.textNum}>
                {following}
            </Text> 
            <Text style={styles.textCaption}>
                Following
            </Text> 
          </View>
          <View style={styles.item1}>
            <Text style={styles.textNum}>
                {badgePoints }
            </Text> 
            <Text style={styles.textCaption}>
                Badge Points
            </Text> 
          </View>
        </View>
      </View>          
    </ScrollView>

    <ScrollView>
        <View style ={{width: '100%', backgroundColor: '#f2f2f2', height: '100%', padding: 6}}>
          <View style={styles.containerInfo}>
            <View style={styles.sectionStyle1}>
              <Text style={styles.textLabel1}>
                  Name
              </Text>
            <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo1}
                  placeholder= {userfullName}
                  underlineColorAndroid="transparent"
            />       
            </View>   
            <View style={styles.sectionStyle}>
              <Text style={styles.textLabel1}>
                  Username
              </Text>
            <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo1}
                  placeholder= {userName}
                  underlineColorAndroid="transparent"
            />                   
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.textLabel1}>
                  Gender
              </Text>
            <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo1}
                  placeholder= {gender}
                  underlineColorAndroid="transparent"
            />                   
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.textLabel1}>
                  Birthday
              </Text>
            <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo1}
                  placeholder= {bday}
                  underlineColorAndroid="transparent"
            />                   
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.textLabel1}>
                  Email
              </Text>
            <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo1}
                  placeholder={userEmail}
                  underlineColorAndroid="transparent"
                  keyboardType="email-address"
            />                   
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.textLabel1}>
                  Phone Number
              </Text>
            <TextInput
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo1}
                  placeholder= {contactNumber}
                  underlineColorAndroid="transparent"
                  maxLength={11}
                  keyboardType="phone-pad"
            />                   
            </View>
            <View style={styles.sectionStyle}>
              <Text style={styles.textLabel1}>
                  Address
              </Text>
            <Text
                  editable={false} 
                  selectTextOnFocus={false}
                  style={styles.textInfo1}
                  placeholder= {address}
                  multiline={true} 
                  underlineColorAndroid="transparent"
            />                   
            </View>
          </View>
        </View>         
    </ScrollView>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 16,
    flexDirection: 'row',
    alignItems: 'flex-start' // if you want to fill rows left to right,
  },
  item: {
    width: '37%',// is 50% of container width
  },
  container1: {
    flex: 1,
    paddingBottom: 16,
    flexDirection: 'row', 
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    borderTopColor: 'white',
    borderTopColor: 0.5,
// if you want to fill rows left to right,
  },
  item1: {
    width: '33%',// is 50% of container width
  },
  textCaption: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#777F78', 
    fontFamily: 'poppins-regular', 
    fontSize: 15,
  },
  textNum: {
    textAlign: 'center',
    color: '#f2f2f2', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 20,
  },
  containerInfo: {
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    width: '90%',
    padding: 8,
    paddingBottom: 8,
    borderRadius: 1,
    elevation: 0.5,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 19,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'transparent',
  },
  sectionStyle1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 19,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'transparent',
    marginTop: 16,
  },
  imageStyle: {
    padding: 8,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  textInfo: {
    flex: 1 ,
    color: '#1D4123',
    marginTop: 4,
    paddingStart: 8,
    paddingBottom: 4,
    marginEnd: 8,
    fontSize: 14,
    fontFamily: 'poppins-regular',
    textAlign: 'right'
  },
  textLabel: {
    color: '#1D4123', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 14,

  },
  textInfo1: {
    flex: 1 ,
    color: '#1D4123',
    fontSize: 14,
    fontFamily: 'poppins-regular',
    textAlign: 'right',
    justifyContent: 'center',
  },
  textLabel1: {
    color: '#1D4123', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 16,
  },
  buttonArea: {
        
        backgroundColor: '#f2f2f2',
        borderRadius: 40,
        
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    },
  btnBtmSheet: {
        marginTop: 10,
        padding: 10,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 10,
        
        backgroundColor: '#f2f2f2',
        borderRadius: 40,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    },
  btnBtmSheetSave: {
        marginTop: 10,
        padding: 10,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 10,
        
        backgroundColor: 'transparent',
        borderRadius: 40,
        borderColor: '#639D04',
        borderWidth: 2,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "transparent",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    },
  btnBtmSheetCancel: {
        marginTop: 10,
        padding: 10,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 10,
        
        backgroundColor: '#8E1B1B',
        borderRadius: 40,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
    },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 160
  },
  modalView: {
    margin: 8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 100,
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation:10,
  },
  btnModal: {
        marginTop: 16,
        paddingStart: 20,
        paddingEnd: 20,
        padding: 8,
        marginBottom: 8,
        
        backgroundColor: '#639D04',
        borderRadius: 25,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
    }
})