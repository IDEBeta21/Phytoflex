import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import { FAB } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';

import { DrawerContent } from '../global/Drawer';

export default function DscMessagesScreen({navigation}) {
  
  return (
    <View style={ globalStyles.FABContainer }>
      <FAB 
          placement= "right" 
          size= "large" 
          icon= { <Entypo name="new-message" size={24} color="white" /> }
          buttonStyle= {{ backgroundColor: "#639D04" }}
      />
    </View>
  );
}
