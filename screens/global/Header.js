import { Button, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { Component } from 'react';
// import * as React from 'react';

export default function Header({ title, navigation, boolHome }) {
  return (
    <View style={style.header}>
      
      {boolHome ? 
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/drawerIcons/menu.png')}
          />
        </Pressable> : null
      }
        
      {/* <Button title='lll' onPress={() => navigation.toggleDrawer()}/> */}
      <Text style={style.headerTitle}>{title}</Text>
    </View>
  );
} 

const style = StyleSheet.create({
  headerTitle: {
    color: 'white', 
    fontSize: 20, 
    paddingLeft: 10
  },
  header: {
    backgroundColor: '#1D4123',
    color: 'white',
    flex: 1,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});