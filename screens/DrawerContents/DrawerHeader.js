import { Button, StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';
import React, { Component } from 'react';
import{ useState } from 'react';
// import * as React from 'react';


export default function Header({ title, navigation, screenDescription }) {
  
  const [text, setText] = useState(""); //for resetting text field/text input
  return (
    
      <View style={style.header}>
        <Pressable onPress={() => navigation.navigate('SocialMediaHome')}>
        <Image
        style={{height: 25, width: 25, marginEnd: 32, marginStart: 4 }}
        source={require('../../assets/drawerIcons/arrow-left.png')}
        />
        </Pressable>
      <Text style={style.headerTitle}>{title}</Text>

    {screenDescription == 'UserProfileSc' ? /*Drawer*/
       <View style={style.headerIconContainer}>
       </View> : null
    }

    {screenDescription == 'EditProfileScreen' ? /*Drawer*/ 
        <View style={style.headerIconContainer}>
        </View> : null
      }

    {screenDescription == 'ActivityLogScreen' ? /*Drawer*/
        <View style={style.headerIconContainer}>
        </View> : null
      }

    {screenDescription == 'PostsScreen' ? /*Drawer*/
        <View style={style.headerIconContainer}>
        </View> : null
      }

    {screenDescription == 'ThreadsScreen' ? /*Drawer*/
        <View style={style.headerIconContainer}>
        </View> : null
      }

    {screenDescription == 'TrackHistoryScreen' ? /*Drawer*/
        <View style={style.headerIconContainer}>
        </View> : null
      }

    {screenDescription == 'SettingsScreen' ? /*Drawer*/
        <View style={style.headerIconContainer}>
        </View> : null
      }

    {screenDescription == 'RateUsScreen' ? /*Drawer*/
        <View style={style.headerIconContainer}>
        </View> : null
      }

    {screenDescription == 'UpgradeScreen' ? /*Drawer*/
        <View style={style.headerIconContainer}>
        </View> : null
      }

    </View>
  );
} 


const style = StyleSheet.create({
  input: {
    borderColor: '#1D4123',
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 2,
    paddingStart: 10,
    paddingEnd: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    fontFamily: 'poppins-light',
    fontSize: 12,
    color: '#1D4123',
  },
  headerTitle: {
    color: 'white', 
    fontFamily: 'poppins-semiBold',
    fontSize: 18,
    paddingTop: 4
  },
  header: {
    flex: 1,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
  headerIconContainer:{
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 32, 
    flexDirection: 'row'
  },
  whiteHeaderIconContainer:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 92, 
    flexDirection: 'row'
  },
  searchIconContainer:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 12,
    paddingLeft: 100, 
    flexDirection: 'row'
  },
  headerIcons:{
    height: 24, 
    width: 24, 
    marginLeft: 16,
  },
  plantCareHeaderIcons:{
    height: 27, 
    width: 27, 
    marginLeft: 14,
  },
  whiteHeaderIcons:{
    height: 24, 
    width: 24, 
    marginLeft: 16,
    marginBottom: 4
  },
  
});