import * as React from 'react';
import { useState, useEffect } from 'react';

// Import stack navigator
import { createStackNavigator, Header } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// Import firebase
import firebase from 'firebase';

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC9WVlZosV9ygptBGcvY9H6MxbuI2EaGx8",
    authDomain: "phytoflex-3f53f.firebaseapp.com",
    projectId: "phytoflex-3f53f",
    storageBucket: "phytoflex-3f53f.appspot.com",
    messagingSenderId: "437461344883",
    appId: "1:437461344883:web:5388696aaa0445c758c006"
};
if (firebase.apps.length == 0) {
    const firebaseApp = firebase.initializeApp(firebaseConfig);
}

// import Screens
import LoginScreen from './screens/landing/login';
import SignUpScreen from './screens/landing/signup';
import ForumScreen from './screens/forum';
import PlantCare from './screens/plantcare/mainPlantCare';
import MyTabs from './screens/global/bottomNav';

const Screens = {
  LoginScreen:{
    screen: LoginScreen,
    navigationOptions: {
        header: false
    }
  },
  ForumScreen:{
    screen: ForumScreen
  },
  SignUpScreen:{
    screen: SignUpScreen
  },
  MyTabs:{
    screen: MyTabs,
    navigationOptions: {
        header: false
    }
  },
  PlantCare:{
    screen: PlantCare
  }
}




const Screen1 = {
  ForumScreen:{
    screen: ForumScreen
  },
  LoginScreen:{
    screen: LoginScreen
  },
  SignUpScreen:{
    screen: SignUpScreen
  },
  MyTabs:{
    screen: MyTabs,
    navigationOptions: {
        header: false
    }
  },
  PlantCare:{
    screen: PlantCare
  }
}

const Stacks = (firebase.auth().onAuthStateChanged((user) => {return user}) ? createStackNavigator(Screens) : createStackNavigator(Screen1));

export default createAppContainer(Stacks);
