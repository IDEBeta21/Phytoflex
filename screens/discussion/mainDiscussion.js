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
function funcDiscussionHome({navigation}) {
  return (
    <DiscussionHomePage navigation={navigation}/>
  );
}

function funcDiscussionSearchHeader({navigation}) {
  return (
    <DiscussionSearchHeaderPage navigation={navigation}/>
  );
}

function funcDiscussionNotifBell({navigation}) {
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
          component={funcDiscussionHome}
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
          component={funcDiscussionSearchHeader}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'dscSearch'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: 'white'
            },
              headerTintColor: '#1D4123'
          }}
        />  

        <Stack.Screen
          name="DiscussionNotifBellPage"
          component={funcDiscussionNotifBell}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Inbox'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;

















// // Importing screens
// import ShopHomePage from "./ShopMainPage";
// import ShopSearchPage from "./ShopSearchPage"

// // importing for Navigation
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from 'react-navigation';

// // const Drawer = createDrawerNavigator();
// const ShopScreen = {
//   ShopHome: {
//     screen: ShopHomePage,
//     navigationOptions:{
//       headerShown: false
//     }
//   },
//   ShopSearch: {
//     screen: ShopSearchPage,
//     navigationOptions:{
//       headerShown: false
//     }
//   }
// }

// const ShopStack = createStackNavigator(ShopScreen);

// export default createAppContainer(ShopStack);