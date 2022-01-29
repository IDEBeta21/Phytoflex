import * as React from "react";
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import { globalStyles } from '../global/globalStyles';

export default function SocialMedia(){
    
  return(
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
        This is the Social Media Page
      </Text>
       <Text style={ globalStyles.paragraphText }>
        Open up App.js to start working on your app!
      </Text>
    </View>
      
  );
}