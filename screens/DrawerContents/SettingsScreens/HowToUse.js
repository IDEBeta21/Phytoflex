import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function AboutUs({navigation}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
    <StatusBar style="auto" />
      <Text>How To use the Phytoflex App</Text>
    </View>
  )
}