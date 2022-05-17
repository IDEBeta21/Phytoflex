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

export default function PlantCareReminderDetails({navigation, route}) {
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
          <PFText weight='semi-bold' style={styles.textStyle}> {route.params.title} {'\n'}</PFText>
          {/* <PFText style={styles.textStyle}>Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear. Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear. Small reddish spots appear on the leaves in the early stage  spots appear on the leaves in the early stage spots appear.</PFText> */}
          <PFText style={styles.textStyle}>{route.params.description}</PFText>
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