import { Button, Text, View, Image, StyleSheet} from 'react-native';
import React, { Component } from 'react';

export default function DiscussionNotifBellPage({navigation}) {
  
  return (
    <View style={styles.screen}>
        <Image
          style={{
            resizeMode: 'contain', 
            alignSelf: 'center',
            width: '100%',
            height: '100%',
        }}
          source={require('../../assets/sample/notifications.png')}>
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