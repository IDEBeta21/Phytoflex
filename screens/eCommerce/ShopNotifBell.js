import { Button, Text, View, TextInput } from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import firebase from 'firebase';
import { DrawerContent } from '../global/Drawer';
import {PFCardShopReviews, PFFlatList,PFSecondaryButton,  PFCardProduct, PFCardShop, PFPrimaryButton, PFCardShopCartItems, PFCartImage} from './../../components';

export default function ShopNotifBellPage({navigation}) {
 

  return (
    <View style={ globalStyles.textContainer }>
        
    <Text>Phytoflex</Text>
    
    </View>
  );
}
