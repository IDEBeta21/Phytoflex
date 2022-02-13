import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { Component } from 'react';
// import * as React from 'react';

export default function Header({ title, navigation, boolHome }) {

  return (
    <View style={style.header}>
      
      {/* Test if the displayed screen is a home screen */}
      {boolHome ? 
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            style={{height: 25, width: 25, marginEnd: 32, marginStart:4 }}
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
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/plantCareIcons/healthCare.png')}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('PlantCareOpportunity')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/plantCareIcons/opportunity.png')}
            />
          </Pressable>
        </View> : null
      }

      {title == 'Shop' && boolHome? /* rendering icons for plant care*/
        <View style={style.headerIconContainer}>
          <Pressable onPress={() => navigation.navigate('ShopSearchHeader')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/search.png')}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/bell.png')}
            />
          </Pressable>
        </View> : null
      }
      
      {title == 'Search' ? /* rendering icons for plant care*/
        <View style={style.headerIconContainer}>
          <Pressable onPress={() => navigation.navigate('ShopSearchHeader')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/search.png')}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/bell.png')}
            />
          </Pressable>
        </View> : null
      }
    </View>
  );
} 

const style = StyleSheet.create({
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
  headerIcons:{
    height: 24, 
    width: 24, 
    marginLeft: 16,
  },
  whiteHeader: {
    backgroundColor: 'white',
    color: '#1D4123',
    flex: 1,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  }
});