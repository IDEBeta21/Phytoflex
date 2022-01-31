import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

export default function DiscussionHomePage({navigation}) {

  const toDiscussionSearch = () => {
    navigation.navigate('DiscussionSearch');
  }

  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Discussion Main Page
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Open up DiscussionHomePage.js to start working on your app!
      </Text>

      <Button onPress={() => toDiscussionSearch()} title="Discussion Search"></Button>
    </View>
  );
}
