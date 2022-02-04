import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlantCareHomePage from "../../screens/plantcare/plantCareHomePage";
import PlantCareSearchPage from "./plantCareSearch";

import Header from '../global/Header';

function funcPlantCareHome({navigation}) {
  return (
    <PlantCareHomePage navigation={navigation}/>
  );
}

function funcPlantCareSearch({navigation}) {
  return (
    <PlantCareSearchPage navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PlantCareHome"
          component={funcPlantCareHome}
          options={{ headerTitle: (props) => <Header title={'Plant Care'} navigation={navigation} /> }}
        />
        <Stack.Screen
          name="PlantCareSearch"
          component={funcPlantCareSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ headerTitle: "Plant Care" }}
        />
        
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;