import { Text, StyleSheet, View, Alert, Dimensions, Image, TouchableOpacity, TextInput, Pressable} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {PFCardShopReviews, PFFlatList, PFCardProduct, PFCardShop, PFPrimaryButton} from './../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';





 
export default function  ProductPage   ({ route, navigation}){ 
 

  

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
      <ScrollView>
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
      <View style={{...styles.cardContainer}}>
     
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
                onPress={() => Alert.alert(item.customerName)}
              />
            )}
            keyExtractor={(item,index) => index}
          />
           <View>
          <PFText weight = "semi-bold" size = {18}>Suggested</PFText>
          <ScrollView horizontal = {true}>
          <PFFlatList
            numColumns={5}
            noDataMessage='No Plant item to post'
            data={refdata2}
            renderItem={(item) => (
              <PFCardShop
                imageURL={item.imageURL}
                itemName={item.itemName}
                category={item.categoryName}
                price={item.price}
                quantity={item.quantity}
                sold={item.sold}
                onPress={() => {navigation.navigate('ProductPage', {itemName: item.itemName, imageURL: item.imageURL, category: item.categoryName, price: item.price, sold: item.sold, size: item.size, 
                  stock: item.quantity, plantDesc: item.plantDesc})
              }}
              />
            )}
            keyExtractor={(item,index) => index}
              />
          </ScrollView>
          </View>
      
          
          </View>
             
              
              
          </View> 
          <View style={{...styles.buttonAlignment, flexDirection:'row'}}>

          <TouchableOpacity onPress={() => decrementCounter()}>
            <View style={{...styles.buttonDesign, alignItems:'center'}}>
            <PFText weight='semi-bold' size = {23}>-</PFText>
            </View>
          </TouchableOpacity>



          <View style={{...styles.quantityArea, alignItems:'center'}}>
          <PFText weight='semi-bold'>{counter}</PFText>
          </View>
        
     
          
          <TouchableOpacity onPress={() => incrementCounter()}>
             <View style={{...styles.buttonDesign, alignItems:'center'}}>
            <PFText weight='semi-bold' size = {23}>+</PFText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => addData() }>
                  <View style={styles.buttonArea}>
                  <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Add to Crate</Text>
                  </View>
         </TouchableOpacity>   
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
    paddingBottom: 5,
    marginStart: 27,
    marginBottom: 5,
    backgroundColor: '#639D04',
    borderRadius: 15,
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
  }

})
