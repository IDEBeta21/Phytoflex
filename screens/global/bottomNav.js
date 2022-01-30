import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// 
import LoginScreen from '../landing/login';
// import Forum from '../forum';
import Discussion from '../discussion/mainDiscussion';
import PlantCare from '../plantcare/mainPlantCare';
import SocialMedia from '../socMed/mainSocMed';
import Shop from '../eCommerce/mainECommerce';

import SideDrawer from './Drawer';

function ForumScreen() {
  return (
    <SocialMedia/>
  );
}

function DiscussionScreen() {
  return (
    <Discussion/>
    // <SideDrawer/>
  );
}

function MyGardenScreen() {
  return (
    <PlantCare/>
  );
}

function ShopScreen() {
  return (
    <Shop/>
  );
}

const ButtomNavTab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (

    <ButtomNavTab.Navigator
      barStyle={{backgroundColor: '#1D4123', fontFamily: 'poppins-regular'}}
      shifting={true}
      initialRouteName="Home"
      //labeled={false}
      >
      <ButtomNavTab.Screen name="Home" component={ForumScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Home </Text> ,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
          source={require('../global/Home.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            padding: 5,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          {/* <Text 
          style={{
            color: focused ? '#FFFFFF' : '#888E78', 
            fontSize: 7, 
            fontFamily: 'poppins-regular' }}>
            HOME
          </Text> */}
          </View>
        ),
      }} />
      <ButtomNavTab.Screen name="Discussion" component={DiscussionScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Discussion </Text> ,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../global/Discussion.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            padding: 5,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }}  />
      <ButtomNavTab.Screen name="Garden" component={MyGardenScreen} 
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Garden </Text> ,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../global/PlantCare.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            padding: 5,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }}
      />
      <ButtomNavTab.Screen name="Shop" component={ShopScreen}
      options={{
        tabBarLabel: <Text style={{ fontSize: 12, fontFamily: 'poppins-regular' }}> Shop </Text> ,
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../global/Shop.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            padding: 5,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }} />
    </ButtomNavTab.Navigator>
  );
}
