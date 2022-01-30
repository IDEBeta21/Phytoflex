import * as React from "react";
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import { globalStyles } from '../global/globalStyles';

// Imports for react navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import DiscussionHomePage from "./DiscussionHomePage";
import DiscussuionSearchPage from "./DiscussionSearchPage";

function DiscussionHomeScreen() {
  return (
    <DiscussionHomePage/>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <DiscussuionSearchPage/>
  );
}

const Drawer = createDrawerNavigator();

export default function PlantCare(){
    
  return(
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerStyle:{
          backgroundColor: '#1D4123',
        },
        drawerInactiveTintColor: 'grey',
        drawerActiveTintColor: 'white',
      }}>
      <Drawer.Screen name="Discussion" component={DiscussionHomeScreen} />
      <Drawer.Screen name="Search" component={NotificationsScreen} />
    </Drawer.Navigator>
      
  );
}