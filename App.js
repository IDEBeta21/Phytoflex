// import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';

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
import MyTabs from './screens/global/bottomNav';
import ComponentsSample from './screens/global/ComponentsSample';
import FirebaseSample from './screens/global/FirebaseSample';

import Onboarding from './screens/landing/Onboarding';

// Imports for Drawer navigation
import ActivityLogScreen from './screens/DrawerContents/ActivityLogScreens/ActivityLogs';
import UserProfileDrawer from './screens/DrawerContents/ProfileScreens/UserProfileDrawer';
import Address from './screens/DrawerContents/ProfileScreens/Address';
import DiscussionLog from './screens/DrawerContents/ProfileScreens/DiscussionLog';
import EditAddress from './screens/DrawerContents/ProfileScreens/EditAddress';
import EditProfile from './screens/DrawerContents/ProfileScreens/EditProfile';
import HomeLog from './screens/DrawerContents/ProfileScreens/HomeLog';

import PostsScreen from './screens/DrawerContents/Posts';
import ThreadsScreen from './screens/DrawerContents/Threads';
import TrackHistoryScreen from './screens/DrawerContents/TrackHistory';
import SettingsScreen from './screens/DrawerContents/Settings';
import RateUsScreen from './screens/DrawerContents/RateUs';
import UpgradeScreen from './screens/DrawerContents/PremiumOption'

import DrawerHeader from './screens/DrawerContents/DrawerHeader';
import ForgotPassword from './screens/landing/ForgotPassword';

// Imports for Settings Screen
import AboutUs from './screens/DrawerContents/SettingsScreens/AboutUs';
import FAQs from './screens/DrawerContents/SettingsScreens/FAQs';
import Notifications from './screens/DrawerContents/SettingsScreens/Notifications';
import PrivacyPolicy from './screens/DrawerContents/SettingsScreens/PrivacyPolicy';
import TermsAndConditions from './screens/DrawerContents/SettingsScreens/TermsAndConditions';

import ForumScreen from './screens/forum';
import PlantCare from './screens/plantcare/mainPlantCare';
import HeaderContent from './screens/global/Header';
// Import Activity Logs
import PostsLog from './screens/DrawerContents/ActivityLogScreens/PostsLog';
import ThreadsLog from './screens/DrawerContents/ActivityLogScreens/ThreadsLog';
// Import Track History
import ActiveOrders from './screens/DrawerContents/TrackHistoryLogScreen/ActiveOrders';
import HistoryOrders from './screens/DrawerContents/TrackHistoryLogScreen/HistoryOrders';
import TrackOrderDetails from './screens/DrawerContents/TrackHistoryLogScreen/TrackOrderDetails';
import ReviewPlantPage from './screens/DrawerContents/TrackHistoryLogScreen/reviewPlant';


// import { AppLoading } from 'expo';\
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
// import { View } from 'react-native-web';
// import { Text } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'

// Drawer Navigation functions
function FuncActivityLog({navigation}){
  return(
    <ActivityLogScreen navigation={navigation}/>
  )
}
function FuncUserProfileDrawer({navigation}){
  return(
    <UserProfileDrawer navigation={navigation}/>
  )
}

function FuncEditProfile({navigation}){
  return(
    <EditProfile navigation={navigation}/>
  )
}

function FuncEditAddress({navigation}){
  return(
    <EditAddress navigation={navigation}/>
  )
}

function FuncHomeLog({navigation}){
  return(
    <HomeLog navigation={navigation}/>
  )
}

function FuncDiscussionLog({navigation}){
  return(
    <DiscussionLog navigation={navigation}/>
  )
}

function FuncAddress({navigation}){
  return(
    <Address navigation={navigation}/>
  )
}

function FuncPost({navigation}){
  return(
    <PostsScreen navigation={navigation}/>
  )
}
function FuncThread({navigation}){
  return(
    <ThreadsScreen navigation={navigation}/>
  )
}
function FuncTrackHistory({navigation}){
  return(
    <TrackHistoryScreen navigation={navigation}/>
  )
}
function FuncSettings({navigation}){
  return(
    <SettingsScreen navigation={navigation}/>
  )
}

// Settings Screens
function FuncAboutUs({navigation}){
  return(
    <AboutUs navigation={navigation}/>
  )
}
function FuncFAQs({navigation}){
  return(
    <FAQs navigation={navigation}/>
  )
}
function FuncNotifications({navigation}){
  return(
    <Notifications navigation={navigation}/>
  )
}
function FuncPrivacyPolicy({navigation}){
  return(
    <PrivacyPolicy navigation={navigation}/>
  )
}
function FuncTermsAndConditions({navigation}){
  return(
    <TermsAndConditions navigation={navigation}/>
  )
}

