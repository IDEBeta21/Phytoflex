import { Text, StyleSheet, View, Alert, Dimensions, Image, TouchableOpacity, TextInput, Pressable, CheckBox} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {PFCardShopReviews, PFFlatList, PFCardProduct, PFCardShop, PFPrimaryButton, PFCardShopCartItems} from './../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

import globalVariable from '../landing/login';


export default function  EditQuestionPage   ({navigation}){ 
return(
    <View>
         <PFPrimaryButton style={{marginTop: 25, marginLeft: 25, marginRight: 20}} title={'Delete'} onPress={() => navigation.navigate('CreateQuestionPage')}></PFPrimaryButton>
    </View>
)
}