import { Button, Text, View, Image, StyleSheet} from 'react-native';
import React, { Component } from 'react';

export default function EditProfile({navigation}) {
  return (
    <View style={styles.screen}>
        <Image
          style={{
            resizeMode: 'cover', 
            alignSelf: 'flex-start',
            width: '100%',
            height: '100%',
        }}
          source={require('../../../assets/sample/editProfile.png')}>
        </Image>
  </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});