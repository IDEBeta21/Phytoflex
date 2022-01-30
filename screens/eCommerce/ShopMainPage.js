import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

export default function ShopHomePage() {
    return (
      <View style={ globalStyles.textContainer }>
        <Text style={ globalStyles.titleText }>
          This is the Shop Main Page
        </Text>
        <Text style={ globalStyles.paragraphText }>
          Open up ShopMainPage.js to start working on your app!
        </Text>
      </View>
    );
}
