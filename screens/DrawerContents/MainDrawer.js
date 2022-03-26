import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserProfileScreen from "./UserProfileScreen";
import ActivityLogsScreen from './ActivityLogs';
import PostsScreen from './Posts';
import ThreadsScreen from './Threads';
import TrackHistoryScreen from './TrackHistory';
import SettingsScreen from './Settings';
import RateUsScreen from './RateUs';
import UpgradeScreen from './PremiumOption'

import DrawerHeader from './DrawerHeader';

// Functions for calling the screens
function FuncUserProfileScreen({navigation}) {
  return (
    <UserProfileScreen navigation={navigation}/>
  );
}

function FuncActivityLogsScreen({navigation}) {
  return (
    <ActivityLogsScreen navigation={navigation}/>
  );
}

function FuncPostsScreen({navigation}) {
  return (
    <PostsScreen navigation={navigation}/>
  );
}

function FuncThreadsScreen({navigation}) {
  return (
    <ThreadsScreen navigation={navigation}/>
  );
}

function FuncTrackHistoryScreen({navigation}) {
  return (
    <TrackHistoryScreen navigation={navigation}/>
  );
}

function FuncSettingsScreen({navigation}) {
  return (
    <SettingsScreen navigation={navigation}/>
  );
}

function FuncRateUsScreen({navigation}) {
  return (
    <RateUsScreen navigation={navigation}/>
  );
}

function FuncUpgradeScreen({navigation}) {
  return (
    <UpgradeScreen navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();
// Stacking the Screens
function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserProfileScreen"
          component={FuncUserProfileScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeader screenDescription={'UserProfileScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        
        <Stack.Screen
          name="ActivityLogsScreen"
          component={FuncActivityLogsScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeader screenDescription={'ActivityLogsScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />  ActivityLogsScreen

        <Stack.Screen
          name="PostsScreen"
          component={FuncPostsScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeader screenDescription={'PostsScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />        

        <Stack.Screen
          name="ThreadsScreen"
          component={FuncThreadsScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeaderDrawerHeader screenDescription={'ThreadsScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="TrackHistoryScreen"
          component={FuncTrackHistoryScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeader screenDescription={'TrackHistoryScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="SettingsScreen"
          component={FuncSettingsScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeader screenDescription={'SettingsScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="RateUsScreen"
          component={FuncRateUsScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeader screenDescription={'RateUsScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="UpgradeScreen"
          component={FuncUpgradeScreen}
          options={{ 
            headerTitle: (props) => <DrawerHeader screenDescription={'UpgradeScreen'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />     
        
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;