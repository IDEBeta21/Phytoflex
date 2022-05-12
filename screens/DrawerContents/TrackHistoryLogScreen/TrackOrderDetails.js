import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../../global/globalStyles';
import { PFText, PFFlatList, PFSecondaryButton, PFActiveOrders, PFItemsOrder, PFTrackOrderDetails } from '../../../components';
import Colors from '../../../utils/globalColors';
import StepIndicator from 'react-native-step-indicator';
import SampleData from '../../../utils/SampleData';
import { Dimensions } from 'react-native';
import React, {useState, useEffect, Component } from 'react';
import firebase from 'firebase';


const {width,height} = Dimensions.get("window");
const labels = ["Order Placed",
"Processing",
"Out of Delivery",
"Delivered"
];

export default function TrackOrderDetails({navigation, route}) {
  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);


  const [currentPosition, setCurrentPosition] = useState(route.params.orderStatus)
  const data = [
    {
      label: "Order Placed",
     status: "You have placed an order",
     dateTime: "03 May 2022, 10:34 am"
    },
    {
      label: "Processing",
     status: "Your order is being processed",
     dateTime: "03 May 2022, 10:34 am"
    },
    {
      label: "Out of Delivery",
     status: "Your order is out for delivery",
     dateTime: "03 May 2022, 10:34 am"
    },
    {
      label: "Delivered",
     status: "Your order has been delivered",
     dateTime: "03 May 2022, 10:34 am"
    },

  ]

 
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#1D4123',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#639D04',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#639D04',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#639D04',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#1D4123',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  labelFontFamily: "poppins-light",
  currentStepLabelColor: '#1D4123',
 
}
  const { 
    orderIDNo,
    timePurchase,
  } = route.params

  const [deliveryfee, setdeliveryfee] = useState(200)

  
  // setsubtotal(result)

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

  const [refdata, setrefdata] = useState([]); // declaration 
  const [refnull, setrefnull] = useState(true);

  const getOrders = async() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.email);
        firebase.firestore()
        .collection('Orders').where("orderId", "==", route.params.orderIDNo).get().then((snapshot) => {
          let users = snapshot.docs.map(doc => { 
            const data2 = doc.data();
            const id2 = doc.id;
            return {id2, ...data2}
          })
          setrefdata(users);
          console.log(refdata);
          setrefnull(false);
        }).catch((err) => {
          Alert.alert(err)
        })
      } else {
        // User not logged in or has just logged out.
      }
    });
            // Get data inside document
  }
