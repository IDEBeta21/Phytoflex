// import * as React from "react";
// import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
// import { globalStyles } from '../global/globalStyles';

// // Imports for react navigation
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from "../landing/login";

import PlantCareHomePage from "../../screens/plantcare/plantCareHomePage";
import PlantCareSearchPage from "./plantCareSearch";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

// const Drawer = createDrawerNavigator();
const PlantCareScreen = {
  PlantCareHome: {
    screen: PlantCareHomePage,
    navigationOptions:{
      headerShown: false
    }
  },
  PlantCareSearch: {
    screen: PlantCareSearchPage
  }
}

const PlantCareStack = createStackNavigator(PlantCareScreen);

export default createAppContainer(PlantCareStack);



// function PlantCareHomeScreen({ navigation }) {
//   return (
//     <PlantCareHomePage navigation={navigation}/>
//   );
// }

// function PlantCareSearhScreen({ navigation }) {
//   return (
//     <PlantCareSearchPage navigation={navigation} title="Plant care"/>
//   );
// }

// export default createStackNavigator(PlantCareScreen);
// export default function PlantCare(){
  
//   return(
//     // <PlantCareStack.Navigator 
//     //   initialRouteName="Plant Care"
//     //   screenOptions={{
//     //     // drawerStyle:{
//     //     //   backgroundColor: '#1D4123',
//     //     // },
//     //     // drawerInactiveTintColor: 'grey',
//     //     // drawerActiveTintColor: 'white',
//     //     headerShown: false
//     //   }}>
//     //   <PlantCareStack.Screen name="Plant Care" component={PlantCareHomeScreen} />
//     //   <PlantCareStack.Screen name="Search" component={PlantCareSearhScreen} />
//     //   <PlantCareStack.Screen name="Search" component={LoginScreen} />
//     // </PlantCareStack.Navigator>
    

//     // <Drawer.Navigator 
//     //   initialRouteName="Home"
//     //   screenOptions={{
//     //     drawerStyle:{
//     //       backgroundColor: '#1D4123',
//     //     },
//     //     drawerInactiveTintColor: 'grey',
//     //     drawerActiveTintColor: 'white',
//     //     headerShown: false
//     //   }}>
//     //   <Drawer.Screen name="PlantCare" component={PlantCareHomeScreen} />
//     //   <Drawer.Screen name="Search" component={PlantCareSearhScreen} />
//     // </Drawer.Navigator>
//   );
// }
