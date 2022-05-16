import { Button, Text, View, Image} from 'react-native';
import React, { useState, useEffect,Component } from 'react';
import { PFText } from '../../components';
import SampleData from '../../utils/SampleData';
import { Dimensions } from 'react-native';



export default function UpgradeScreen({navigation}) {
  
  return (
    
    <View style = {{padding:30, }}>
    <View>
    <View style = {{alignItems:'center'}}>
          <Image 
          source={require('../../assets/img/ecommerce/payment.png')}
          style={{
          height: 50,
          width: (Dimensions.get('window').width/1) * 0.25,
          resizeMode:'contain',
          borderRadius: 10 }} />      
    <PFText>Start your plan now</PFText>
    </View>        
      <PFText>Benefits:</PFText>
      <PFText style = {{marginLeft:15}}>No more annoying adds</PFText>
      <PFText style = {{marginLeft:15}}>Unlimited plant identification snaps</PFText>
    </View>

    <View style = {{marginBottom:10, flexDirection:'row', padding:10, margin:10}} >
      <View style = {{borderWidth:1, marginBottom:10, margin:10}}> 
      <PFText>Basic</PFText>
      <PFText>1 Month</PFText>
      <PFText>P 150</PFText>
    </View>
    <View style = {{borderWidth:1, marginBottom:10, margin:10}}>
      <PFText>Essential</PFText>
     <PFText>6 Month</PFText>
     <PFText>P 750</PFText>
    </View>
    <View style = {{borderWidth:1, marginBottom:10,margin:10}}>
      <PFText>Premium</PFText>
      <PFText>1 Month</PFText>
      <PFText>P 1450</PFText>
    </View>
    </View>

    </View>
   
   



  );
}
UpgradeScreen