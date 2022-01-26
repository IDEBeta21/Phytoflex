import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// 
import LoginScreen from '../landing/login';
import Forum from '../forum';
import PlantCare from '../plantcare/mainPlantCare';
import SocialMedia from '../socMed/mainSocMed';
import Shop from '../eCommerce/mainECommerce';

function ForumScreen() {
  return (
    <Forum/>
  );
}

function MyGardenScreen() {
  return (
    <PlantCare/>
  );
}

function DiscussionScreen() {
  return (
    <SocialMedia/>
  );
}

function ShopScreen() {
  return (
    <Shop/>
  );
}

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{backgroundColor: '#1D4123'}}
        shifting={false}
        >
        <Tab.Screen name="Forum" component={ForumScreen} />
        <Tab.Screen name="Discussion" component={DiscussionScreen} />
        <Tab.Screen name="Garden" component={MyGardenScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
