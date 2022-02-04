import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiscussionHomePage from "./DiscussionHomePage";
import DiscussionSearchPage from "./DiscussionSearchPage"

import Header from '../global/Header';

function funcDiscussionHome({navigation}) {
  return (
    <DiscussionHomePage navigation={navigation}/>
  );
}

function funcDiscussionSearch({navigation}) {
  return (
    <DiscussionSearchPage navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DiscussionHome"
          component={funcDiscussionHome}
          options={{ headerTitle: (props) => <Header title={'Discussion'} navigation={navigation} /> }}
        />
        <Stack.Screen
          name="DiscussionSearch"
          component={funcDiscussionSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ headerTitle: "Discussion" }}
        />
        
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;