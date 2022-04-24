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
// import PlantCarePlantInfo from './plantCarePlantInfo';
import PlantC from './plantC';
import PlantCarePlantInformation from './plantCarePlantInformation';
import PlantCarePlantCareTips from './plantCarePlantCareTips';
import PlantCare from './plantCare';
import PlantCareResult from './plantCareResult';

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

function funcPlantCareResult({navigation}) {
  return (
    <PlantCareResult navigation={navigation}/>
  );
}

function funcPlantCareCamera({route ,navigation}){
  return(<PlantCareCamera navigation={navigation} route={route}/>);
}

// function funcPlantCarePlantInfo({navigation}) {
//   return(
//     <PlantCarePlantInfo navigation={navigation}/>);
// }

function funcPlantC({navigation}) {
  return(
    <PlantC navigation={navigation}/>);
}

function funcPlantCarePlantInformation({navigation}) {
  return(
    <PlantCarePlantInformation navigation={navigation}/>);
}

function funcPlantCarePlantCareTips({navigation}) {
  return(
    <PlantCarePlantCareTips navigation={navigation}/>);
}

function funcPlantCare({navigation}) {
  return(
    <PlantCare navigation={navigation}/>);
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
          name="PlantCarePlantInformation"
          component={funcPlantCarePlantInformation}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Plant Info'} navigation={navigation}/>, 
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
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation} boolHome={false}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareResult"
          component={funcPlantCareResult}
          options={{ 
            headerTitle: (props) => <Header title={'Result'} navigation={navigation} boolHome={false}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCarePlantCareTips"
          component={funcPlantCarePlantCareTips}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation} boolHome={false}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCare"
          component={funcPlantCare}
          options={{ 
            headerTitle: (props) => <Header title={'Plant care'} navigation={navigation} boolHome={false}/>, 
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