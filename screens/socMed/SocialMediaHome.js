import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import Header from '../global/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//importing TopTabNav
import AllScrn from '../socMed/Home1-AllScreen'
import FollowingScrn from '../socMed/Home2-FollowingScreen'
//import SocMedSwapReqScrn from '../socMed/SocMedSwapReq'

//the TopTabNavigator
function funcAllScrn({navigation}) {
  return (
    <AllScrn navigation={navigation}/>
  );
}
function funcFollowingScrn({navigation}) {
  return (
    <FollowingScrn navigation={navigation}/>
  );
}
const Tab = createMaterialTopTabNavigator();

function MyTopTabs({navigation}) {
return (
  <Tab.Navigator
    initialRouteName="SocMedHome"
    screenOptions={{
      tabBarActiveTintColor: '#1D4123',
      tabBarInactiveTintColor: 'white',
      tabBarLabelStyle: { fontSize: 14, fontFamily: 'poppins-semiBold', textTransform: 'capitalize' },
      tabBarStyle: { backgroundColor: '#2a5123', elevation:0,  },
      tabBarIndicatorStyle: {backgroundColor: 'white', borderColor: 'white', height: '100%'}
    }}
  >
    <Tab.Screen
      name="SocMedHome"
      component={funcAllScrn}
      options={{ tabBarLabel: 'All' }}
    />
    <Tab.Screen
      name="SocMedChatRoomScrn"
      component={funcFollowingScrn}
      options={{ tabBarLabel: 'Following' }}
    />
  </Tab.Navigator>
);
}
export default MyTopTabs;
