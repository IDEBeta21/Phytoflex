import { Button, Text, View, Image, StyleSheet} from 'react-native';
import React, { Component } from 'react';

export default function DiscussionLog({navigation}) {
  
  return (
    <View style={styles.screen}>
        <Image
          style={{
            resizeMode: 'contain', 
            alignSelf: 'flex-start',
            width: '90%',
            height: '90%',
        }}
          source={require('../../../assets/noDataPics/noDataFound.png')}>
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
