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
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

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
      <ScrollView>
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
            <View style={{color: 'white', alignItems: 'flex-end', flex: 1, marginEnd: 8, paddingTop: 54}}>
                <Text style={{color: 'white', fontFamily: 'poppins-regular', paddingHorizontal: 14, fontSize: 16}}>CANCEL</Text>
            </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', paddingTop: 24, paddingBottom: 2, alignItems: 'flex-end', flexDirection: 'column', marginEnd: 48}}>
            <Text style={{color: 'white', fontFamily: 'poppins-semiBold', fontSize: 20}}>Join the Community</Text>
        </View>          
              
      <View style={{paddingHorizontal: 32}}> 
        {/* Text Input Area */}
        <Text style={styles.label}>FIRST NAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your first name"
            onChangeText = {(text) => setFName(text)}
            value={fName}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>
        
        <Text style={styles.label}>LAST NAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your last name"
            onChangeText = {(text) => setLName(text)}
            value={lName}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>
        
        <Text style={styles.label}>USERNAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your username "
            onChangeText = {(text) => setUserName(text)}
            value={userName}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>

        <View style={{alignContent: 'center'}}>
          <Image
          style={{
            paddingTop: 32,
            resizeMode: 'contain', 
            alignSelf: 'center',
            width: '95%',
          }}
          source={require('../../assets/sectionLine.png')}>
          </Image>
        </View>
        
        <Text style={styles.label1}>YOUR EMAIL</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your email address"
            onChangeText = {(text) => setUserEmail(text)}
            value={userEmail}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>

        <Text style={styles.labelError}>A domain name MUST be included.</Text>      
  
        <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your password"
            onChangeText = {(text) => setUserPass(text)}
            value={userPass}
            secureTextEntry={true}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>

          <Text style={styles.labelError}>MUST contain at least one uppercase letter</Text>

          <Text style={styles.label}> CONFIRM PASSWORD</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Re-enter your password"
            onChangeText = {(text) => setUserPass(text)}
            value={userPass}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>

        <Text style={styles.labelCorrect}>Password Strength: STRONG || Passwords Matched</Text>

        <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'center', marginBottom: 0}}>
            <Text style={{color: 'white', fontFamily: 'poppins-light', fontSize: 8.5}}>By signing up you agree to our </Text>
            <Pressable>
            <Text style={{color: 'white', fontFamily: 'poppins-regular', fontSize: 8.5, color: '#639D04'}}>Terms and Conditions </Text>
            </Pressable>
            <Text style={{color: 'white', fontFamily: 'poppins-light', fontSize: 8.5}}>and </Text>
            <Pressable>
            <Text style={{color: 'white', fontFamily: 'poppins-regular', fontSize: 8.5, color: '#639D04'}}>Privacy Policy</Text>              
            </Pressable>
        </View>        
        
        <TouchableOpacity onPress={() => signUpClick()}>
          <View style={styles.buttonArea}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold' }}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
                    
      {/* <TouchableOpacity>
        <View style={styles.guestButtonArea}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-regular'}}>CONTINUE AS A GUEST</Text>
            </View>
      </TouchableOpacity> */}

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', marginBottom: 10}}>
                <Text style={{color: 'white', fontFamily: 'poppins-light'}}>Already signed up?</Text>
                    <TouchableOpacity >
                      <View style={{color: 'white', }}>
                          <Text style={{color: '#639D04', fontFamily: 'poppins-semiBold', paddingHorizontal: 14}}>Log In</Text>
                      </View>
                    </TouchableOpacity>
            </View>      
      
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
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
    txtPolicy: {
      color: 'white', 
      fontFamily: 'poppins-light', 
      fontSize: 8.5
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
        backgroundColor: '#f2f2f2',
        color: '#1D4123',
        borderRadius: 10,
        marginBottom: 0,
        padding: 4,
        paddingStart: 8,
        fontSize: 14,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    label1:{
        color: 'white',
        paddingStart: 8,
        paddingBottom: 5,
        fontSize: 12,
        fontFamily: 'poppins-regular'
    },
    label:{
        color: 'white',
        marginTop:6,
        paddingStart: 8,
        paddingBottom: 5,
        fontSize: 12,
        fontFamily: 'poppins-regular'
    },
    labelError:{
        color: 'red',
        marginTop:6,
        paddingStart: 8,
        fontSize: 12,
        fontFamily: 'poppins-semiBold'
    },
    labelCorrect:{
        color: '#639d04',
        marginTop:6,
        paddingStart: 8,
        fontSize: 12,
        fontFamily: 'poppins-semiBold'
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
        marginTop: 16,
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