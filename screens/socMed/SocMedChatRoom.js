import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList,  PFMessageCard, PFSwitch
} from '../../components';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerContent } from '../global/Drawer';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';


export default function InboxZonePage({navigation}) {
  // Calling Plantcare search screen
  
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <PFFlatList
            numColumns={1}
            noDataMessage='No Notification Yet'
            data={SampleData.messageDetails}
            renderItem={(item) => (
              <PFMessageCard
                userPhoto={item.userPhoto}
                userName={item.userName}
                lastMsg={item.lastMsg}
                onPress={() => navigation.navigate('ChatPage')}
              />
            )}
            keyExtractor={(item,index) => index}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
})