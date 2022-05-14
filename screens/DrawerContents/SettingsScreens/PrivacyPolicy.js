import { Button, Text, View, Image, StyleSheet} from 'react-native';
import React, { Component } from 'react';

export default function PrivacyPolicy({navigation}) {
  return (
    <View style={styles.screen}>
        <Image
          style={{
            resizeMode: 'cover', 
            alignSelf: 'center',
            width: '100%',
            height: '100%',
        }}
          source={require('../../../assets/sample/TermsAndConditions.png')}>
        </Image>
  </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10
  },
});