import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { DrawerContent } from '../global/Drawer';

import SocMedNotifScrn from '../socMed/SocMedNotif'
import SocMedChatRoomScrn from '../socMed/SocMedChatRoom'
import SocMedSwapReqScrn from '../socMed/SocMedSwapReq'

//export default function ChatRoomPage({navigation}) {
  // Calling Plantcare search screen

  function funcSocMedNotifScrn({navigation}) {
    return (
      <SocMedNotifScrn navigation={navigation}/>
    );
  }
  function funcSocMedMessagesScreen({navigation}) {
    return (
      <SocMedChatRoomScrn navigation={navigation}/>
    );
  }
  function funcSocMedSwapReqScreen({navigation}) {
    return (
      <SocMedSwapReqScrn navigation={navigation}/>
    );
  }
const Tab = createMaterialTopTabNavigator();

function MyTopTabs({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="SocMedNotifications"
      screenOptions={{
        tabBarActiveTintColor: '#1D4123',
        tabBarInactiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 12, fontFamily: 'poppins-semiBold', textTransform: 'capitalize' },
        tabBarStyle: { backgroundColor: '#1D4123', elevation:0  },
        tabBarIndicatorStyle: {backgroundColor: 'white', borderColor: 'white', height: '100%'}
      }}
    >
      <Tab.Screen
        name="SocMedNotifications"
        component={funcSocMedNotifScrn}
        options={{ tabBarLabel: 'Notifications' }}
      />
      <Tab.Screen
        name="SocMedChatRoomScrn"
        component={funcSocMedMessagesScreen}
        options={{ tabBarLabel: 'Messages' }}
      />
      <Tab.Screen
        name="SocMedSwapReqScrn"
        component={funcSocMedSwapReqScreen}
        options={{ tabBarLabel: 'Swap Request' }}
      />
    </Tab.Navigator>
  );
}
export default MyTopTabs;