import { Button, Text, StyleSheet, View, Alert, TextInput, ActivityIndicator, Image, TouchableHighlight, Dimensions, TouchableOpacity} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFTextInput, PFCard, PFCardShop, PlantCategory, SearchPlant} from './../../components'
import SampleData from '../../utils/SampleData'
import ImageSlider from 'react-native-image-slider';


import firebase from 'firebase'

import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { render } from 'react-dom';



const images = [
    'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_1.jpg?alt=media&token=85e917d3-fb19-4772-a972-2b2adbecf717',
    'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_2.jpg?alt=media&token=2b7262d3-005e-40ef-a044-eee8f6529558',
    'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_3.jpg?alt=media&token=947ce232-6cac-4488-9b5c-83ad1f3b5aa4',
    'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_4.jpg?alt=media&token=a2b2f513-2c8e-4d2f-93d7-654f83755a3c',
]

export default function ShopCategoryPage({navigation, route})  {

const [refdata, setrefdata] = useState([]); // declaration
const [refnull, setrefnull] = useState(true);


let userId = window.userId


const getData = async() => {

  // Get data inside document
  firebase.firestore()
  .collection('PlantListItem').where("categoryName", "==", route.params.category).get().then((res) => {
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

useEffect(() => {

getData();

}, [])

return (

         <View style={styles.shopCategory}>
              
              <PFText weight = "semi-bold" size = {18} style={{marginTop: 15, marginLeft: 12, marginBottom: 10}}>{route.params.category}</PFText>
           
            <View style={styles.shopCategoryContent}>
              <PFFlatList
                  numColumns={2}
                  noDataMessage='No Data'
                  data={refdata}
                  renderItem={(item) => (
                    <PFCardShop
                      imageURL={item.imageURL}
                      itemName={item.itemName}
                      category={item.categoryName}
                      price={item.price}
                      quantity={item.quantity}
                      sold={item.sold}
                      onPress={() => {navigation.navigate('ProductPage',  {itemName: item.itemName, imageURL: item.imageURL, category: item.categoryName, price: item.price, sold: item.sold, size: item.size, 
                        stock: item.quantity, plantDesc: item.plantDesc})
          
                    }}
                    />
                  )}
                  keyExtractor={(item,index) => index}
                />
</View>
    </View>
)

}

const styles = StyleSheet.create({
    shopCategory: {
        alignItems: 'flex-start',
        alignContent: 'center',
//      marginLeft: 5,
    },
    shopCategoryContent:{
        marginLeft: 8,
    },


})