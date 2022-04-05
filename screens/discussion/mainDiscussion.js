import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiscussionHomePage from "./discussionMainPage";
//import ShopSearchPage from "./ShopSearchPage"
import DiscussionNotifBellPage from './discussionNotifBell';
import DiscussionSearchHeaderPage from './discussionSearchHeader';
import Header from '../global/Header';



// Functions for calling the screens
function FuncDiscussionHome({navigation}) {
  return (
    <DiscussionHomePage navigation={navigation}/>
  );
}

function FuncDiscussionSearchHeader({navigation}) {
  return (
    <DiscussionSearchHeaderPage navigation={navigation}/>
  );
}

function FuncDiscussionNotifBell({navigation}) {
  return (
    <DiscussionNotifBellPage navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();
// Stacking the Screens
function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DiscussionHomePage"
          component={FuncDiscussionHome}
          options={{ 
            headerTitle: (props) => <Header title={'Discussion'} navigation={navigation} boolHome={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="DiscussionSearchHeaderPage"
          component={FuncDiscussionSearchHeader}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header screenDescription={'DscSearch'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: 'white'
            },
              headerTintColor: '#1D4123'
          }}
        />  

        <Stack.Screen
          name="DiscussionNotifBellPage"
          component={FuncDiscussionNotifBell}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Notifications'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white',
          }}

          />

      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;