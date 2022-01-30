import * as React from "react";
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import { globalStyles } from '../global/globalStyles';

export default function Discussion(){
    
  return(
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Discussion Page
      </Text>
       <Text style={ globalStyles.paragraphText }>
        Open up App.js to start working on your app!
      </Text>
    </View>
      
  );
}