function FuncRateUs({navigation}){
  return(
    <RateUsScreen navigation={navigation}/>
  )
}
function FuncUpgrade({navigation}){
  return(
    <UpgradeScreen navigation={navigation}/>
  )
}

function FuncLoginScreen({ navigation }) {
  return (
    <LoginScreen navigation={navigation}/>
  );
}

function FuncSignupScreen({ navigation }) {
  return (
    <SignUpScreen navigation={navigation}/>
  );
}

function FuncBottomNav({navigation}) {
  return(
    <MyTabs navigation={navigation}/>
  );
}

function FuncComponentSample({navigation}){
  return(
    <ComponentsSample navigation={navigation}/>
  )
}

function FuncFirebaseSample({navigation}){
  return(
    <FirebaseSample navigation={navigation}/>
  )
}

function FuncOnboarding({navigation}){
  return(
    <Onboarding navigation={navigation}/>
  )
}

function FuncForgotPassword({navigation}) {
  return(
    <ForgotPassword navigation={navigation}/>
  );
}

function FuncPostsLog({navigation}){
  return(
    <PostsLog navigation={navigation}/>
  )
}
function FuncThreadsLog({navigation}){
  return(
    <ThreadsLog navigation={navigation}/>
  )
}


function FuncActiveOrders({navigation, route}){
  return(
    <ActiveOrders navigation={navigation} route ={route}/>
  )
}

function FuncHistoryOrders({navigation, route}){
  return(
    <HistoryOrders navigation={navigation} route ={route}/>
  )
}
function FuncTrackOrderDetails({navigation, route}){
  return(
    <TrackOrderDetails navigation={navigation} route ={route}/>
  )
}
function FuncReviewPlant({navigation, route}){
  return(
    <ReviewPlantPage navigation={navigation} route ={route}/>
  )
}


const AuthStack = createNativeStackNavigator();


import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './screens/global/Drawer';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native-web';

const Drawer = createDrawerNavigator();

