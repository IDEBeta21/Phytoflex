import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';

import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList, 
  AccountListItem, PlantListItem, AddressListItem, BadgeHistoryListItem, MessagaNotifItem,
  PFCard,PFPostsCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';

export default function AllScreenPage({navigation}) {

  return (
    <View style={ globalStyles.textContainer }>
      <PFFlatList
          numColumns={1}
          noDataMessage='No Followers'
          data={SampleData.cardPostData}
          renderItem={(item) => (
            <PFPostsCard 
              imageURL={item.imageURL}
              description={item.description}
              onPress={() => Alert.alert(item.name)}/>
          )}
          keyExtractor={(item,index) => index}
        />
    </View>
  );
}
