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
import SamplePage from './Sample';
import CheckoutPage from './Checkout';
import ShopCategoryPage from './ShopCategory';
import SearchPlantItems from './SearchPlantItems'
// Functions for calling the screens

function FuncCheckoutPage({route, navigation}) {
  return (
    <CheckoutPage navigation={navigation} route = {route}/>
  );
}

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
function FuncSamplePage({navigation}) {
  return (
    <SamplePage navigation={navigation}/>
  );
}

function FuncShopCategory({route, navigation}) {
  return (
    <ShopCategoryPage navigation={navigation}  route = {route}/>
  );
}

function FuncShopSearch({route, navigation}) {
  return (
    <SearchPlantItems navigation={navigation}  route = {route}/>
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

        <Stack.Screen
          name="SamplePage"
          component={FuncSamplePage}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Sample'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
         <Stack.Screen
          name="CheckoutPage"
          component={FuncCheckoutPage}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Checkout Details'} navigation={navigation} boolCancelCheckout={true}/>, 
           
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            headerBackVisible: false, 
          }}
        />


         <Stack.Screen
          name="ShopCategoryPage"
          component={FuncShopCategory}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Category'} navigation={navigation} />, 

            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            
          }}
        />
          
          <Stack.Screen
          name="SearchPlantItems"
          component={FuncShopSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Search Plant'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            
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