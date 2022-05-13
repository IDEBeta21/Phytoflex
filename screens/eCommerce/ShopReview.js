import { Text, StyleSheet, View, Alert, Dimensions, Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {PFCardShopReviews, PFFlatList, PFCardProduct, PFCardShop, PFPrimaryButton, PFCardShopCartItems} from './../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

 
export default function  ShopReviewPage({ route, navigation}){ 

  const [liked, setLiked] = useState(false);

  //productReviews
  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);
  //plantlistitem
  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mr Speedy', value: 'Mr Speedy'}
  ]);

  let userId = window.userId

  //IncrementDecrement
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
 
  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }

  if(counter>=route.params.stock){
    Alert.alert("You've reached the maximun number of items.")
    setCounter(1);
  }

  

// addData function for productItem 
  function addData(){
    firebase.firestore().collection('ProductItem').add({
      tempQuantity: 0,
      checked: 0,
      userId: userId,
      itemName: route.params.itemName,
      quantity: counter,
      price: route.params.price,
      imageURL: route.params.imageURL
      
    }).then((res) => {
      Alert.alert('Added to Crate Successfully')
    }).catch((err) => {
      Alert.alert(err)
    })
  }



  
  // getData for ProductReview Collections
  const getData = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('productReview').get().then((res) => {
      let comment = res.docs.map(doc => { 
        const data = doc.data();
        const id = doc.id;
        return {id, ...data}
      })
      setrefdata(comment);
      console.log(refdata);
      setrefnull(false);
    }).catch((err) => {
      Alert.alert(err)
    })
  }

  const getPlantItems = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('PlantListItem').get().then((snapshot) => {
      let plantItem = snapshot.docs.map(doc => { 
        const data2 = doc.data();
        const id2 = doc.id;
        return {id2, ...data2}
      })
      setrefdata2(plantItem);
      console.log(refdata2);
      setrefnull2(false);
    }).catch((err) => {
      Alert.alert(err)
    })
    
  }

 
  useEffect(() => {
    getData();
    getPlantItems();
}, [])


  
  return (
    <View style={{padding: 15, backgroundColor: 'white',}}>
    <PFText weight='semi-bold' size={15}>Reviews:</PFText>
    <PFFlatList
      styles={{...styles.reviewsArea}}
      numColumns={1}
      noDataMessage='No Reviews to Post'
      data={refdata}
      renderItem={(item) => (
        <PFCardShopReviews
          imageURL={item.imageURL}
          review={item.review}
          customerName={item.customerName}
          date={item.date}
          rate={item.rating}
          onPress={() => {navigation.navigate('ShopReviewPage')}}
        />
      )}
      keyExtractor={(item,index) => index}
    />
  </View>
  );
}