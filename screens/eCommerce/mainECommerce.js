import * as React from "react";
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import { globalStyles } from '../global/globalStyles';

// Imports for react navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import ShopHomePage from "./ShopMainPage";
import ShopSearchPage from "./ShopSearchPage";

function ShopHomeScreen() {
  return (
    <ShopHomePage/>
  );
}

function ShopSearhScreen({ navigation }) {
  return (
    <ShopSearchPage/>
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
      <Drawer.Screen name="Shop" component={ShopHomeScreen} />
      <Drawer.Screen name="Search" component={ShopSearhScreen} />
    </Drawer.Navigator>
      
  );
}