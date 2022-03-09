// import * as React from 'react';
import React from 'react';
import { useState, useEffect } from 'react';

// Import stack navigator
import { createStackNavigator, Header } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import MyTabs from './screens/global/bottomNav';
import ComponentsSample from './screens/global/ComponentsSample';

import ForumScreen from './screens/forum';
import PlantCare from './screens/plantcare/mainPlantCare';
import HeaderContent from './screens/global/Header';

// 
// import { AppLoading } from 'expo';\
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
// import { View } from 'react-native-web';
// import { Text } from 'react-native';

// Navigating functions
function funcLoginScreen({ navigation }) {
  return (
    <LoginScreen navigation={navigation}/>
  );
}

function funcSignupScreen({ navigation }) {
  return (
    <SignUpScreen navigation={navigation}/>
  );
}

function funcBottomNav({navigation}) {
  return(
    <MyTabs navigation={navigation}/>
  );
}

function funcComponentSample({navigation}){
  return(
    <ComponentsSample navigation={navigation}/>
  )
}

const AuthStack = createNativeStackNavigator();


import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/global/Drawer';
const Drawer = createDrawerNavigator();

function SideBar(){
  return(
      // <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          // headerTransparent:true,
          drawerActiveTintColor: 'white',
          drawerStyle: {
            backgroundColor: '#1D4123',
            width: 280,
            paddingEnd: 16
          },
          gestureEnabled: false
        }}
        drawerContent={props => <DrawerContent {...props}/>}
      >
        <Drawer.Screen name="Post" component={funcBottomNav}/>
        <Drawer.Screen name="Login" component={funcLoginScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>s
  );
}

function App() {

  let [ fontsLoaded ] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf'),
  })

  if (fontsLoaded) {
    return (
      <NavigationContainer independent={true}>
        <AuthStack.Navigator 
          initialRouteName={firebase.auth().onAuthStateChanged((user) => {return user}) ? "Login" : "SignUpScreen"}  
          screenOptions={{headerShown: false}}
        >
          <AuthStack.Screen name="Login" component={funcLoginScreen}/>
          <AuthStack.Screen name="SignUpScreen" component={funcSignupScreen}/>
          <AuthStack.Screen name="MyTabs" component={SideBar}/>
          <AuthStack.Screen name="ComponentsSample" component={funcComponentSample}/>
          {/* <AuthStack.Screen name="MyTabs" component={funcBottomNav} /> */}
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  } else {
    // getFonts();
    // setFontsLoaded(true);
    // console.log("Font is good");
    return (<AppLoading/>);
  }
}

export default App;