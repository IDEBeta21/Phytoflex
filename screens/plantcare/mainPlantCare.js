import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import PlantCareHomePage from "../../screens/plantcare/plantCareHomePage";
import PlantCareSearchPage from "./plantCareSearch";
import PlantCareCamera from './snap/camera/plantCareCamera';

import PlantCare from './plantCare';
import PlantCarePlantInformation from './plantCarePlantInformation';
import PlantCareResult from './plantCareResult';
import Instruction from './snap/instruction';
import PlantCareMonitor from './plantCareMonitor';
import PlantCareReminderDetails from './plantCareReminderDetails';
import PlantCareReminder from './plantCareReminder';
import PlantCareAlbum from './plantCareAlbum';
import PlantCareDescription from './plantCareDescription';

import PlantCareTips from './plantCareTips';
import PlantCareTipsArt1 from './plantCareTipsArt1';
import PlantCareTipsArt2 from './plantCareTipsArt2';
import PlantCareTipsArt3 from './plantCareTipsArt3';
import PlantCareTipsArt4 from './plantCareTipsArt4';
import PlantCareTipsArt5 from './plantCareTipsArt5';

import NavigationPage from './navigationPage';
import PlantCareCameraPreview from './snap/camera/plantCareCameraPreview';

import Header from '../global/Header';
import HeaderSearch from '../global/HeaderSearch';
import PlantCareHeader from './plantCareHeader';
import { Camera } from 'expo-camera';

const CameraStack = createNativeStackNavigator();

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

function FuncPlantCareResult({navigation, route}) {
  return (
    <PlantCareResult navigation={navigation} route={route}/>
  );
}

function FuncPlantCareHealthCare({navigation}) {
  return (
    <PlantCareHealtCarePage navigation={navigatultion}/>
  );
}

function FuncPlantCareCamera({route, navigation}){
  return(<PlantCareCamera navigation={navigation} route={route}/>);
}

function FuncPlantCarePlantInformation({navigation, route}) {
  return(
    <PlantCarePlantInformation navigation={navigation} route={route}/>);
}

function FuncPlantCare({navigation}) {
  return(
    <PlantCare navigation={navigation}/>);
}

function FuncPlantCareReminderDetails({route, navigation}) {
  return(
    <PlantCareReminderDetails navigation={navigation} route={route}/>);
}

function FuncPlantCareMonitor({route, navigation}) {
  return(
    <PlantCareMonitor navigation={navigation} route={route}/>);
}

function FuncPlantCareReminder({route, navigation}) {
  return(
    <PlantCareReminder navigation={navigation} route={route}/>);
}

function FuncNavigationPage({navigation}) {
  return(
    <NavigationPage navigation={navigation}/>);
}

function FuncPlantCareAlbum({route, navigation}) {
  return(
    <PlantCareAlbum navigation={navigation} route={route}/>);
}

function FuncPlantCareDescription({route, navigation}) {
  return(
    <PlantCareDescription navigation={navigation} route={route} />);
}

function FuncPlantCareCameraPreview({route, navigation}){
  return(
    <PlantCareCameraPreview
      navigation={navigation} 
      route={route} 
    />
  );
}

// Articles

function FuncPlantCareTips({navigation}) {
  return(
    <PlantCareTips navigation={navigation}/>);
}

function FuncPlantCareTipsArt1({navigation}) {
  return(
    <PlantCareTipsArt1 navigation={navigation}/>);
}

function FuncPlantCareTipsArt2({navigation}) {
  return(
    <PlantCareTipsArt2 navigation={navigation}/>);
}

function FuncPlantCareTipsArt3({navigation}) {
  return(
    <PlantCareTipsArt3 navigation={navigation}/>);
}

function FuncPlantCareTipsArt4({navigation}) {
  return(
    <PlantCareTipsArt4 navigation={navigation}/>);
}

function FuncPlantCareTipsArt5({navigation}) {
  return(
    <PlantCareTipsArt5 navigation={navigation}/>);
}

const Stack = createNativeStackNavigator(); //navigation.setOptions({ tabBarVisible: false })

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
            headerTitle: (props) => 
              <PlantCareHeader 
                title={'Capture'} 
                navigation={navigation} 
                screenDescription={"CameraScreen"}
              />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            // headerShown: false,
            
          }}
        />
        
        <Stack.Screen
          name="PlantCareCameraPreview"
          component={FuncPlantCareCameraPreview}
          options={{ 
            headerTitle: (props) => 
              <PlantCareHeader 
                title={'Preview'} 
                navigation={navigation} 
                screenDescription={"CameraScreen"}
              />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            // headerShown: false,
            
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
            headerTitle: (props) => <Header title={'Plant Album'} navigation={navigation} boolBack={true} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            headerBackVisible: false,   
            
          }}
        />

        <Stack.Screen
          name="PlantCareDescription"
          component={FuncPlantCareDescription}
          options={{ 
            headerTitle: (props) => <Header title={'Plant Description'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white',
            // headerBackVisible: false,   
            
          }}
        />

        {/* ARTICLES */}

        <Stack.Screen
          name="PlantCareTips"
          component={FuncPlantCareTips}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation} boolHome={false}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareTipsArt1"
          component={FuncPlantCareTipsArt1}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareTipsArt2"
          component={FuncPlantCareTipsArt2}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareTipsArt3"
          component={FuncPlantCareTipsArt3}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareTipsArt4"
          component={FuncPlantCareTipsArt4}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="PlantCareTipsArt5"
          component={FuncPlantCareTipsArt5}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Tips'} navigation={navigation}/>, 
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