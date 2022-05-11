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
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';

import globalVariable from '../landing/login';


export default function  ShopCratePage   ({ route, navigation}){ 
  
 
  const colours = ['white', '#D8F9C9'];
  const getColour = () => colours[Math.floor(Math.random() * colours.length)];
  const [colour, setColour] = useState(getColour(0));
  const handleClick = () => { setColour(getColour()); }
  
  const PFCardShopCartItems1 = ({imageURL,  item, itemName, price, onSubtract, onAdd, onSelected, deleteItem, onPress = () => {}}, style,    
  cardContentStyle) => {
  
    //Changing of bgColor
    
    const [isSelected, setSelection] = useState(false);
  
    const [image, setimage] = useState(null)
  
  
    firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
      setimage(url);
    })
  
    return(
  
      <View style={{...styles.cardShopCrateArea, ...style}}>
      <Card style={{flex: 1}} onPress={() => onPress()}>
        <View style= {{...styles.cardShopCrateContent, flexDirection:'row'}}>
          <View style={{...styles.checkBoxArea}}>
            <TouchableOpacity style={[{width: 32, height: 32, marginLeft: 5}]} onPress={onSelected}>
		          <Ionicons name={item.checked == 1 ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} size={25} color={item.checked == 1 ? "#1D4123" : "#aaaaaa"} />
		        </TouchableOpacity>
          </View>
        <Image 
          source={{ uri: image}}
          style={{
            marginTop: 5,
            height: 60,
            width: (Dimensions.get('window').width/1) * 0.15,
            borderRadius: 8
            
          }}
        />
  
        <Card.Content>
                <View style={{...styles.buttonAlignment, flexDirection:'row'}}>
                <PFText weight='semi-bold' size = {12.5}
                 style={{ flex: 1, textAlign: 'justify', marginLeft: 1}}
                 numberOfLines={2} 
                >{itemName}</PFText>
                <View style={{...styles.cartDeleteButtonArea}}>
              
                <Pressable onPress={deleteItem}>
              <Image
                style={{...styles.headerIcons}}
                source={require('../../assets/drawerIcons/shopIcons/Delete.png')}
                resizeMode='contain'
              />
              </Pressable>
              </View>
                 </View>
                 <View style={{...styles.buttonAlignment, flexDirection:'row'}}>
                 <TouchableOpacity onPress={onSubtract}>
              <View style={{...styles.buttonDesign, alignItems:'center'}}>
              <PFText weight='semi-bold' size = {15}>-</PFText>
              </View>
            </TouchableOpacity>
  
  
  
            <View style={{...styles.quantityArea, alignItems:'center'}}>
            <PFText weight='semi-bold'>{item.tempQuantity}</PFText>
            </View>
          
            
            <TouchableOpacity onPress={onAdd}>
               <View style={{...styles.buttonDesign, alignItems:'center'}}>
              <PFText weight='semi-bold' size = {15}>+</PFText>
              </View>
            </TouchableOpacity>
            <View style={{...styles.cartPriceArea}}>
            <PFText color={Colors.secondary} weight='semi-bold'>P{price}</PFText>
            <PFText color={Colors.secondary}>{isSelected ? price : ""}</PFText>
            </View>
            </View>
        </Card.Content>     
         </View>         
      </Card>
     
    
    </View>
    
    )
  }
 
  //doc_Id
  const userId = window.userId
  //productReviews
  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);
  //plantlistitem
  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);
  
  const [isSelected, setSelection] = useState(false);

  



  
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
  };
  
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



const [isSelected2, setSelection2] = useState(false);

let bgColor = '#D8F9C9';

//Computation for check out

const [counter1, setProducts] = useState(0);

// addData function for productItem 
function addData(){
  firebase.firestore().collection('tempOrders').add({
    itemName: route.params.itemName,
    userId: userId
    
  }).then((res) => {
    Alert.alert('Added to Crate Successfully')
  }).catch((err) => {
    Alert.alert(err)
  })
}

 //remove selected items from check out

 const deleteSelectedItem = (item, index) => {
  const nextProducts = [...refdata2];
  setProducts(nextProducts)

  function deleteItems() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.email);
  
        firebase.firestore()
        .collection('ProductItem').where('itemName', '==', nextProducts[index].itemName).get().then((res) => {
          res.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            const docRef = firebase.firestore().collection('ProductItem').doc(doc.id).delete()
            .then(() => {
             Alert.alert("Item deleted successfully")
            }); 
          })
        })
      } else {
        // User not logged in or has just logged out.
      }
    });
  
  
  }
  deleteItems();
 }


const onSubtract = (item, index) => {
  const nextProducts = [...refdata2];
  nextProducts[index].tempQuantity -= 1
  setProducts(nextProducts)

  const setOrders = async() => {
    
    // Get data inside document
    firebase.firestore()
    .collection('tempOrders').where('itemName', '==', nextProducts[index].itemName).get().then((res) => {
      res.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        const docRef = firebase.firestore().collection('tempOrders').doc(doc.id);
            // 
            const res = docRef.update("quantity", firebase.firestore.FieldValue.increment(-1))
      })
      let comment = res.docs.map(doc => {
        const data = doc.data();
        const id = doc.id; 
        return {id, ...data}
      })
    }).catch((err) => {
      Alert.alert(err)
    })
  }
  setOrders();
  
  
};

