import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlantCareHomePage from "../../screens/plantcare/plantCareHomePage";
import PlantCareSearchPage from "./plantCareSearch";
import PlantCareCamera from './snap/camera/plantCareCamera';

import PlantCarePlantCareTips from './plantCarePlantCareTips';
import PlantCare from './plantCare';
import PlantCarePlantInformation from './plantCarePlantInformation';
import PlantCareResult from './plantCareResult';
import Instruction from './snap/instruction';
import PlantCareMonitor from './plantCareMonitor';
import PlantCareReminderDetails from './plantCareReminderDetails';
import PlantCareReminder from './plantCareReminder';
import PlantCareAlbum from './plantCareAlbum';

import NavigationPage from './navigationPage';

import Header from '../global/Header';
import HeaderSearch from '../global/HeaderSearch';

// functions to call screens
function FuncPlantCareHome({navigation}) {
  return (
    <PlantCareHomePage navigation={navigation}/>
  );
}

function FuncPlantCareSearch({navigation}) {
  return (
    <PlantCareSearchPage navigation={navigation}/>
  );
}

function FuncPlantCareInstruction({navigation}){
  return(
    <Instruction navigation={navigation}/>
  );
}

function FuncPlantCareResult({navigation}) {
  return (
    <PlantCareResult navigation={navigation}/>
  );
}

function FuncPlantCareCamera({route, navigation}){
  return(<PlantCareCamera navigation={navigation} route={route}/>);
}

function FuncPlantCarePlantInformation({navigation}) {
  return(
    <PlantCarePlantInformation navigation={navigation}/>);
}

function FuncPlantCarePlantCareTips({navigation}) {
  return(
    <PlantCarePlantCareTips navigation={navigation}/>);
}

function FuncPlantCare({navigation}) {
  return(
    <PlantCare navigation={navigation}/>);
}

function FuncPlantCareReminderDetails({navigation}) {
  return(
    <PlantCareReminderDetails navigation={navigation}/>);
}

function FuncPlantCareMonitor({navigation}) {
  return(
    <PlantCareMonitor navigation={navigation}/>);
}

function FuncPlantCareReminder({navigation}) {
  return(
    <PlantCareReminder navigation={navigation}/>);
}

function FuncNavigationPage({navigation}) {
  return(
    <NavigationPage navigation={navigation}/>);
}

function FuncPlantCareAlbum({navigation}) {
  return(
    <PlantCareAlbum navigation={navigation}/>);
}


const Stack = createNativeStackNavigator();

// Stacking Screens
function App({navigation}) {

  return (
    // <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="PlantCareHome"
          component={FuncPlantCareHome}
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
          component={FuncPlantCareSearch}
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
          name="PlantCarePlantInformation"
          component={FuncPlantCarePlantInformation}
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
          component={FuncPlantCareInstruction}
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
          name="PlantCareResult"
          component={FuncPlantCareResult}
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
          component={FuncPlantCarePlantCareTips}
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
          component={FuncPlantCare}
          options={{ 
            headerTitle: (props) => <Header title={'Plant care'} navigation={navigation} boolHome={false}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareReminder"
          component={FuncPlantCareReminder}
          options={{ 
            headerTitle: (props) => <Header title={'Reminder'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123',
              flex: 1
            },
            headerTintColor: 'white',
            // headerBackVisible: false,  
          }}
        />

        <Stack.Screen
          name="PlantCareMonitor"
          component={FuncPlantCareMonitor}
          options={{ 
            headerTitle: (props) => <Header title={'Add plant care'} navigation={navigation} boolClose={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
              // flex: 1,
            },
            headerTintColor: 'white',
            headerBackVisible: false,   
          }}
        />

        <Stack.Screen
          name="NavigationPage"
          component={FuncNavigationPage}
          options={{ 
            headerTitle: (props) => <Header title={'Testing page'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
              flex: 1
            },
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="PlantCareCamera"
          component={FuncPlantCareCamera}
          options={{ 
            headerTitle: (props) => <Header title={'Capture'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareReminderDetails"
          component={FuncPlantCareReminderDetails}
          options={{ 
            headerTitle: (props) => <Header title={'Edit'} navigation={navigation} boolClose={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            headerBackVisible: false,   
            
          }}
        />

        <Stack.Screen
          name="PlantCareAlbum"
          component={FuncPlantCareAlbum}
          options={{ 
            headerTitle: (props) => <Header title={'Album name'} navigation={navigation} boolBack={true} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            headerBackVisible: false,   
            
          }}
        />

      </Stack.Navigator>
    // </NavigationContainer>
  );

}

export default App;