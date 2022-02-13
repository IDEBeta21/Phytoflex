import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShopHomePage from "./ShopMainPage";
//import ShopSearchPage from "./ShopSearchPage"
import ShopNotifBellPage from './ShopNotifBell';
import ShopSearchHeaderPage from './ShopSearchHeader';
import Header from '../global/Header';

// Functions for calling the screens
function funcShopHome({navigation}) {
  return (
    <ShopHomePage navigation={navigation}/>
  );
}

function funcShopSearchHeader({navigation}) {
  return (
    <ShopSearchHeaderPage navigation={navigation}/>
  );
}

function funcShopNotifBell({navigation}) {
  return (
    <ShopNotifBellPage navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();
// Stacking the Screens
function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ShopHome"
          component={funcShopHome}
          options={{ 
            headerTitle: (props) => <Header title={'Shop'} navigation={navigation} boolHome={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="ShopSearchHeader"
          component={funcShopSearchHeader}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Search'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: 'white'
            },
              headerTintColor: '#1D4123'
          }}
        />  

        <Stack.Screen
          name="ShopNotifBell"
          component={funcShopNotifBell}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Notification'} navigation={navigation}/>, 
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