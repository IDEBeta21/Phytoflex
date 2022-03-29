import { Text, StyleSheet, View, Alert, Dimensions, Image } from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {PFCardShopReviews, PFFlatList, PFCardProduct} from './../../components';

import DropDownPicker from 'react-native-dropdown-picker';

import firebase from 'firebase'


export default function  ProductPage ({ route, navigation }){ 
  
  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mr Speedy', value: 'Mr Speedy'}
  ]);
  
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

  useEffect(() => {

    getData();
  
}, [])
    
   
    return (
      
      <ScrollView>
      <View style={{...styles.cardContainer}}>
      <PFFlatList
            numColumns={1}
            noDataMessage='Loading...'
            data={refdata}
            renderItem={(item) => (
              <PFCardProduct
                imageURL={route.params.imageURL}
               
              />
            )}
            keyExtractor={(item,index) => index}
          />
      
        
      <View style={{...styles.textShopContainer }}>
        <PFText weight='semi-bold' size = {23}>
        {route.params.itemName} </PFText>
        <View style={{...styles.categoryStyle}}>
        <PFText weight='semi-bold' size = {20}>
        {route.params.category} </PFText>
        </View>
         
            <PFText color={Colors.secondary} weight='semi-bold' size = {15}>P {route.params.price}</PFText>
        
          
           <View style={{...styles.detailsContainer, flexDirection: 'row'}}>
             
           <View style={{alignItems:'flex-start'}}>
             <PFText weight='semi-bold'>Type: </PFText>
              <PFText weight='light'>{route.params.category} </PFText>
             </View>

             <View style={{flex: 3, alignItems: 'center'}}>
                   <PFText weight='semi-bold'>Size: </PFText>
                   <PFText>{route.params.size}</PFText>
            </View>

            

            <View style={{flex: 1, alignItems: 'flex-end'}}>
                   <PFText weight='semi-bold'>Stock: </PFText>
               <PFText color={Colors.primary} weight='light'>{route.params.stock}</PFText>
              </View>

              
              </View>
            

             <View style={{...styles.detailsContainer, flex: 1, alignItems:'flex-start'}}>
              <PFText weight = 'semi-bold'>Description:</PFText>
              <PFText>{route.params.plantDesc}</PFText>
              <PFText weight='semi-bold'>Delivery</PFText>
              <View style={{...styles.dropdownPicker, flexDirection: 'row'}}>
                    <DropDownPicker
                        style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1}}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder = 'Select Courier'
                      />
                <View style={{...styles.deliveryStyle, alignItems: 'flex-start'}}>
                <PFText weight='semi-bold'>200</PFText>
                </View>

           

              </View>
              <View style = {{...styles.detailsContainer}}>
              <PFFlatList
            numColumns={1}
            noDataMessage='No Reviews to Post'
            data={refdata}
            renderItem={(item) => (
             
              <PFCardShopReviews
                imageURL={item.imageURL}
                review={item.review}
                customerName={item.customerName}
                date={item.date}
                onPress={() => Alert.alert(item.customerName)}
              />
            )}
            keyExtractor={(item,index) => index}
          />

              </View>
              
          </View> 
              
          
               
           
           
          
         
              
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
    paddingLeft: 10,
    marginVertical: 7
  },
  textContainer: {
    // justifyContent: 'center',
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 8,
  },
  cardContainer: {
    flex: 1,
    // justifyContent: 'center',
    borderColor: Colors.primary, 
     
  },
  textShopContainer: {
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 0,
    paddingLeft: 10,
    paddingTop: 10,
  },
  detailsContainer: {
    paddingTop: 10,
    paddingVertical: 7
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
    marginLeft: 30,
    borderRadius: 10,
    width: 150,
    borderColor: '#1D4123'
  }

})