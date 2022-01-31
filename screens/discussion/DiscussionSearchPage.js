import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

export default function DiscussionSearchPage({navigation}) {

  const toDiscussionHome = () => {
    navigation.navigate('DiscussionHome');
  }

  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Dicussion Search Page
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Open up DiscussuionSearchPage.js to start working on your app!
      </Text>

      <Button onPress={() => toDiscussionHome()} title="Discussion Home"></Button>
    </View>
  );
}
