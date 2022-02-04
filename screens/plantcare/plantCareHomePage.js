import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';

export default function PlantCareHomePage({navigation}) {
  // Calling Plantcare search screen
  
  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Plant Care Main Page
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Open up plantCareHomePage.js to start working on your app!
      </Text>

      {/* <Button onPress={() => toPlantCareSearch()} title="Plant Care Search"></Button> */}
      <Button 
        onPress={
          () => navigation.navigate('PlantCareSearch')
          // () => this.props.navigation.dispatch(navigation.openDrawer())
        } 
        title="Plant Care Search"></Button>
    </View>
  );
}
