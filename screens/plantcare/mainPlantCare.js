import * as React from "react";
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';
import { globalStyles } from '../global/globalStyles';

// Imports for react navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Plant Care Page
      </Text>
       <Text style={ globalStyles.paragraphText }>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function PlantCare(){
    
  return(
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerStyle:{
          backgroundColor: '#1D4123',
        },
        drawerInactiveTintColor: 'grey',
        drawerActiveTintColor: 'white',
      }}>
      <Drawer.Screen name="Plant Care" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
      
  );
}