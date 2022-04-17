import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShopHomePage from "./ShopMainPage";
//import ShopSearchPage from "./ShopSearchPage"
import ShopNotifBellPage from './ShopNotifBell';
import ShopCratePage from './ShopCrate';
import Header from '../global/Header';
import ProductPage from "./Product";

// Functions for calling the screens


function FuncProductPage({route, navigation}) {
  return (
    <ProductPage navigation={navigation} route = {route}/>
  );
}
function FuncShopHome({navigation}) {
  return (
    <ShopHomePage navigation={navigation}/>
  );
}

function FuncShopCrate({route, navigation}) {
  return (
    <ShopCratePage navigation={navigation}  route = {route}/>
  );
}

function FuncShopNotifBell({navigation}) {
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
          component={FuncShopHome}
          options={{ 
            headerTitle: (props) => <Header title={'Shop'} navigation={navigation} boolHome={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="ShopCrate"
          component={FuncShopCrate}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Add to Crate'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
              headerTintColor: 'white'
          }}
        />  

        <Stack.Screen
          name="ShopNotifBell"
          component={FuncShopNotifBell}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Notification'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
           <Stack.Screen
          name="ProductPage"
          component={FuncProductPage}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Product'} navigation={navigation}/>, 
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