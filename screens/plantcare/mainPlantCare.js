import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlantCareHomePage from "../../screens/plantcare/plantCareHomePage";
import PlantCareSearchPage from "./plantCareSearch";
import PlantCareHealtCarePage from './plantCareHealthCare';
import PlantCareOpportunityPage from './plantCareOpportunity';
import Instruction from './snap/instruction';
import PlantCareTips from './plantCareTips';
import PlantCareCamera from './snap/camera/plantCareCamera';

import Header from '../global/Header';
import HeaderSearch from '../global/HeaderSearch';

// functions to call screens
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

function funcPlantCareHealthCare({navigation}) {
  return (
    <PlantCareHealtCarePage navigation={navigation}/>
  );
}

function funcPlantCareOpportunity({navigation}) {
  return (
    <PlantCareOpportunityPage navigation={navigation}/>
  );
}

function funcPlantCareInstruction({navigation}){
  return(
    <Instruction navigation={navigation}/>
  );
}

function funcPlantCareTips({navigation}) {
  return (
    <PlantCareTips navigation={navigation}/>
  );
}

function funcPlantCareCamera({route ,navigation}){
  return(<PlantCareCamera navigation={navigation} route={route}/>);
}

const Stack = createNativeStackNavigator();

// Stacking Screens
function App({navigation}) {

  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PlantCareHome"
          component={funcPlantCareHome}
          options={{ 
            headerTitle: (props) => <Header title={'Plant Care'} navigation={navigation} boolHome={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="PlantCareSearch"
          component={funcPlantCareSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <HeaderSearch title={'Plant Care'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="PlantCareHealthCare"
          component={funcPlantCareHealthCare}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <HeaderSearch title={'Plant Care'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="PlantCareOpportunity"
          component={funcPlantCareOpportunity}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Plant Care'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="Instruction"
          component={funcPlantCareInstruction}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Instruction'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareTips"
          component={funcPlantCareTips}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation} boolHome={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareCamera"
          component={funcPlantCareCamera}
          options={{ 
            headerTitle: (props) => <Header title={'Capture'} navigation={navigation} />, 
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