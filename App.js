import * as React from 'react';
import { useState, useEffect } from 'react';

// Import stack navigator
import { createStackNavigator, Header } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import firebase
import firebase from 'firebase';

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyC9WVlZosV9ygptBGcvY9H6MxbuI2EaGx8",
    authDomain: "phytoflex-3f53f.firebaseapp.com",
    projectId: "phytoflex-3f53f",
    storageBucket: "phytoflex-3f53f.appspot.com",
    messagingSenderId: "437461344883",
    appId: "1:437461344883:web:5388696aaa0445c758c006"
};
if (firebase.apps.length == 0) {
    const firebaseApp = firebase.initializeApp(firebaseConfig);
}

// import Screens
import LoginScreen from './screens/landing/login';
import SignUpScreen from './screens/landing/signup';
import ForumScreen from './screens/forum';
import PlantCare from './screens/plantcare/mainPlantCare';
import MyTabs from './screens/global/bottomNav';

// 
// import { AppLoading } from 'expo';\
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { View } from 'react-native-web';
import { Text } from 'react-native';

const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'poppins-semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'poppins-light': require('./assets/fonts/Poppins-Light.ttf')
})

// Navigating functions
function funcLoginScreen({ navigation }) {
  return (
    <LoginScreen navigation={navigation}/>
  );
}

function funcSignupScreen({ navigation }) {
  return (
    <SignUpScreen navigation={navigation}/>
  );
}

function funcBottomNav({navigation}) {
  return(
    <MyTabs/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer navigationOption={{header:false}}>
        <Stack.Navigator 
          initialRouteName={firebase.auth().onAuthStateChanged((user) => {return user}) ? "Login" : "SignUpScreen"}  
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" component={funcLoginScreen} />
          <Stack.Screen name="SignUpScreen" component={funcSignupScreen} />
          <Stack.Screen name="MyTabs" component={funcBottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    getFonts();
    setFontsLoaded(true);
    console.log("Font is good");
  }
}

export default App;