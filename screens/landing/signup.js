import * as React from 'react';
import {useState}from 'react';
import { render } from 'react-dom';
import { StatusBar } from 'expo-status-bar';
import { 
  View, ScrollView, KeyboardAvoidingView, 
  Image, Text, TextInput, TouchableOpacity,  
  StyleSheet,
  Alert, ImageBackground
} from 'react-native';

import Onboarding from './Onboarding';

import firebase from 'firebase';
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

export default function SignUpScreen({navigation}){
  
  const def_usrname = "admin1"
  
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  
  
  function signUpClick() {
    const auth = firebase.auth();
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .then((result) => {
      Alert.alert(result.message);
      firebase.firestore().collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
        fName,
        lName,
        userName,
        userEmail,
        userPass
      })
      console.log(result);
    })
    .catch((error) => {
      Alert.alert(error.message);
      console.log(error);
    });
  }
  
    function gotoOnboarding() {
        toOnboarding();
    }
      
    const toOnboarding = () => {
        navigation.push('Onboarding');
    }

  return (
    <ImageBackground source={require('../../assets/drawerIcons/register.png')} resizeMode= "cover" style={styles.loginContainer}>
      <View style={styles.loginContainer}>
        <StatusBar style="auto" />
        {/* Display Header */}
        
        {/* Make the view scrollable */}
        {/* To detect virtual keyboard */}
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
        > */}
        
        {/* Logo area */}
        {/* <View style={styles.logoView}>
        <Image
        style = {styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        }}
        />
        <Text style={styles.headerText}>For Plantitos </Text>
        <Text style={styles.headerText}> and Plantitas</Text>
      </View> */}
        <TouchableOpacity onPress={() => gotoOnboarding()} >
            <View style={{color: 'white', alignItems: 'flex-end', flex: 1, marginEnd: 8, paddingTop: 48}}>
                <Text style={{color: 'white', fontFamily: 'poppins-regular', paddingHorizontal: 14, fontSize: 14}}>Cancel</Text>
            </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', paddingTop: 48, paddingBottom: 2, alignItems: 'flex-end', flexDirection: 'column', marginEnd: 48}}>
            <Text style={{color: 'white', fontFamily: 'poppins-semiBold', fontSize: 20}}>Join the Community</Text>
        </View>          
              
      <View style={({paddingHorizontal: 30, paddingHorizontal: 40})}> 
        {/* Text Input Area */}
        <Text style={styles.label}>FIRST NAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="First Name"
            onChangeText = {(text) => setFName(text)}
            value={fName}
          >
        </TextInput>
        
        <Text style={styles.label}>LAST NAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Last Name"
            onChangeText = {(text) => setLName(text)}
            value={lName}
          >
        </TextInput>
        
        <Text style={styles.label}>USERNAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="user@email.com"
            onChangeText = {(text) => setUserName(text)}
            value={userName}
          >
        </TextInput>
        
        <Text style={styles.label}>YOUR EMAIL</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Username"
            onChangeText = {(text) => setUserEmail(text)}
            value={userEmail}
          >
        </TextInput>
        
        <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Password"
            onChangeText = {(text) => setUserPass(text)}
            value={userPass}
            secureTextEntry={true}
          >
        </TextInput>

        <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'center', marginBottom: 0}}>
            <Text style={{color: 'white', fontFamily: 'poppins-light', fontSize: 8.5}}>By signing up you agree to our terms and conditions and privacy policy</Text>
        </View>        
        
        <TouchableOpacity onPress={() => signUpClick()}>
          <View style={styles.buttonArea}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold' }}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
                    
      <TouchableOpacity>
        <View style={styles.guestButtonArea}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-regular'}}>CONTINUE AS A GUEST</Text>
            </View>
      </TouchableOpacity>

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', marginBottom: 10}}>
                <Text style={{color: 'white', fontFamily: 'poppins-light'}}>Already signed up?</Text>
                    <TouchableOpacity >
                      <View style={{color: 'white', }}>
                          <Text style={{color: '#639D04', fontFamily: 'poppins-semiBold', paddingHorizontal: 14}}>Log In</Text>
                      </View>
                    </TouchableOpacity>
            </View>      
      
      {/* </KeyboardAvoidingView> */}
    </View>
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  loginContainer:{
        flex: 1,
        fontFamily: 'poppins-regular',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    loginView: {
        // backgroundColor: '#040',
        paddingHorizontal: 30, 
        paddingTop: 0, 
        // borderTopLeftRadius: 35, 
        // borderTopRightRadius: 35,
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgPic: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 25,
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 8,
        paddingBottom: 0,
        fontFamily: 'poppins-semiBold'
    },
    textbox: {
        borderColor: '#1D4123',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 0,
        padding: 8,
        fontSize: 14,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    label:{
        color: 'white',
        marginTop:6,
        paddingStart: 8,
        paddingBottom: 5,
        fontSize: 13,
        fontFamily: 'poppins-regular'
    },
    pwtextbox: {
        borderColor: '#1D4123',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 8,
        marginTop: 0,
        padding: 10,
        fontSize: 16,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    logo: {
        width: 180,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12
    },
    buttonArea: {
        marginTop: 12,
        padding: 10,
        marginStart: 8,
        marginEnd: 8,
        
        backgroundColor: '#639D04',
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
    guestButtonArea: {
        marginTop: 34,
        padding: 8,
        marginStart: 48,
        marginEnd: 48,
        
        // backgroundColor: 'green',
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

        borderWidth: 2,
        borderColor: 'white',

        fontFamily: 'poppins-regular'
    }
});