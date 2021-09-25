import * as React from 'react';
import { useState, useEffect } from 'react';

// Import react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import firebase
import firebase, { initializeApp } from 'firebase/app';

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC9WVlZosV9ygptBGcvY9H6MxbuI2EaGx8",
    authDomain: "phytoflex-3f53f.firebaseapp.com",
    projectId: "phytoflex-3f53f",
    storageBucket: "phytoflex-3f53f.appspot.com",
    messagingSenderId: "437461344883",
    appId: "1:437461344883:web:5388696aaa0445c758c006"
};

// import Screens
import LoginScreen from './screens/login';
import Forum from './screens/forum';
import { View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';

// Forum Screen
function forumScreen() {
    return (
        <Forum/>
    );
}

// Login Screen
function loginScreen({navigation}){
    const gotoForum = () => {
        navigation.navigate('Forum');
    }
    
    return(
        <LoginScreen gotoForum={gotoForum}/>
    );
}
    
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Phytoflex" component={forumScreen} />
                <Stack.Screen name="Forum" component={forumScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
        
export default App;