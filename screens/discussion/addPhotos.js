import { Text, StyleSheet, View, Alert, Dimensions, Image, TouchableOpacity, TextInput, Pressable, CheckBox} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {PFCardShopReviews, PFFlatList, PFCardProduct, PFCardShop, PFPrimaryButton, PFCardShopCartItems} from './../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker'
import globalVariable from '../landing/login';
import { FAB } from 'react-native-paper';
export default function  AddPhotosPage   ({navigation}){ 
return(
    <View>
        <View style={{ flex: 1 }}>
        <View style={{
            alignItems: 'center', 
        // alignSelf: 'center'
        }}>

                    
            <FAB
            small
            icon="camera-outline"
            color="#FFFFFF"
            label='Take a photo'
            onPress={() => navigation.navigate('TakePhoto')}

                style={{
                    backgroundColor: '#2A9C43',
                    position: 'absolute',
                    top: 400,
                    // margin: 16,
                    // right: 0,
                    // bottom: 34,
                }}
            />
        </View>
      </View>

    </View>
)

}