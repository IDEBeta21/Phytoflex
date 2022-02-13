import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';

export default function ShopNotifBellPage({navigation}) {
  // Calling Plantcare search screen
  
  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        Naks Lumilipat hahaha
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Di ko na alam sunod hahaha
      </Text>

    
    </View>
  );
}
