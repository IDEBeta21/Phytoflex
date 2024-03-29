import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import {SideBar} from '../../App';

export default function PlantCareSearchPage({navigation}) {

  const toPlantCareHome = () => {
    navigation.navigate('PlantCareHome');
  }

  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Plant Care Search Page
      </Text>
      <Text style={ globalStyles.paragraphText }>
        Open up plantCareSearch.js to start working on your app!
      </Text>
      
      <Button onPress={() => navigation.navigate('PlantCareHome')} title="Plant Care Home"></Button>
      <Button onPress={() => navigation.openDrawer()} title="Toggle Drawer"></Button>
    </View>
  );
}
