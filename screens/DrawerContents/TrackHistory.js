import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ActiveOrders from './TrackHistoryLogScreen/ActiveOrders';
import HistoryOrders from './TrackHistoryLogScreen/HistoryOrders';
import TrackOrderDetails from './TrackHistoryLogScreen/TrackOrderDetails';


function FuncActiveOrders({navigation}){
  return(
    <ActiveOrders navigation={navigation}/>
  )
}

function FuncHistoryOrders({navigation}){
  return(
    <HistoryOrders navigation={navigation}/>
  )
}



const Tab = createMaterialTopTabNavigator();

export default function TrackHistoryScreen({navigation}) {
  
  return (
    <Tab.Navigator
    initialRouteName="ActiveOrders"
    screenOptions={{
      tabBarActiveTintColor: '#1D4123',
      tabBarInactiveTintColor: '#f5f5f5',
      tabBarLabelStyle: { fontSize: 13, fontFamily: 'poppins-regular', textTransform: 'capitalize' },
      tabBarStyle: { backgroundColor: '#1D4123', elevation:0  },
      tabBarIndicatorStyle: {backgroundColor: '#f2f2f2',  borderColor: '#1D4123', height: '100%'}
    }}  
    >
    <Tab.Screen
      name="ActiveOrders"
      component={FuncActiveOrders}
      options={{ tabBarLabel: 'Active' }}
    />
    <Tab.Screen
      name="HistoryOrders"
      component={FuncHistoryOrders}
      options={{ tabBarLabel: 'History' }}
    />
    </Tab.Navigator>
  );
}
TrackHistoryScreen