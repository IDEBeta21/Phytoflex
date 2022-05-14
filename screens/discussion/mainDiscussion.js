import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DiscussionHomePage from "./discussionMainPage";
//import ShopSearchPage from "./ShopSearchPage"
import DiscussionNotifBellPage from './discussionNotifBell';
import DiscussionSearchHeaderPage from './discussionSearchHeader';
import Header from '../global/Header';
import CreateQuestionPage from './createQuestion';
import CommentAnswerPage from './commentAnswer';
import EditQuestionPage from './editQuestion';
import AddPhotosPage from './addPhotos'
import TakePhoto from './TakePhoto'
import DscNotificationsScreen from './DscNotif';

// Functions for calling the screens
function FuncDscNotificationsScreen({navigation}) {
  return (
    <DscNotificationsScreen navigation={navigation}/>
  );
}

function FuncDiscussionHome({navigation}) {
  return (
    <DiscussionHomePage navigation={navigation}/>
  );
}

function FuncDiscussionSearchHeader({navigation}) {
  return (
    <DiscussionSearchHeaderPage navigation={navigation}/>
  );
}

function FuncDiscussionNotifBell({navigation}) {
  return (
    <DiscussionNotifBellPage navigation={navigation}/>
  );
}
function FuncCreateQuestion({navigation}) {
  return (
    <CreateQuestionPage navigation={navigation}/>
  );
}
function FuncCommentAnswer({navigation, route}) {
  return (
    <CommentAnswerPage navigation={navigation} route={route}/>
  );
}
function FuncEditQuestion({navigation}) {
    return (
      <EditQuestionPage navigation={navigation}/>
    );
}
function FuncAddPhotos({navigation}) {
  return (
    <AddPhotosPage navigation={navigation}/>
  );
}
function FuncTakePhotos({navigation,route}) {
  return (
    <TakePhoto navigation={navigation}  route={route}/>
  );
}
const Stack = createNativeStackNavigator();
// Stacking the Screens
function App({navigation}) {
  return (
    // <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DiscussionHomePage"
          component={FuncDiscussionHome}
          options={{ 
            headerTitle: (props) => <Header title={'Discussion'} navigation={navigation} boolHome={true}/>, 
            headerStyle: {
              backgroundColor: '#1D4123'
            },
            headerTintColor: 'white'
          }}
        />

        <Stack.Screen
          name="DscNotificationsScreen"
          component={FuncDscNotificationsScreen}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header screenDescription={'NoDataNotif'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: 'white'
            },
              headerTintColor: '#1D4123'
          }}
        />  

        
        <Stack.Screen
          name="DiscussionSearchHeaderPage"
          component={FuncDiscussionSearchHeader}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header screenDescription={'DscSearch'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: 'white'
            },
              headerTintColor: '#1D4123'
          }}
        />  

        <Stack.Screen
          name="DiscussionNotifBellPage"
          component={FuncDiscussionNotifBell}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Notifications'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white',
          }}

          />
        <Stack.Screen
          name="CreateQuestionPage"
          component={FuncCreateQuestion}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Ask Community'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white',
          }}

          />

        <Stack.Screen
          name="CommentAnswerPage"
          component={FuncCommentAnswer}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Comment'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white',
          }}

          />
        <Stack.Screen
          name="EditQuestionPage"
          component={FuncEditQuestion}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Edit'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white',
          }}

          />
           <Stack.Screen
          name="AddPhotosPage"
          component={FuncAddPhotos}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Photos'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white',
          }}

          />
          <Stack.Screen
          name="TakePhoto"
          component={FuncTakePhotos}
          // options={{ headerTitle: (props) => <Header {...props} /> }}
          options={{ 
            headerTitle: (props) => <Header title={'Take a Photo'} navigation={navigation}/>, 
            headerStyle: {
              backgroundColor: '#1D4123',
            },
            headerTintColor: 'white',
          }}

          />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;