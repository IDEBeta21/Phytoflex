import { Button, Text, StyleSheet, View, Alert, TextInput, ActivityIndicator } from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFTextInput, PFCard,PFCardShop, PlantCategory, SearchPlant} from './../../components'
import SampleData from '../../utils/SampleData'


import firebase from 'firebase'

import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function ShopHomePage({navigation}) {

  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);


  

    const getData = async() => {

      // Get data inside document
      firebase.firestore()
      .collection('PlantListItem').get().then((res) => {
        let comment = res.docs.map(doc => { // saka gumamit ako ng map
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


  function toShopSearch() {
    navigation.navigate('ShopSearch');
    
  }


 
  return (

    
    <View style={styles.mainContainer} >
      
      <ScrollView> 
        <PFText weight='semi-bold'>Manifesting... Gagana hahahaha </PFText>
      <View>
      <PFText weight = "semi-bold" size = {18}> Categories</PFText>
      
      <PFFlatList
            numColumns={4}
            noDataMessage='No Plant item to post'
            data={SampleData.plantCategory}
            renderItem={(item) => (
             
              <PlantCategory
                imageURL={item.imageURL}
                categoryName={item.category}
                onPress={() => Alert.alert(item.category)}
              />
            )}
            keyExtractor={(item,index) => index}
          />
      
        </View>
              
        <View>
              
        <PFText weight = "semi-bold" size = {18}>Discover Plants</PFText>
        <PFFlatList
            numColumns={2}
            noDataMessage='No Plant item to post'
            data={refdata}
            renderItem={(item) => (
              <PFCardShop
                imageURL={item.imageURL}
                itemName={item.itemName}
                category={item.categoryName}
                price={item.price}
                quantity={item.quantity}
                sold={item.sold}
                onPress={() => {navigation.navigate('ProductPage', {itemName: item.itemName, imageURL: item.imageURL, category: item.categoryName, price: item.price, sold: item.sold, size: item.size, stock: item.quantity})
    
              }}
              />
            )}
            keyExtractor={(item,index) => index}
          />
        </View>
              
      </ScrollView>
      
      
    
    </View>
    
  
  )

  
}



const styles = StyleSheet.create({
  mainContainer: {
    
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  textContaine:{
    fontSize: 16
  }
})

