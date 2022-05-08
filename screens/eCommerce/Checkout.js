import { Text, StyleSheet, View, Alert, Dimensions, Image, TouchableOpacity, TextInput, Pressable, CheckBox} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {PFCardShopReviews, PFFlatList,PFSecondaryButton,  PFCardProduct, PFCardShop, PFPrimaryButton, PFCardShopCartItems, PFCartImage} from './../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';



export default function  CheckoutPage  ({ route, navigation}){ 

    let deliveryInfo = [
        {
            Courier : 'Phytoflex Delivery',
            ShippingFee: '200'
        },
      ]

      const userId = window.userId
      //productReviews
      const [orderedItems, setrefdata] = useState([]); // declaration
      const [refnull, setrefnull] = useState(true);
      //plantlistitem
      const [refdata2, setrefdata2] = useState([]); // declaration 
      const [refnull2, setrefnull2] = useState(true);
      
      const [isSelected, setSelection] = useState(false);


      const getData = async() => {

        // Get data inside document
        firebase.firestore()
        .collection('tempOrders').where("userId", "==", userId).get().then((res) => {
          let comment = res.docs.map(doc => { 
            const data = doc.data();
            const id = doc.id;
            return {id, ...data}
          })
          setrefdata(comment);
          console.log(orderedItems);
          setrefnull(false);
        }).catch((err) => {
          Alert.alert(err)
        })
      };

      

  const PFCardShopCartItems1 = ({imageURL,  quantity, itemName, price,  onPress = () => {}}, style, 
  cardContentStyle) => {
  
    //Changing of bgColor

    const [isSelected, setSelection] = useState(false);
  
    const [image, setimage] = useState(null)
  
  
    firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
      setimage(url);
    })
  
    return(

      

      <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 8  }}>
        <View style= {{flexDirection:'row'}}>

        <Image 
      source={{ uri: image}}
      style={{
        marginTop: 4,
        height: 60,
        width: (Dimensions.get('window').width/1) * 0.15,
        
        
      }}
    />
      <View style={{flexDirection: 'column', paddingTop: 7, paddingLeft: 20}}>
        
        <View style={{flex: 1}}>
        <PFText  size={12.5} style={{ flex: 1, textAlign:'center'}} numberOfLines={2} >{itemName}</PFText>
        <View style={{flexDirection: 'row'}}>
        <PFText color={Colors.secondary} weight='semi-bold' >P{price}</PFText>
        <View style={{paddingLeft: 80}}>
        <PFText> x {quantity}</PFText>
        </View>
      
        </View>
        
        </View>
      </View>

        </View>
        

    </View>
  
     
    
    )
  }
  
  

 
  //doc_Id
 

  

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

  //get customer's info
  let fName = "";
  let lName = "";
  let contactNumber = ""; 
  let Address = "";
  let customerName = "";

  refdata2.forEach((item) => {

    customerName = item.fName + " " + item.lName;
    contactNumber = item.contactNumber;
    Address = item.Address;

  
  });

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setMilliseconds(0);
    today.setSeconds(0); 



  //place order function

  let orderId ="";
  function placeOrder(){

  firebase.firestore().collection('Orders').add({

      ResultMacthed : "False",
      contactNumber : contactNumber,
      customerName: customerName,
      date : today,
      deliveredTime : "3:45 pm 04-27-2022",
      deliveryAddres : Address,
      orderId: "0", 
      orderedItems,
      userId: userId,
    }).then((res) => {
      console.log(res.id)

      function updateOrderId() {
       
          const docRef = firebase.firestore().collection('Orders').doc(res.id);
              // update doc Id
                      docRef.update({
                orderId: res.id
              })
        
      }
      
    updateOrderId()
        
      
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
          <PFText weight= "semi-bold">Items</PFText>
        
          <PFFlatList
            data={orderedItems}
            renderItem={(item) => (
              <PFCardShopCartItems1
              imageURL={item.imageURL}
              itemName={item.itemName}
              price = {item.price}
              quantity = {item.quantity}
              onPress ={ () => Alert.alert("Go to Product Again")}
              />
          
              )}
              keyExtractor={(item,index) => index}
            />
            <PFText>Subtotal: </PFText>
            <PFText>Delivery Fee: </PFText>
            <PFText>Total Payment: </PFText>
            <PFSecondaryButton title={'Place Order'} roundness={7} onPress={() => 
                   placeOrder()} />
          </View>
         
           
         </View>
      
    );

}

const styles = StyleSheet.create({
  pageContainer: {
    // marginLeft: 8, 
    // width: (Dimensions.get('window').width/2) * 0.93
    flex: 1,
  
    paddingLeft: 15,
    marginVertical: 4,
    padding: 10

    
  },
  cardShopCrateArea:{
    flex: 1,
    marginBottom: 12,
    width: 330,
    height: 82,
    borderWidth: 1,
    borderColor: "#1D4123",
    borderRadius: 4,
   
    
    
  },

  cardContainer:{

    marginTop: 10,
    padding: 2
    
   
  },
  
})