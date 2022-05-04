import { Text, StyleSheet, View, Alert, Dimensions, Image, TouchableOpacity, TextInput, Pressable, CheckBox} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {PFCardShopReviews, PFFlatList, PFCardProduct, PFCardShop, PFPrimaryButton, PFCardShopCartItems, PFCartImage} from './../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';



export default function  CheckoutPage  ({ route, navigation}){ 

    let deliveryInfo = [
        {
            Courier : 'Phytoflex Delivery',
            ShippingFee: '200'
        },
      ]

  
  

 
  //doc_Id
  const userId = window.userId
  //productReviews
  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);
  //plantlistitem
  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);
  
  const [isSelected, setSelection] = useState(false);

  

// addData function for productItem 
  function addData(){
    firebase.firestore().collection('ProductItem').add({
      plantName: route.params.itemName,
      categoryName: route.params.category,
      
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
  
  const getUsers = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('users').where("userEmail", "==", window.userEmail).get().then((snapshot) => {

      let users = snapshot.docs.map(doc => { 


        const data2 = doc.data();
        const id2 = doc.id;
        return {id2, ...data2}

        
      })
      setrefdata2(users);
      console.log(refdata2);
      setrefnull2(false);
    }).catch((err) => {
      Alert.alert(err)
    })
    
  }

 
  useEffect(() => {
    getData();
    getUsers();
}, [])



    return (
     <View style={{...styles.pageContainer}}>
         <PFText weight = 'semi-bold' size={15}>Shipping Address</PFText>
         <View style={{flex: 1, paddingTop: 8}}>
         <PFFlatList
            noDataMessage='Loading'
            data={refdata2}
            renderItem={(item) => (
              <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 15,  width: 330  }}>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <View style={{flex: 6}}>
                  <PFText weight='semi-bold'>{item.fName} {item.lName}</PFText>
                  </View>
                </View>
                <PFText>{item.contactNumber}</PFText>
                <PFText>{item.Address}</PFText>

              </View>
            )}
            keyExtractor={(item,index) => index}
          />
          </View>
          
         
         
          <View style={{flex: 3}}>
                <View style={{paddingBottom: 5}}>
                <PFText weight = 'semi-bold' size={15}>Delivery</PFText>
                </View>
          
          <PFFlatList
            data={deliveryInfo}
            renderItem={(item) => (
              <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 5, padding: 10,  width: 330, paddingBottom: 2  }}>
                <View style={{flexDirection: 'column', marginBottom: 10}}>
                    <View style={{flexDirection: 'row'}}>
                    <PFText>Courier Service:</PFText>
                    <View style={{marginStart: 70}}>
                    <PFText weight = 'semi-bold'>{item.Courier}</PFText>
                    </View>
                    
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <PFText>Shipping Fee:</PFText>
                    <View style={{marginStart: 85}}>
                    <PFText weight = 'semi-bold'>{item.ShippingFee}</PFText>
                    </View>
                    
                    </View>
                </View>
              </View>
            )}
            keyExtractor={(item,index) => index}
          />
          <PFText>Items</PFText>
          </View>
         
           
         </View>
      
    );

}

const styles = StyleSheet.create({
  pageContainer: {
    // marginLeft: 8, 
    // width: (Dimensions.get('window').width/2) * 0.93
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
    marginVertical: 8,
    padding: 15

    
  },
  
})