let orderedItems = "";
let itemPic = "";
let subtotal = "";

  refdata.forEach((item) => {
     orderedItems = item.orderedItems
     subtotal = item.subTotal
     orderedItems.forEach((items) => {
      itemPic = items.imageURL
     })
  })
  
  const [image, setimage] = useState(null)
  firebase.storage().ref().child(itemPic).getDownloadURL().then((url) => {
    setimage(url);
  })
  useEffect(() => {
    getOrders()
    getUsers();
    }, [])
    
  


  return (


    <ScrollView style={{paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20}} showsHorizontalScrollIndicator={false} >
    <View style={{flexDirection: 'row', paddingBottom: 20}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* <PFText size={16} weight={'medium'} >Order ID: </PFText>
        <PFText size={16} weight={'semi-bold'} style={{marginLeft: 10}} >{route.params.orderId}</PFText> */}
      </View>
      <View style={{alignItems: 'flex-end', flex: 1}}>
        {/* <PFText>{route.params.orderDate}</PFText> */}
      </View>
    </View>

    <View style={{marginBottom: 15}}>
    <View style = {{flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginBottom: 5 }}>
               <PFText   weight='semi-bold' size = {14}>Order ID: </PFText>
               <PFText  paddingRight= {0 }weight='semi-bold' size = {14}>{route.params.orderIDNo}</PFText>
              <View style = {{}}>
              <PFText  weight='light' size = {14}>{route.params.timePurchase}</PFText>
              </View>
              </View>
              <View>
              <PFText weight='semi-bold' size = {20}>Delivery Status</PFText>
              <View style= {styles.indicatorContainer}>
              <StepIndicator
                  currentPosition={currentPosition}
                  labels={labels}
                  direction={'vertical'}
                  stepCount = {4}
                  renderLabel = {({position, stepStatus, label,  currentPosition }) =>{
                            return(
                              <View>
                                <PFText weight='semi-bold'>{data[position].label}</PFText>
                                <PFText color={'#999999'}>{data[position].status}</PFText>
                                <PFText color={'#999999'}>{data[position].dateTime}</PFText>
                              </View>
                            )
                  }}
                  customStyles={customStyles}
              />
              </View>
              </View>
      <PFText size={20} weight={'semi-bold'} >Order Summary</PFText>
    </View>
    <PFFlatList
    noDataMessage='No Orders'
    data={refdata2}
    renderItem={(item) => (

      <View style={{borderColor: Colors.primary, borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 15}}>
      <PFText size={18} weight={'semi-bold'} >
        {item.fName} {item.lName}</PFText>
      <PFText size={14} weight='semi-bold'>
        {item.contactNumber} </PFText>
      <PFText size={14} style={{textAlign: 'justify'}}>
        {item.Address} </PFText>
    </View>
    )}

    keyExtractor={(item,index) => index.toString()}
      />




    

    <PFText size={18} weight={'semi-bold'} >Items</PFText>
    <View style={{borderWidth: 1, borderColor: Colors.primary, borderRadius: 5, paddingHorizontal: 12, marginBottom: 20}}>
      <PFFlatList
        data={orderedItems}
        renderItem={(item) => (
          <View style={{flexDirection: 'row', paddingVertical: 10, }}>
            <View >
              <Image source={{uri : image}} style={{height: 50, width: 50, borderRadius: 5}} />
            </View>

            <View style={{flex: 1, paddingLeft: 10,}}>
              <View style={{flex: 1}}>
                <PFText weight='semi-bold'>
                  {item.itemName}</PFText>
              </View>

              <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', }}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                  <PFText  weight='semi-bold' size={16} color={Colors.secondary} >
                    P {item.price}</PFText>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                  <PFText>
                    x {item.quantity}</PFText>
                </View>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item,index) => index.toString()}
      />
    </View>
      <View style={{flexDirection: 'row', marginBottom: 15}}>
        <View style={{flex: 9}}>
          <PFText weight='medium'>
            Sub Total ({SampleData.orderDetails.length} items): </PFText>
            
          <PFText weight='medium'>
            Delivery Fee: </PFText>
        </View>
        <View style={{flex: 3}}>
          <PFText weight='medium'>
            P {subtotal} </PFText>
            
          <PFText weight='medium'>
            P {deliveryfee}</PFText>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View style={{flex: 9}}>
          <PFText weight='semi-bold' size={18}>
            Total Payment:</PFText>
        </View>
        <View style={{flex: 3}}>
          <PFText weight='semi-bold' size={18}>
            P {subtotal + deliveryfee}</PFText>
        </View>
      </View>
      <TouchableOpacity style={{flex:1, marginBottom: 10}} onPress={() => Alert.alert('Cancel')}>
        <View style={{
            flex: 1, borderColor: Colors.secondary, backgroundColor: Colors.secondary , 
            borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center', padding: 7,
          }}>
          <Text style={{color: Colors.white, fontSize: 16, fontFamily: 'poppins-semiBold', }}>Cancel Order</Text>
        </View>
      </TouchableOpacity>
      
        <Text styles = {{marginBottoms: 50}}>  
        </Text>
      
  </ScrollView>
    

  ) }


  const styles = StyleSheet.create({
    indicatorContainer: {
    height: height - 400,
    width: width - 30,
    marginLeft: 20,
    backgroundColor: 'transparent'


  }, 



})
