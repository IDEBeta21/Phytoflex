import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

export default function PlantCareSearchPage({navigation}) {
    return (
      <View style={ globalStyles.textContainer }>
        <Text style={ globalStyles.titleText }>
          This is the Plant Care Search Page
        </Text>
        <Text style={ globalStyles.paragraphText }>
          Open up plantCareSearch.js to start working on your app!
        </Text>
      </View>
    );
}
