import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

export default function PlantCareHomePage({navigation}) {
    return (
      <View style={ globalStyles.textContainer }>
        <Text style={ globalStyles.titleText }>
          This is the Plant Care Main Page
        </Text>
        <Text style={ globalStyles.paragraphText }>
          Open up plantCareHomePage.js to start working on your app!
        </Text>

        <Button onPress={() => navigation.push('PlantCareHomeScreen')} title="Click"></Button>
      </View>
    );
}
