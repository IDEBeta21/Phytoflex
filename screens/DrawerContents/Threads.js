import { Button, Text, View, Image, StyleSheet} from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';

export default function ThreadsScreen({navigation}) {
  
  return (
    <View style={styles.screen}>
        <Image
          style={{
            resizeMode: 'contain', 
            alignSelf: 'center',
            width: '90%',
            height: '90%',
        }}
          source={require('../../assets/noData.png')}>
        </Image>
  </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});