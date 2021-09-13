import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Screens
import LoginScreen from './screens/login';
import Forum from './screens/forum';
import { View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';

// Forum Screen
function forumScreen() {
  return (
    <Forum/>
  )
}

// Login Screen
function loginScreen({navigation}){
  const gotoForum = () => {
    navigation.navigate('Forum');
  }

  return(
    <LoginScreen gotoForum={gotoForum}/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Phytoflex" component={loginScreen} />
        <Stack.Screen name="Forum" component={forumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
    buttonArea: {
      marginTop: 40,
      padding: 15,
      
      backgroundColor: 'green',
      borderRadius: 15,
      
      alignItems: 'center', 
      justifyContent: 'center',
      
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 5,
    },
});