function SideBar({navigation}){

  
  

  return(
      // <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          // headerShown: false,
          // headerTransparent:true,
          drawerActiveTintColor: 'white',
          drawerStyle: {
            backgroundColor: '#1D4123',
            width: 300,
          },
          gestureEnabled: false
        }}
        drawerContent={props => <DrawerContent {...props}/>}
      >
        <Drawer.Screen name="Post" options={{headerShown: false}} component={FuncBottomNav}/>
        {/* <Drawer.Screen name="UserProfile" component={FuncMainDrawer}/> */}
        {/* <Drawer.Screen name="ActivityLogs" component={FuncActivityLog} /> */}
        <Drawer.Screen name="Login" option={{headerShown: false}} component={FuncLoginScreen} />

        {/* For Drawer Navigation */}
        
        <Drawer.Screen 
          name="DrawerUserProfile"
          component={FuncUserProfileDrawer}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'}  screenDescription={'UserProfileDrawer'} title={'My Profile'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="Address" 
          component={FuncAddress}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerUserProfile'} screenDescription={'Address'} title={'Address'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="EditProfile" 
          component={FuncEditProfile}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerUserProfile'} screenDescription={'EditProfile'} title={'Edit Profile'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="EditAddress" 
          component={FuncEditAddress}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'Address'} screenDescription={'EditAddress'} title={'Edit Address'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="HomeLog" 
          component={FuncHomeLog}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerUserProfile'} screenDescription={'HomeLog'} title={'Home'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="DiscussionLog" 
          component={FuncDiscussionLog}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerUserProfile'} screenDescription={'DiscussionLog'} title={'Discussion'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />
          
        <Drawer.Screen 
          name="DrawerActivityLogs"
          component={FuncActivityLog}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerUserProfile'} screenDescription={'ActivityLogScreen'} title={'Activity Log'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0
            },
            headerTintColor: 'white'
          }} />
          
        <Drawer.Screen 
          name="DrawerPostScreen"
          component={FuncPost}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'} screenDescription={'PostsScreen'} title={'My Posts'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />
          
        <Drawer.Screen 
          name="DrawerThread"
          component={FuncThread}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'} screenDescription={'ThreadsScreen'} title={'My Threads'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />
          
        <Drawer.Screen 
          name="DrawerTrackHistory"
          component={FuncTrackHistory}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'}screenDescription={'TrackHistoryScreen'} title={'Track History'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123',
              elevation: 0
            },
            headerTintColor: 'white'
          }} />

          <Drawer.Screen 
          name="DrawerActiveOrders"
          component={FuncActiveOrders}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'} screenDescription={'ActiveOrders'} title={'Active Orders'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white'
          }} />

          <Drawer.Screen 
          name="DrawerHistoryOrders"
          component={FuncHistoryOrders}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'} screenDescription={'HistoryOrders'} title={'Active Orders'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white'
          }} />

          <Drawer.Screen 
          name="DrawerTrackOrderDetails"
          component={FuncTrackOrderDetails}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerTrackHistory'} screenDescription={'TrackOrderDetails'} title={'Track Orders'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white'
          }} />
          <Drawer.Screen 
              name="DrawerReviewPlant"
              component={FuncReviewPlant}
              options={{ 
                headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerTrackHistory'} screenDescription={'TrackOrderDetails'} title={'Write a Review'} navigation={navigation} />, 
                headerLeft:false,
                headerStyle: {
                  backgroundColor: '#1D4123',
                  elevation: 0
                },
                headerTintColor: 'white'
              }} />

          <Drawer.Screen 
          name="DrawerSettings"
          component={FuncSettings}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'} screenDescription={'SettingsScreen'} title={'Settings'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="DrawerAboutUs"
          component={FuncAboutUs}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerSettings'} screenDescription={'AboutUs'} title={'About Us'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="DrawerFAQs"
          component={FuncFAQs}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerSettings'} screenDescription={'FAQs'} title={'Frequently Asked Questions'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="DrawerNotifications"
          component={FuncNotifications}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerSettings'} screenDescription={'Notifications'} title={'Notifications'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="DrawerPrivacyPolicy"
          component={FuncPrivacyPolicy}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerSettings'} screenDescription={'PrivacyPolicy'} title={'Privacy Policy'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />

        <Drawer.Screen 
          name="DrawerTermsAndConditions"
          component={FuncTermsAndConditions}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'DrawerSettings'} screenDescription={'TermsAndConditions'} title={'Terms And Conditions'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />                                                  

        <Drawer.Screen 
          name="DrawerRateUs"
          component={FuncRateUs}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'} screenDescription={'RateUsScreen'} title={'Rate Us'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />
        
        <Drawer.Screen 
          name="DrawerUpgradeScreen"
          component={FuncUpgrade}
          options={{ 
            headerTitle: (props) => <DrawerHeader goBackScreen={'SocialMediaHome'} screenDescription={'UpgradeScreen'} title={'Upgrade'} navigation={navigation} />, 
            headerLeft:false,
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }} />
        
      </Drawer.Navigator>
    // </NavigationContainer>s
  );
}



function App() {

  let [ fontsLoaded ] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-italic': require('./assets/fonts/Poppins-Italic.ttf'),
  })

  

  const [userLoggedIn, setuserLoggedIn] = useState(false)
  const [viewedOnboarding, setviewedOnboarding] = useState(false)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    
    (async() => {
      const user = await firebase.auth().currentUser
      if(user){
        setuserLoggedIn(true)
      }else{
        setuserLoggedIn(false)
      }

      const value = await AsyncStorage.getItem('@viewedOnboarding')
      if(value !== null){
        setviewedOnboarding(true)
      }
    })
    
  }, [])

  if (fontsLoaded) {
    return (
      <NavigationContainer independent={true}>
        <AuthStack.Navigator 
          // initialRouteName={(firebase.auth().onAuthStateChanged((user) => {return user})) ? "Login" : "MyTabs"}  
          // initialRouteName={(firebase.auth().currentUser) ? "MyTabs" : "Login"  }  
          // initialRouteName={(userLoggedIn) ? "MyTabs" : "Login"  } 
          initialRouteName={(userLoggedIn) ? "MyTabs" : "Onboarding"  } 
          // initialRouteName={(userLoggedIn) ? "Login" : "MyTabs"  } 
          screenOptions={{headerShown: false}}
        >
            <AuthStack.Screen name="Onboarding" component={FuncOnboarding}/>
            <AuthStack.Screen name="Login" component={FuncLoginScreen}/>
            <AuthStack.Screen name="ForgotPassword" component={FuncForgotPassword} />
            <AuthStack.Screen name="SignUpScreen" component={FuncSignupScreen}/>
            <AuthStack.Screen name="MyTabs" component={SideBar}/>
            <AuthStack.Screen name="ComponentsSample" component={FuncComponentSample}/>
            <AuthStack.Screen name="FirebaseSample" component={FuncFirebaseSample}/>
        
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  } else {
    // getFonts();
    // setFontsLoaded(true);
    // console.log("Font is good");
    return (<AppLoading/>);
  }
}

export default App;