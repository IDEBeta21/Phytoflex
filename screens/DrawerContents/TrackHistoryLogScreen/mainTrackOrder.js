import React from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import TrackHistoryScreen from '../TrackHistory'
import TrackOrderDetails from '../TrackHistoryLogScreen/TrackOrderDetails';

function FuncTrackHistory({navigation, route}) {
  return (
    <TrackHistoryScreen navigation={navigation} route={route}/>
  );
}

function FuncTrackOrderDetails({navigation, route}) {
  return (
    <TrackOrderDetails navigation={navigation} route={route}/>
  );
}

function mainTrackOrder({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="TrackHistoryScreen"
          component={FuncTrackHistory}
          options={{ 
            title: 'ALL ORDERS',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            },
            headerLeft: null
          }}
        />

        <Stack.Screen
          name="TrackOrderDetails"
          component={FuncTrackOrderDetails}
          options={{ 
            title: 'ALL ORDERS',
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontFamily: 'poppins-semiBold',
              fontSize: 18,
            },
            // headerLeft: null
          }}
        />

      </Stack.Navigator>
  );
}

export default mainTrackOrder;