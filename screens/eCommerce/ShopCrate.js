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



 
export default function  ShopCratePage   ({ route, navigation}){ 
 

  

  //productReviews
  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);
  //plantlistitem
  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);

  const userId = window.userId

  const [isSelected, setSelection] = useState(false);

  

// addData function for productItem 
  function addData(){
    firebase.firestore().collection('ProductItem').add({
      plantName: route.params.itemName,
      categoryName: route.params.category,
      quantity: counter
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
 ;

  const getPlantItems = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('ProductItem').where('userId','==' , userId).get().then((snapshot) => {

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
      <ScrollView>
       
      <View style={{...styles.cardContainer}}>
            <View style={{flexDirection:'row'}}>
            <View  style={{flex: 1, paddingLeft: 8}}>
            <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
               
            </View>
            <View  style={{flex: 10  , padding: 7}}>
            <PFText>Select All</PFText>
            </View>
              
              
            </View>
           
            
              
             <View style={{...styles.detailsContainer, flex: 1, alignItems:'flex-start'}}>
              
              <PFFlatList
              styles={{...styles.reviewsArea}}
            numColumns={1}
            noDataMessage='Loading...'
            data={refdata2}
            renderItem={(item) => (
              <PFCardShopCartItems
                imageURL={item.imageURL}
                itemName ={item.itemName}
                price = {item.price}
                onPress={() => Alert.alert(item.itemName)}
              />  
            )}
            keyExtractor={(item,index) => index}
          />
          
          </View>
          
              
          </View> 
          <View style={{...styles.buttonAlignment, flexDirection:'row'}}>
          <View  style={{...styles.checkoutDesign}}>
            <View style={{...styles.buttonAlignment, alignItems: 'center'}}>
                  <PFText>
                    Sub Total:
                  </PFText>
                  <PFText></PFText>
            </View>
            </View>
            <View  style={{...styles.checkoutDesign}}>
            <TouchableOpacity onPress={() => Alert.alert('Check out!') }>
                  <View style={styles.buttonArea}>
                  <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Check Out</Text>
                  </View>
         </TouchableOpacity>  
            </View>
            </View>
          
      </ScrollView>
      
    );

}

const styles = StyleSheet.create({
  itemContainer: {
    // marginLeft: 8, 
    // width: (Dimensions.get('window').width/2) * 0.93
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 11,
    marginVertical: 7
  },
  textContainer: {
    // justifyContent: 'center',
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 5,
  },
  cardContainer: {
    flex: 1,
    // justifyContent: 'center',
    borderColor: Colors.primary,
    alignItems: 'center', 
    padding: 8,
   
    
     
  },
  textShopContainer: {
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 10,
  },
  detailsContainer: {
    paddingTop: 12,
    paddingVertical: 4
  },
  categoryStyle:{
    paddingTop: 1
  },
  dropdownPicker:{
    width: 150,
    borderColor: '#1D4123'
  },
  deliveryStyle:{
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginLeft: 45,
    borderRadius: 10,
    width: 150,
    borderColor: '#1D4123'
  },

  buttonArea: {
    width: 180,
    padding: 10,
   
    marginStart: 115,
    backgroundColor: '#639D04',
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: "black",
  },
  buttonAlignment:{
    marginBottom: 0,
    paddingLeft: 5
  },
  reviewsArea:{
    paddingLeft: 3,
  },
  buttonDesign:{
    padding: 10,
    width: 35,
  },
  quantityArea:{
    padding: 10,
    width: 50,
    height: 43,
    borderWidth: 1,
    borderRadius: 15,
  }, 
  checkoutDesign:{
    marginTop: 310
  }

})
