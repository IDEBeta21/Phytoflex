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

 
export default function  ProductPage   ({ route, navigation}){ 

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
      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
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

            <View>
              <View style={styles.hr} />
            </View>

            <View>
              <View style={{flexDirection: 'row', padding: 15, paddingBottom: 5}}>
                <PFText weight='semi-bold' size = {18} style={{width: 250, alignItems:'flex-start'}}>{route.params.itemName} </PFText>
                <View style={styles.heartReact}>
                  <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                    <MaterialCommunityIcons
                      name={liked ? "heart" : "heart-outline"}
                      size={30}
                      color={liked ? "#1D4123" : "#1D4123"}
                      // style={{borderRadius: 100, borderWidth: 1}}
                    />
                  </Pressable>
                </View>
                {/* <PFText color={Colors.secondary} weight='semi-bold' size = {20} style={{flex: 1, alignItems: 'flex-end', marginLeft: 20}}>P {route.params.price}</PFText> */}
              </View>

              {/* <View style={styles.categoryStyle}>
                <PFText size = {13}>{route.params.category} </PFText>
              </View> */}

              <PFText color={Colors.secondary} weight='semi-bold' size = {20} style={styles.price}> P{route.params.price}</PFText>

              <View style={styles.detailsContainer}>
                <View style={{alignItems:'flex-start'}}>
                  <Text weight='semi-bold' style={{fontFamily: 'poppins-semiBold', color: 'white'}}>Type: </Text>
                  <Text weight='light' style={{fontFamily: 'poppins-regular', color: 'white'}}>{route.params.category}</Text>
                </View>

                <View style={{flex: 3, alignItems: 'center'}}>
                  <Text weight='semi-bold' style={{fontFamily: 'poppins-semiBold', color: 'white'}}>Size: </Text>
                  <Text weight='light' style={{fontFamily: 'poppins-light', color: 'white'}}>{route.params.size}</Text>
                </View>

                <View style={{flex: 1, alignItems: 'center' }}>
                  <Text weight='semi-bold' style={{fontFamily: 'poppins-semiBold', color: 'white'}}>Stock: </Text>
                  <Text weight='light' style={{fontFamily: 'poppins-light', color: 'white'}}>{route.params.stock}</Text>
                </View>
              </View>
              
              <View style={{padding: 15}}>
                <PFText weight = 'semi-bold' size={15}>Description:</PFText>
                <PFText>    {route.params.plantDesc}</PFText>

                <PFText weight='semi-bold' size={15} style={{marginTop: 15}}>Delivery</PFText>
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
              </View>

              <View style={{padding: 15, backgroundColor: 'white'}}>
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
                      onPress={() => Alert.alert(item.customerName)}
                    />
                  )}
                  keyExtractor={(item,index) => index}
                />
              </View>

              <View>
                <View style={styles.hr} />
              </View>

              <View style={{padding: 15}}>
                <PFText weight = "semi-bold" size = {18} style={{marginBottom: 5}}>Suggested</PFText>
                <ScrollView horizontal = {true}>
                  <PFFlatList
                    numColumns={5}
                    noDataMessage='No Suggestions'
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
        </ScrollView>
        <View style={styles.addtocrate}>
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
            {/* <TouchableOpacity onPress={() => navigation.navigate('CheckoutPage') }> */}
              <View style={styles.buttonArea}>
              <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Add to Crate</Text>
              </View>
            </TouchableOpacity>   
          </View>
        </View>
      </View>     
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
    padding: 15,
  },
  textShopContainer: {
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 0,
    paddingLeft: 15,
    paddingRight: 8,
    paddingTop: 8,
  },
  detailsContainer: {
    paddingTop: 10,
    paddingVertical: 8,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'rgba(29,65,35,0.9)',
    // backgroundColor: '#1d4123',
    flexDirection: 'row',
    borderWidth: 1, borderColor: '#1d4123'
  },
  categoryStyle:{
    alignItems:'flex-start',
    marginLeft: 15,

  },
  dropdownPicker:{
    width: 150,
    height: 50,
    borderColor: '#1D4123'
  },
  deliveryStyle:{
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 13,
    alignItems: 'center',
    marginLeft: 30,
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
    marginTop: 3,
    backgroundColor: '#639D04',
    borderRadius: 15,
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: "black",
  },
  buttonAlignment:{
    marginBottom: 0,
    paddingLeft: 5,
    paddingTop: 5,
    // alignItems: 'center'

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
    marginTop: 5,
    width: 50,
    height: 43,
    borderWidth: 1,
    borderRadius: 15,
  },
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#639d04',
    borderBottomWidth: 3,
  },
  addtocrate: {
      height: 60,
      width: 30,
      marginLeft: 10,
      paddingBottom: 5,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  heartReact: {
    paddingLeft: 0,
    marginLeft: 45,
    marginRight: 3,
    marginTop: 5,
    alignItems: 'flex-end'
  },
  price: {
    flex: 1, 
    paddingTop: 3, 
    marginLeft: 15, 
    marginBottom: 15, 
    paddingLeft: 15, 
    borderWidth: 1, 
    borderRadius: 50, 
    borderColor: '#639D04', 
    width: 85, 
    height: 35,
    alignItems: 'center'
  }
})
