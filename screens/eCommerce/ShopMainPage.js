import { Button, Text, StyleSheet, View, Alert } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFCard,PFCardShop, PlantCategory, SearchPlant} from './../../components'
import SampleData from '../../utils/SampleData'


import firebase from 'firebase'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function ShopHomePage({navigation}) {


  function toShopSearch() {
    navigation.navigate('ShopSearch');
  }

  function getData(){

  

    // Get list of data inside collection
    firebase.firestore().collection('PlantListItem').get()
    .then((res) => {
      res.forEach((data) => {
        console.log(data.data())
      })
    }).catch((err) => {
      Alert.alert(err)
    })
  }

  return (
    <View style={styles.mainContainer}>
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
            data={SampleData.itemList}
            renderItem={(item) => (
              <PFCardShop
                imageURL={item.imageURL}
                itemName={item.itemName}
                category={item.category}
                price={item.price}
                quantity={item.quantity}
                sold={item.sold}
                onPress={() => {navigation.navigate('ProductPage', {itemName: item.itemName, imageURL: item.imageURL, category: item.category, price: item.price, sold: item.sold, size: item.size})
    
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
    // alignItems: 'center'
  },
  textContaine:{
    fontSize: 16
  }
})

