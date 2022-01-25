import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// 
import Forum from '../forum';
import LoginScreen from '../landing/login';
import PlantCare from '../plantcare/mainPlantCare';


function ForumScreen() {
  return (
    <Forum/>
  );
}

function DiscussionScreen() {
  return (
    <PlantCare/>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{backgroundColor: 'green'}}>
        <Tab.Screen name="Forum" component={ForumScreen} />
        <Tab.Screen name="Plant Care" component={DiscussionScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
