import * as React from 'react';
import { useState, useEffect } from 'react';

// Import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import stack navigator
import { createStackNavigator } from 'react-navigation-stack';
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
    firebase.initializeApp(firebaseConfig);
}

// import Screens
import LoginScreen from './screens/landing/login';
import SignUpScreen from './screens/landing/signup';
import ForumScreen from './screens/forum';
import { NavigationActions } from 'react-navigation';

   
// Forum Screen
function forumScreen() {
    return (
        <ForumScreen/>
    );
}

// Sign Up Screens
function signUpScreen() {
    return(
        <SignUpScreen/>
    );
}

// Login Screen
function loginScreen({navigation}){
    const gotoForum = () => {
        navigation.navigate('ForumScreen');
    }
    
    const gotoSignUp = () => {
        navigation.navigate('SignUpScreen');
    }

    return(
        <LoginScreen
            gotoForum={gotoForum} 
            gotoSignUp={gotoSignUp}
            firebaseConfig={firebaseConfig}/>
    );
}

const Stack = createNativeStackNavigator();

function testUser(userIsSignedIn){
    
    if (!userIsSignedIn) {
        this.props.navigation.navigate('SignUpScreen');
    } else {
       this.props.navigation.navigate('ForumScreen');
    }
}





function App() {
    const [userIsSignedIn, setuserIsSignedIn] = useState(false);

    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            setuserIsSignedIn(false);
        } else {
            setuserIsSignedIn(true);
        }
    });
}

const Screens = {
    LoginScreen:{
        screen: LoginScreen
    },
    ForumScreen:{
        screen: ForumScreen
    },
    SignUpScreen:{
        screen: SignUpScreen
    }
}

const screenStack = createStackNavigator(Screens);

export default createAppContainer(screenStack);
        
// export default App;