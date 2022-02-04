import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SocialMediaHomePage from "./SocialMediaHome";
import SocialMediaSearchPage from "./SocialMediaSearch";

import Header from '../global/Header';

// functions for calling screens
function funcPlantCareHome({navigation}) {
  return (
    <SocialMediaHomePage navigation={navigation}/>
  );
}

function funcPlantCareSearch({navigation}) {
  return (
    <SocialMediaSearchPage navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

// Stacking screens
function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SocialMediaHome"
          component={funcPlantCareHome}
          options={{ headerTitle: (props) => <Header title={'Social Media'} navigation={navigation} /> }}
        />
        <Stack.Screen
          name="SocialMediaSearch"
          component={funcPlantCareSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ headerTitle: "Social Media" }}
        />
        
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;






















// // Importing screens
// import SocialMediaHomePage from "./SocialMediaHome";
// import SocialMediaSearchPage from "./SocialMediaSearch";

// // importing for Navigation
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from 'react-navigation';

// // const Drawer = createDrawerNavigator();
// const SocialMediaScreen = {
//   SocialMediaHome: {
//     screen: SocialMediaHomePage,
//     navigationOptions:{
//       headerShown: false
//     }
//   },
//   SocialMediaSearch: {
//     screen: SocialMediaSearchPage,
//     navigationOptions:{
//       headerShown: false
//     }
//   }
// }

// const SocialMediaStack = createStackNavigator(SocialMediaScreen);

// export default createAppContainer(SocialMediaStack);