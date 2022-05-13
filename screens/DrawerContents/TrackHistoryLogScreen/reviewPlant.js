//ReviewPlantPage

import { View, Text, Pressable,Dimensions,StyleSheet,TouchableOpacity, } from 'react-native'
import React, {useState, useEffect, Component } from 'react';
import firebase from 'firebase';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../../global/globalStyles';
import StepIndicator from 'react-native-step-indicator';

import { PFText , PFCard, PFActiveOrders, PFReviewPlant,PFFlatList } from '../../../components';
//import TrackOrderDetails from './TrackOrderDetails';


import SampleData from '../../../utils/SampleData';
import { ScrollView } from 'react-native-gesture-handler';





export default function ReviewPlantPage({navigation, route}) {
 
  
 
  return (
    <View style={ globalStyles.textContainer }>
      
      <PFFlatList
          numColumns={1}
          noDataMessage='No Orders'
          data={SampleData.orderDetails}
          renderItem={(item) => (
            <PFReviewPlant
             statusIndicator = {item.orderStatus}
             itemName = {item.itemName}
             timePurchase={item.date}
             orderIDNo = {item.orderId}
             total = {item.totalPayment}
             onPress={() => {navigation.navigate('DrawerTrackOrderDetails', 
             {
              orderIDNo: item.orderId,
              timePurchase: item.date,
              orderStatus: item.orderStatNum
            }            
             ) }}          

            />
          )}
          keyExtractor={(item,index) => index}
 
        />

            <TouchableOpacity  style = {{width:"91%"}} >
                  <View style = {{...styles.submitReviewBtn, backgroundColor: '#1D4123', paddingTop:10, paddingBottom:10, alignItems: 'center', justifyContent: 'center',}}>
                  <Text style={{ color: '#ffff', fontSize: 16, fontFamily: 'poppins-semiBold', textAlign: 'center'}}>Submit Review</Text>
                  </View>
                  </TouchableOpacity>        
    </View>


  )
}
const styles = StyleSheet.create({
  
    submitReviewBtn: {
      
    borderRadius: 10,
    padding: 50,
    
  //  width: '60%'
  
  
  }, 
})
