import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { DrawerContent } from '../global/Drawer';


export default function ReqSwapPage({navigation}) {
  // Calling Plantcare search screen
  
  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        HIMALA NANAMAN
      </Text>
    </View>
  );
}
