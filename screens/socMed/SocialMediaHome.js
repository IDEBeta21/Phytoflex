import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import Header from '../global/Header';

export default function SocialMediaSearchPage({navigation}) {

  const toSocialMediaSearch = () => {
    navigation.navigate('SocialMediaSearch');
  }

  return (
    <View style={ globalStyles.textContainer }>
      {/* <Header title={'Social Media'}/> */}

      <Text style={ globalStyles.titleText }>
        This is the Social Media Home Page
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Open up SocialMediaHome.js to start working on your app!
      </Text>
      
      <Button onPress={() => toSocialMediaSearch()} title="Social Media Search"></Button>
    </View>
  );
}
