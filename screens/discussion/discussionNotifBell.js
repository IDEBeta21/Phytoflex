//import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { DrawerContent } from '../global/Drawer';

function DscNotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications</Text>
    </View>
  );
}

function DscMessagesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="DscNotifications"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="DscNotifications"
        component={FeedScreen}
        options={{ tabBarLabel: 'Notifications' }}
      />
      <Tab.Screen
        name="DscMessages"
        component={NotificationsScreen}
        options={{ tabBarLabel: 'Messages' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTopTabs />
    </NavigationContainer>
  );
}
