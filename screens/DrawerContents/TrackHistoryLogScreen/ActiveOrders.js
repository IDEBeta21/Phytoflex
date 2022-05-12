import { View, Text, Pressable,Dimensions,StyleSheet } from 'react-native'
import React, {useState, useEffect, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../../global/globalStyles';
import StepIndicator from 'react-native-step-indicator';

import { PFText , PFCard, PFActiveOrders, PFFlatList } from '../../../components';
//import TrackOrderDetails from './TrackOrderDetails';

import SampleData from '../../../utils/SampleData';
import { ScrollView } from 'react-native-gesture-handler';

function FuncTrackOrderDetails({navigation}){
    return(
      <TrackOrderDetails navigation={navigation}/>
    )
  }





export default function ActiveOrders({navigation, route}) {
 
  return (

  

    <View style={ globalStyles.textContainer }>
      
      <PFFlatList
          numColumns={1}
          noDataMessage='No Orders'
          data={SampleData.activeOrder}
          renderItem={(item) => (
            <PFActiveOrders
            imageURL={item.imageURL}
             statusIndicator = {item.statusIndicator}
             timePurchase={item.timePurchase}
             orderIDNo = {item.orderIDNo}
            total = {item.total}
            items = {item.items}
            
            onPress={() => {navigation.navigate('DrawerTrackOrderDetails', {
              orderIDNo: item.orderIDNo,
              timePurchase: item.timePurchase,

            }            
             ) }}          

            />
          )}
          keyExtractor={(item,index) => index}
 
        />

        
        
    </View>


  )
}



//SAMPLE USING 1 SAMPLE DATA TABLE
{/* 
 <View style={ globalStyles.textContainer }>
      
      
      <PFFlatList
          numColumns={1}
          noDataMessage='No Orders'
          data={SampleData.activeOrder}
          renderItem={(item) => (
            <PFActiveOrders
            imageURL={item.imageURL}
             statusIndicator = {item.statusIndicator}
             timePurchase={item.timePurchase}
             orderIDNo = {item.orderIDNo}
            total = {item.total}
            items = {item.items}
            
            onPress={() => {navigation.navigate('DrawerTrackOrderDetails', {
              orderIDNo: item.orderIDNo,
              timePurchase: item.timePurchase,

            }            
             ) }}          

            />
          )}
          keyExtractor={(item,index) => index}
 
        />
        <View>
        </View>
    </View>


*/}