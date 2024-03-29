import { View, Text, Pressable,Dimensions,StyleSheet,TouchableOpacity,Image, TextInput } from 'react-native'
import React, {useState, useEffect, Component } from 'react';
import firebase from 'firebase';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../../global/globalStyles';
import StepIndicator from 'react-native-step-indicator';
import StarRating from 'react-native-star-rating-widget';
import Colors from '../../../utils/globalColors';

import { PFText , PFCard, PFActiveOrders, PFReviewPlant,PFFlatList } from '../../../components';
//import TrackOrderDetails from './TrackOrderDetails';
import SampleData from '../../../utils/SampleData';
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';





export default function ReviewPlantPage({navigation, route}) {

   
      const [refdata, setrefdata] = useState([]); // declaration 
      const [refnull, setrefnull] = useState(true);
      const [rating, setRating] = useState(0);
      const [addReviews, setaddReview] = useState("");
      let rate = "";
    
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
    let itemName = "";
    
      refdata.forEach((item) => {
         orderedItems = item.orderedItems
         subtotal = item.subTotal
         orderedItems.forEach((items) => {
          itemPic = items.imageURL
          itemName = items.itemName

         })
      })
      
      const [image, setimage] = useState(null)
      firebase.storage().ref().child(itemPic).getDownloadURL().then((url) => {
        setimage(url);
      })

        //get user
        //get user info
        const [refdata2, setrefdata2] = useState([]); // declaration 
        const [refnull2, setrefnull2] = useState(true); 

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
      }
      //display userImage
      let userImage = "";
      let userfullName = "";
      let userName = "";
      let followers = "";
      let following = "";
      let badgePoints = "";
      refdata2.forEach((item) => {
      userImage = item.profilePic
      userfullName = item.fName + "  " + item.lName 
      userName = item.userName
      followers = item.followers
      following = item.following
      badgePoints = item.userBadgePoints

      })
     

      function addReview() {
          firebase.firestore().collection("productReview").add({
            customerName: userfullName,
            date: "2022-05-13",
            imageURL: userImage,
            itemName: itemName,
            orderId: route.params.orderIDNo,
            rating: rating, 
            review: addReviews
          }).then((res)=>{
              Alert.alert("Review added successfully!")
          })
      }
      useEffect(() => {
        getOrders()
        getUsers();
        }, [])
 
  
 
  return (

    <ScrollView style={{paddingHorizontal: 10, paddingTop: 10, paddingBottom: 20}} showsHorizontalScrollIndicator={false} >
    <View>
    </View>
      {/* <PFFlatList
          numColumns={1}
          noDataMessage='No Orders'
          data={refdata}
          renderItem={(item) => (
            <PFReviewPlant
             timePurchase={item.date}
             orderIDNo = {item.orderId}
             total = {item.totalPayment}
            //  onPress={() => {navigation.navigate('DrawerTrackOrderDetails', 
            //  {
            //   orderIDNo: item.orderId,
            //   timePurchase: item.date,
            //   orderStatus: item.orderStatNum
            // }            
            //  ) }}          

            />
          )}
          keyExtractor={(item,index) => index}
        /> */}
        <View style= {{flexDirection:'row', width: '70%', marginBottom:20, }}>
                   <Image 
                       source={require('../../../assets/logo.png')}
                        style={{
                        marginTop: 5,
                        height: 100,
                        width: (Dimensions.get('window').width/1) * 0.25,
                        resizeMode:'contain',
                        borderRadius: 10 }} />
           <View style = {{flexDirection:'column',alignContent: 'center', paddingLeft:10, justifyContent:'center' }}> 
                    <PFText weight='semi-bold' size = {18}>Order ID: {route.params.orderIDNo} </PFText>
                    <PFText weight='medium' size = {14}>by Phyto Shop</PFText>
                    </View>
      </View>
      <View style = {{borderWidth:1, borderRadius:10,width:'96%', alignSelf: 'center' }}>
      <PFFlatList
        data={orderedItems}
        renderItem={(item) => (
          
          <View style={{flexDirection: 'row', paddingVertical: 10, padding:10, }}>
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
                  
                  
                  {/* star rating */}
                         <StarRating
                        rating={rating}
                        onChange={setRating}
                        starSize={55}
                        style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
                        /> 
                    <View style = {{paddingBottom:5, paddingLeft:5}}>
                      <PFText weight='semi-bold' size = {18}>Write Your Review</PFText>
                    </View>
                    
                    <View style = {{width: '98%',alignSelf: 'center', marginBottom:10}}>
                    
                    <TextInput style = {{...styles.inputReview, marginRight:5, marginLeft: 5, alignItems:"center",}}
               underlineColorAndroid = "transparent"
               placeholder = "Add your comments and review about the plants here. "
               placeholderTextColor = "light-gray"
               autoCapitalize = "none"
               multiline={true}
               numberOfLines={4}
               onChangeText = {(text) => setaddReview(text)}
               />
               <View style = {{alignSelf: 'flex-end', padding:5}}>
               <PFText weight='light' color = 'light-gray' size = {14}>Add up to 40 characters</PFText>
               </View>
               </View>
                 <View style={{ alignItems:"center", }}>
                  <TouchableOpacity style = {{width:"96%"}}  onPress={() => addReview()}>
                  <View style = {{...styles.submitReviewBtn, backgroundColor: '#1D4123', paddingTop:10, paddingBottom:10, alignItems: 'center', justifyContent: 'center',}}>
                  <Text style={{ color: '#ffff', fontSize: 16, fontFamily: 'poppins-semiBold', textAlign: 'center'}}>Submit Review</Text>
                  </View>
                  </TouchableOpacity>
                  </View>


</ScrollView>


  )
}
const styles = StyleSheet.create({
  
    submitReviewBtn: {
      
    borderRadius: 10,
    padding: 50,
    
  //  width: '60%'
  
  
  }, 
  inputReview: {
    padding:15,
  paddingLeft:25,
    paddingRight:25,
  
    // textAlignVertical: "center",
    fontSize:14,
    fontFamily: 'poppins-light',
   textAlignVertical: "top",
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