const onAdd = (item, index) => {
  const nextProducts = [...refdata2];
  nextProducts[index].tempQuantity += 1
  const setOrders = async() => {
  setProducts(nextProducts)
    // Get data inside document
    firebase.firestore()
    .collection('tempOrders').where('itemName', '==', nextProducts[index].itemName).get().then((res) => {
      res.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        const docRef = firebase.firestore().collection('tempOrders').doc(doc.id);
            // add quantity of selected item
            const res = docRef.update("quantity", firebase.firestore.FieldValue.increment(1))
      })
      let comment = res.docs.map(doc => {
        const data = doc.data();
        const id = doc.id; 
        return {id, ...data}
      })
    }).catch((err) => {
      Alert.alert(err)
    })
  }
  setOrders();
  
};

const selectHandler = (index, value) => {
  const newItems = [...refdata2]; // clone the array 
  newItems[index].checked = value == 1 ? 0 : 1; // set the new value   
  setProducts({ refdata2: newItems }); // set new state
  newItems[index].tempQuantity += 1;
  
  function addData(){
    firebase.firestore().collection('tempOrders').add({
      itemName: newItems[index].itemName, 
      userId: userId,
      quantity: 1,
      imageURL: newItems[index].imageURL, 
      price: newItems[index].price
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      Alert.alert(err)
    })
  }
  addData();
}
const getItems = (item, index) => {
  const nextProducts = [...refdata2];
  nextProducts[index].itemName += 1;
  setProducts(nextProducts);
  {handleClick}
  
};


let totalQuantity = 0;
let totalPrice = 0;


refdata2.forEach((item) => {

  totalQuantity += item.tempQuantity;
  totalPrice += item.tempQuantity * item.price;

});





    return (
      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', marginLeft: 8, marginTop: 8}}>
          <View  style={{flex: 1, paddingLeft: 8, }}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
          </View>
          <View  style={{flex: 10, padding: 7}}>
            <PFText>Select All</PFText>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{...styles.detailsContainer, flex: 1, alignItems:'flex-start'}}>
              <PFFlatList
                styles={{...styles.reviewsArea}}
                numColumns={1}
                noDataMessage='Loading...'
                data={refdata2}
                renderItem={(item, index, value) => (
                  <PFCardShopCartItems1
                    imageURL={item.imageURL}
                    itemName ={item.itemName}
                    item = {item}
                    price = {item.price}
               
                    onSubtract={() => onSubtract(item, index)}
                    onAdd={() => onAdd(item, index)}
                    onSelected={() => selectHandler(index, value)}
                    onPress={() => onAdd(item, index)}
                  />   
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
        </ScrollView>
        <View style={{flexDirection: 'row', width: (Dimensions.get('window').width/2),}}>
          <View style={{height: 60, width: (Dimensions.get('window').width/2) * 1, padding: 8, paddingLeft: 15, alignItems: 'flex-start'}}>
            <PFText>Sub Total: </PFText>
            <PFText weight='semi-bold'>{totalPrice}</PFText>
          </View>
          <TouchableOpacity style={styles.checkoutDesign} onPress={() => navigation.navigate('CheckoutPage')}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Check Out</Text>
          </TouchableOpacity>
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
    marginVertical: 7,
    
  },
  textContainer: {
    // justifyContent: 'center',
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 5,
  },
  cardContainer: {
    // justifyContent: 'center',
    borderColor: Colors.primary,
    // alignItems: 'center', 
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
   
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
    paddingTop: 5,
    paddingVertical: 4,
    marginLeft: 10
    // height: 400
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
    paddingLeft: 5,
    flex: 1,
    width: (Dimensions.get('window').width) * 1,
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
    backgroundColor: '#639D04', 
    width: (Dimensions.get('window').width/2), 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  buttonAlignment:{
    marginBottom: 0,
    paddingLeft: 1,
    
  },
  buttonDesign:{

    padding: 5,
    width: 30,
    height: 30,
    backgroundColor: "#D3E4B9",
    borderRadius: 10,
  },
  quantityArea:{
   
    padding: 5,
    width: 35,
    height: 43,
   
  },
  cardShopCrateArea:{
    flex: 1,
    marginBottom: 10,
    width: 335,
    height:95,
    borderWidth: 1,
    borderColor: "#1D4123",
    borderRadius: 4,
   
    
    
  },

  cardShopCrateContent:{
 
    marginTop: 10,
    padding: 2
    
   
  },
  cartPriceArea:{
    marginStart: 75,
    padding: 5,
  },
  cartDeleteButtonArea:{
    marginStart: 20,
    padding: 5
  },
  checkBoxArea: {
    padding: 1,
    paddingTop: 19,
    paddingLeft: 5
  },
  headerIcons:{
    height: 24, 
    width: 24, 
    marginRight: 3
  },

})
