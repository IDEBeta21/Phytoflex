import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

export default function SocialMediaHomePage({navigation}) {

  const toSocialMediaHome = () => {
    navigation.navigate('SocialMediaHome');
  }

  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Social Media Search Page
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Open up SocialMediaSearch.js to start working on your app!
      </Text>
      
      <Button onPress={() => toSocialMediaHome()} title="Social Media Home"></Button>
    </View>
  );
}
