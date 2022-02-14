import * as React from 'react';
import {useState}from 'react';
import { render } from 'react-dom';
import { 
  View, ScrollView, KeyboardAvoidingView, 
  Image, Text, TextInput, TouchableOpacity,  
  StyleSheet,
  Alert
} from 'react-native';

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
  
  return (
      <View style={styles.loginContainer}>
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
          >
        </TextInput>
        
        <TouchableOpacity onPress={() => signUpClick()}>
          <View style={styles.buttonArea}>
            <Text style={{ color: 'white', fontSize: 20, }}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      {/* </KeyboardAvoidingView> */}
    </View>
  )
  
}

const styles = StyleSheet.create({
  loginContainer:{
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#040',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25
  },
  headerText: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    borderColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
  },
  label:{
    marginVertical: 10,
    marginTop: 20,
    fontSize: 14,
    color: 'white'
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: '#040',
    borderRadius: 12
  },
  buttonArea: {
    marginTop: 40,
    padding: 12,
    
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
  },
});