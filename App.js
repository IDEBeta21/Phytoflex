import * as React from 'react';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Screens
import LoginScreen from './screens/login';
import Forum from './screens/forum';

// Forum Screen
function forumScreen() {
  return (
    <Forum/>
  )
}

// Login Screen
function loginScreen({navigation}){
  const loginClick = () => {
    navigation.navigate('forum')
  }

  return(
    <LoginScreen loginClick={loginClick}/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Phytoflex" component={loginScreen} />
        <Stack.Screen name="forum" component={forumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;