import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';

export default function DiscussionNotifPage({navigation}) {
  // Calling My Partner
  
  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        Kopya lang muna...
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Kopya lang ulit...
      </Text>

    
    </View>
  );
}