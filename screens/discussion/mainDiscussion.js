import * as React from "react";
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default function Discussion(){
    
  return(
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={{fontFamily: 'poppins-regular'}}>Open up App.js to start working on your app!</Text>
        <Text>This is the Discussion Page</Text>
      </View>
    </View>
      
  );
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});