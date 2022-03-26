import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';

export default function ActivityLogsScreen({navigation}) {
  
  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
            Yown Gumana din hahaha      </Text>
      <Text style={ globalStyles.paragraphText }>
            Hello Hello Testing      </Text>
    </View>
  );
}
