//import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DscNotif from '../discussion/DscNotif'
import DscMessages from '../discussion/DscMessages'

import { DrawerContent } from '../global/Drawer';

function funcDiscNotifScreen({navigation}) {
  return (
    <DscNotif navigation={navigation}/>
  );
}

function funcDiscMessagesScreen({navigation}) {
  return (
    <DscMessages navigation={navigation}/>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTopTabs({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="DscNotifications"
      screenOptions={{
        tabBarActiveTintColor: '#1D4123',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 15, fontFamily: 'poppins-semiBold', textTransform: 'capitalize' },
        tabBarStyle: { backgroundColor: '#1D4123', elevation:0  },
        tabBarIndicatorStyle: {backgroundColor: 'white', borderColor: 'white', height: '100%'}
      }}
    >
      <Tab.Screen
        name="DscNotifications"
        component={funcDiscNotifScreen}
        options={{ tabBarLabel: 'Notifications' }}
      />
      <Tab.Screen
        name="DscMessages"
        component={funcDiscMessagesScreen}
        options={{ tabBarLabel: 'Messages' }}
      />
    </Tab.Navigator>
  );
}

export default MyTopTabs;