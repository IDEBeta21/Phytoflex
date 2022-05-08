import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import UserProfilePage from './UserProf/UserProfile';

import SocialMediaHomePage from "./SocialMediaHome";
import InboxZonePage from './SocMedInboxZone';
import SocMedSearchPage from './SocMedSearch';
import CreatePostPage from './CreatePostPage';
import PostPage from './PostPage';
import UserProfilePage from './UserProfile';
import CommentPage from './CommentPage';

import DrawerHeader from '../DrawerContents/DrawerHeader';

import Header from '../global/Header';

// functions for calling screens
function funcPlantCareHome({navigation}) {
  return (
    <SocialMediaHomePage navigation={navigation}/>
  );
}

function funcInbox({navigation}) {
  return (
    <InboxZonePage navigation={navigation}/>
  );
}
function funcSocMedSearch({navigation}) {
  return (
    <SocMedSearchPage navigation={navigation}/>
  );
}
function FuncCreatePost({navigation}) {
  return (
    <CreatePostPage navigation={navigation}/>
  );
}
function FuncPost({navigation}) {
  return (
    <PostPage navigation={navigation}/>
  );
}
function FuncUserProfile({navigation}) {
  return (
    <UserProfilePage navigation={navigation}/>
  );
}
function FuncComments({navigation}) {
  return (
    <CommentPage navigation={navigation}/>
  );
}



const Stack = createNativeStackNavigator();

// Stacking screens
function App({navigation}) {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
        
      
        <Stack.Screen
          name="SocialMediaHome"
          component={funcPlantCareHome}
          options={{ 
            headerTitle: (props) => <Header title={'Social Media'} navigation={navigation} boolHome={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        
        <Stack.Screen
          name="SocMedInboxZone"
          component={funcInbox}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Inbox'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="SocMedSearch"
          component={funcSocMedSearch}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'socMedSearch'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: 'white'
            },
            headerTintColor: '#1D4123'
          }}
        />
        <Stack.Screen
          name="CreatePostPage"
          component={FuncCreatePost}
          options={{ 
            headerTitle: (props) => <Header title={'Create Post'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="PostPage"
          component={FuncPost}
          options={{ 
            headerTitle: (props) => <Header title={'Post'} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="UserProfilePage"
          component={FuncUserProfile}
          options={{ 
            headerTitle: (props) => <Header title={''} navigation={navigation} />, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen
          name="CommentPage"
          component={FuncComments}
          options={{ 
            headerTitle: (props) => <Header title={'Comments'} navigation={navigation} />, 
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






















// // Importing screens
// import SocialMediaHomePage from "./SocialMediaHome";
// import SocialMediaSearchPage from "./SocialMediaSearch";

// // importing for Navigation
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from 'react-navigation';

// // const Drawer = createDrawerNavigator();
// const SocialMediaScreen = {
//   SocialMediaHome: {
//     screen: SocialMediaHomePage,
//     navigationOptions:{
//       headerShown: false
//     }
//   },
//   SocialMediaSearch: {
//     screen: SocialMediaSearchPage,
//     navigationOptions:{
//       headerShown: false
//     }
//   }
// }

// const SocialMediaStack = createStackNavigator(SocialMediaScreen);

// export default createAppContainer(SocialMediaStack);