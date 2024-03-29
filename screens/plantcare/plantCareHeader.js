import { Button, StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';
import React, { Component } from 'react';
import{ useState } from 'react';
// import * as React from 'react';


export default function plantCareHeader({ title, navigation, boolHome, screenDescription }) {
  
  const [text, setText] = useState(""); //for resetting text field/text input
  return (
    <View style={style.header}>
      
      {/* Test if the displayed screen is a home screen */}
      {boolHome ? 
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            style={{height: 25, width: 25, marginEnd: 32, marginStart: 4 }}
            source={require('../../assets/drawerIcons/menu.png')}
          />
        </Pressable> : null
      }
        
      {/* <Button title='lll' onPress={() => navigation.toggleDrawer()}/> */}
      <Text style={style.headerTitle}>{title}</Text>

      {/* Top right corner icons */}
      {title == 'Plant Care' && boolHome? /* rendering icons for plant care*/
        <View style={style.headerIconContainer}>
          <Pressable onPress={() => navigation.navigate('PlantCareHealthCare')} >
            <Image
              style={style.plantCareHeaderIcons}
              source={require('../../assets/drawerIcons/plantCareIcons/healthCare.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('PlantCareOpportunity')} >
            <Image
              style={style.plantCareHeaderIcons}
              source={require('../../assets/drawerIcons/plantCareIcons/opportunity.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }
        
      {title == 'Search' ? /*Shop Search*/
        <View style={style.whiteHeaderIconContainer}>
          <TextInput style={style.input} placeholder= "Search"/>
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/shopIcons/filter.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/shopIcons/cart.png')}
              resizeMode='contain'
            />
          </Pressable>
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