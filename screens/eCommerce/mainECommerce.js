import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ShopHomePage from "./ShopMainPage";
import ShopSearchPage from "./ShopSearchPage"

import Header from '../global/Header';

function funcShopHome({navigation}) {
  return (
    <ShopHomePage navigation={navigation}/>
  );
}

function funcShopSearch({navigation}) {
  return (
    <ShopSearchPage navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ShopHome"
          component={funcShopHome}
          options={{ headerTitle: (props) => <Header title={'Shop'} navigation={navigation} /> }}
        />
        <Stack.Screen
          name="ShopSearch"
          component={funcShopSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ headerTitle: "Shop" }}
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