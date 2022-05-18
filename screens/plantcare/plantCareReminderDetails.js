import { Text, StyleSheet, SafeAreaView, View, ScrollView, Image, Picker, TouchableOpacity, TouchableHighlight } from 'react-native';
import React, { Component, useState} from 'react';
import ImageSlider from 'react-native-image-slider';
import { FAB } from 'react-native-paper';
import SampleData from '../../utils/SampleData';


// import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native'; 
import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton, PFRadioButton,
  PFFlatList, 
  AccountListItem, PlantListItem, MyGardenItem, RecentSnapsItem,
  PFCard
} from '../../components';
import { color } from 'react-native-reanimated';

import Colors from '../../utils/globalColors';

export default function PlantCareReminderDetails({navigation, route}) {

  console.log(route.params.reminderTime)

  return (

      <View style={{flex: 1}}>

        <ImageSlider
          images={[
              route.params.imageUrl,
              // 'http://placeimg.com/640/480/any',
              // 'http://placeimg.com/640/480/any'
            ]}
        />

        {/* <FAB
          icon='image-plus'
          color='#438D36'
          style={styles.fab}
          onPress={() => alert('Pressed')}
        /> */}

        <View style={{ flex: 1, height: '50%', padding: 20 }}>
          {/* <PFText weight='semi-bold' style={styles.textStyle}> DAY 1 {'\n'}</PFText> */}
          <PFText weight='semi-bold' style={styles.textStyle} size={20}>{route.params.title} {'\n'}</PFText>
          {/* <PFText style={styles.textStyle}>Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear. Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear. Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear.</PFText> */}
          <PFText style={styles.textStyle} size={16}>{route.params.description}</PFText>
        </View>
        <View style={{ flex: 1, height: '50%', padding: 10, borderWidth: 2, borderColor: Colors.primary, borderRadius: 15, margin: 10 }}>
          {/* <PFText weight='semi-bold' style={styles.textStyle}> DAY 1 {'\n'}</PFText> */}
          <PFText weight='semi-bold' size={20}>Reminder Description</PFText>
          {/* <PFText style={styles.textStyle}>Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear. Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear. Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear.</PFText> */}
          {/* <PFText></PFText> */}
          <PFText size={16}>Status: {(route.params.doneStatus) ? 'Done' : 'To be Done'}</PFText>
          <PFText></PFText>
          <PFText size={16}>Category: {route.params.reminderType}</PFText>
          <PFText size={16}>Reminder: {route.params.reminderMsg}</PFText>
          <PFText size={16}>How frequent: Every {route.params.reminderFreq} week</PFText>
          {/* <PFText>Time: {(new Date(route.params.reminderTime.seconds).getMinutes().toString()).toString(2)}:{(new Date(route.params.reminderTime.seconds).getSeconds().toString()).toString(2)}</PFText> */}
        </View>

      </View>

  )
}

const styles = StyleSheet.create({

  textStyle: {
    fontFamily: 'poppins-semiBold',
    textAlign: 'justify',
    lineHeight: 24,
  },

  fab: {
    position: 'absolute',
    margin: 18,
    right: 0,
    bottom: '45%',
    backgroundColor: '#ffffff',
    fontFamily: 'poppins-semiBold',
    fontSize: 12, 
  }
  
})