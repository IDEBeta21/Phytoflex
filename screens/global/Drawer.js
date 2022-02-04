import { View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import { 
  Avatar, Title, Caption, Paragraph, 
  Text, TouchableRipple, Switch  
} from 'react-native-paper';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text style={{color: 'white'}}>Main Content</Text>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}


