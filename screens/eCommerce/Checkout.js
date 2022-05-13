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
      //orderedItems
      const [orderedItems, setrefdata] = useState([]); // declaration
      const [refnull, setrefnull] = useState(true);
      //get user info
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

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
   
      
    } else {
      // User not logged in or has just logged out.
    }
  });



  const getUsers = async() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.email);
        firebase.firestore()
        .collection('users').where("userEmail", "==", user.email).get().then((snapshot) => {
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
      } else {
        // User not logged in or has just logged out.
      }
    });
            // Get data inside document
   
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
      date : "5/14/2022",
      deliveredTime : "3:45 pm 04-27-2022",
      deliveryAddres : Address,
      orderId: "0", 
      orderedItems,
      userId: userId,
      totalPayment: totalPayment,
      orderStatus: "Order Placed",
      orderStatNum: 0,
      subTotal: route.params.subtotal
    }).then((res) => {
      console.log(res.id)
      Alert.alert("Order placed successfully!")

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

let totalPayment = route.params.subtotal + 200;


    return (
      <View style={{...styles.pageContainer}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 3,}}>
          <PFText style={{marginBottom: 5, marginTop: 5}} weight = 'semi-bold' size={15}>Shipping Address</PFText>
            <PFFlatList
              noDataMessage='No Data'
              data={refdata2}
              renderItem={(item) => (
                <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 15,  width: 330  }}>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <View style={{flex: 6, margin: 0}}>
                    <PFText weight='semi-bold' size={15}>{item.fName} {item.lName}</PFText>
                    <PFText size={12}>{item.contactNumber}</PFText>
                    <PFText size={12}>{item.Address}</PFText>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item,index) => index}
            />
          </View>
         
          <View style={{flex: 3}}>
            <PFText style={{marginBottom: 5, marginTop: 5}} weight = 'semi-bold' size={15}>Delivery</PFText>
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
          </View>

          <View style={{flex: 3}}>  
            <PFText style={{marginBottom: 5, marginTop: 10}} weight = 'semi-bold' size={15}>Items</PFText>
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
          </View>
                
          
          <View>
            <View style={styles.hr} />
          </View>
            
          <View style={{marginBottom: 15}}>  
            <View style={{flexDirection: "row", marginTop: 10}}>
              <View style={{paddingRight: 5}}>
                <PFText weight ="semi-bold">Subtotal: </PFText>
              </View>
              <View style={{alignItems: 'flex-end'}}><PFText>{route.params.subtotal}</PFText></View>
            </View>
            <View style={{flexDirection: "row"}}>
              <View style={{paddingRight: 5}}>
                <PFText weight='semi-bold'>Delivery Fee:  </PFText>
              </View>
              <View style={{alignItems: 'flex-end'}}><PFText >200</PFText></View>
            </View>
            <View style={{flexDirection: "row"}}>
              <View style={{paddingRight: 5}}><PFText weight='semi-bold'>Total Payment: </PFText></View>
              <View style={{alignItems: 'flex-end'}}><PFText weight='semi-bold'>{totalPayment}</PFText></View>
            </View>
          </View>
            
          <PFSecondaryButton title={'Place Order'} roundness={7} onPress={() => placeOrder()} />

          {/* <View>
            <PFText weight = 'semi-bold' size={15}>Shipping Address</PFText>
            <PFFlatList
              noDataMessage='Loading'
              data={refdata2}
              renderItem={(item) => (
                <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, marginBottom: 10, padding: 15,  width: 330  }}>
                  <View style={{flexDirection: 'row', marginBottom: 10}}>
                    <View style={{flex: 6, margin: 0}}>
                    <PFText weight='semi-bold' size={15}>{item.fName} {item.lName}</PFText>
                    <PFText size={12}>{item.contactNumber}</PFText>
                    <PFText size={12}>{item.Address}</PFText>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item,index) => index}
            />
          </View>

          <View>

          </View>

          <View>

          </View> */}
        </ScrollView>
      </View>  
      
    );

}

const styles = StyleSheet.create({
  pageContainer: {
    // marginLeft: 8, 
    // width: (Dimensions.get('window').width/2) * 0.93
    flex: 1,
    padding: 14,
    marginLeft: 2

    
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
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#639d04',
    borderBottomWidth: 2,
    marginTop: 40
  },
  
})
