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

function ForumScreen() {
  return (
    <SocialMedia/>
  );
}

function DiscussionScreen() {
  return (
    <Discussion/>
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

const Tab = createMaterialBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: '#1D4123', fontFamily: 'poppins-regular'}}
      shifting={true}
      //labeled={false}
      >
      <Tab.Screen name="Home" component={ForumScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../global/Home.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
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
      <Tab.Screen name="Discussion" component={DiscussionScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../global/Discussion.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 23,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }}  />
      <Tab.Screen name="Garden" component={MyGardenScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../global/PlantCare.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }}
      />
      <Tab.Screen name="Shop" component={ShopScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 2}}>
          <Image
          source={require('../global/Shop.png')}
          resizeMode='contain'
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? '#FFFFFF' : '#888E78' }}/>
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
}
