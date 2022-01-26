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
  'poppins-semiBold': fetch('https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/assets%2Ffonts%2FPoppins-SemiBold.ttf?alt=media&token=e163858a-4d46-4fd3-a165-bedb7c8cb1bc'),
  'poppins-regular': fetch('https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/assets%2Ffonts%2FPoppins-Regular.ttf?alt=media&token=06217080-1636-4cda-8b5f-714832d08e3e'),
  'poppins-ligth': fetch('https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/assets%2Ffonts%2FPoppins-Light.ttf?alt=media&token=a851373a-3aa8-4c52-a56d-ede6ac4a461c')
})

// Naviagting functions
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