import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

export default function Notifications({navigation}) {
  return (
    <View>
    <StatusBar style="auto" />
      <Text>Notifications</Text>
    </View>
  )
}