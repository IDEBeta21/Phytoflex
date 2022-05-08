import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostsLog from './PostsLog';
import ThreadsLog from './ThreadsLog'

function FuncPostsLog({navigation}){
  return(
    <PostsLog navigation={navigation}/>
  )
}
function FuncThreadsLog({navigation}){
  return(
    <ThreadsLog navigation={navigation}/>
  )
}

const Tab = createMaterialTopTabNavigator();

export default function ActivityLogsScreen() {
  return (
    <Tab.Navigator
    initialRouteName="PostsLog"
    screenOptions={{
      tabBarActiveTintColor: '#1D4123',
      tabBarInactiveTintColor: '#f5f5f5',
      tabBarLabelStyle: { fontSize: 13, fontFamily: 'poppins-regular', textTransform: 'capitalize' },
      tabBarStyle: { backgroundColor: '#1D4123', elevation:0  },
      tabBarIndicatorStyle: {backgroundColor: '#f2f2f2',  borderColor: '#1D4123', height: '100%'}
    }}  
    >
    <Tab.Screen
      name="PostsLog"
      component={FuncPostsLog}
      options={{ tabBarLabel: 'Posts' }}
    />
    <Tab.Screen
      name="ThreadsLog"
      component={FuncThreadsLog}
      options={{ tabBarLabel: 'Threads' }}
    />
    </Tab.Navigator>
  )
}