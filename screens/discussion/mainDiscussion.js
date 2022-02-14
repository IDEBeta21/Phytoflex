import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiscussionHomePage from "./DiscussionHomePage";
import DiscussionSearchPage from "./DiscussionSearchPage";
import DiscussionSearchIconPage from "./DiscussionSearchIcon";
import DiscussionNotifPage from "./DiscussionNotif";

import Header from '../global/Header';

// Function for calling the screens
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

function funcDiscussionSearchIcon({navigation}) {
  return (
    <DiscussionSearchIconPage navigation={navigation}/>
  );
}

function funcDiscussionNotif({navigation}) {
  return (
    <DiscussionNotifPage navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

// Stacking the screens
function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DiscussionHome"
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
          name="DiscussionSearch"
          component={funcDiscussionSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Discussion'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="DiscussionSearchIcon"
          component={funcDiscussionSearchIcon}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Search'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
              headerTintColor: 'white'
          }}
        /> 
       
        <Stack.Screen
          name="DiscussionNotif"
          component={funcDiscussionNotif}
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