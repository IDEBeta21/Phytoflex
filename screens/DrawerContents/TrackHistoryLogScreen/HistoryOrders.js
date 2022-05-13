<<<<<<< HEAD
import { View, Text, Pressable,Dimensions,StyleSheet, Alert } from 'react-native'
=======
import { View, Text, Pressable, Dimensions, StyleSheet, Alert } from 'react-native'
>>>>>>> 0d5b13bb0db4d8994fc323b6eabf0f5f31df7c7b
import React, {useState, useEffect, Component } from 'react';
import firebase from 'firebase';
import { StatusBar } from 'expo-status-bar';
import { globalStyles } from '../../global/globalStyles';
import StepIndicator from 'react-native-step-indicator';
//import { Dimensions } from 'react-native';
<<<<<<< HEAD
import { DrawerContent } from '../../global/Drawer';
const {width,height} = Dimensions.get("window");
//const { height, width } = useWindowDimensions();
import { PFText , PFCard, PFActiveOrders, PFHistoryOrders, PFFlatList } from '../../../components';
//import TrackOrderDetails from './TrackOrderDetails';

=======


import { DrawerContent } from '../../global/Drawer';


//const { height, width } = useWindowDimensions();
const {width,height} = Dimensions.get("window");


import { PFText , PFCard, PFActiveOrders, PFHistoryOrders, PFFlatList } from '../../../components';
//import TrackOrderDetails from './TrackOrderDetails';


>>>>>>> 0d5b13bb0db4d8994fc323b6eabf0f5f31df7c7b
import SampleData from '../../../utils/SampleData';
import { ScrollView } from 'react-native-gesture-handler';

function FuncTrackOrderDetails({navigation}){
    return(
      <TrackOrderDetails navigation={navigation}/>
    )
  }



export default function HistoryOrders({navigation, route}) {
  const [refdata2, setrefdata2] = useState([]); // declaration 
  const [refnull2, setrefnull2] = useState(true);

  const getOrders = async() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.email);
        firebase.firestore()
        .collection('Orders').where("userId", "==", user.uid).get().then((snapshot) => {
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
<<<<<<< HEAD
  let orderId = "";
  refdata2.forEach((item) => {
    orderId = item.orderId
  })

  function gotoReview(){
    navigation.navigate('DrawerReviewPlant', {
      orderIDNo:orderId
    })
=======
  function gotoReview(){
    navigation.navigate('DrawerReviewPlant')
>>>>>>> 0d5b13bb0db4d8994fc323b6eabf0f5f31df7c7b
  }

  useEffect(() => {
    
    getOrders();
    }, [])
 

return (
  
  <View style={ globalStyles.textContainer }>
    
<<<<<<< HEAD
        <PFFlatList
=======
    <PFFlatList
>>>>>>> 0d5b13bb0db4d8994fc323b6eabf0f5f31df7c7b
        numColumns={1}
        noDataMessage='No Orders'
        data={refdata2}
        renderItem={(item) => (
          <PFHistoryOrders
           statusIndicator = {item.orderStatus}
           timePurchase={item.date}
           orderIDNo = {item.orderId}
           total = {item.totalPayment}
           navigate = {()=> gotoReview()}
           onPress={() => Alert.alert(item.orderId)}          
<<<<<<< HEAD
          />       
=======

          />

               

>>>>>>> 0d5b13bb0db4d8994fc323b6eabf0f5f31df7c7b
        )}
        keyExtractor={(item,index) => index}

      />
        
        </View>

 )
}



const styles = StyleSheet.create({
   indicatorContainer: {
   height: height - 500,
   width: width - 30,
   padding: 20,
   margin: 15,
   borderRadius: 20,
   backgroundColor: 'transparent'}
  })


//SAMPLE USING 1 SAMPLE DATA TABLE
{/* 
<View style={ globalStyles.textContainer }>
     
     
     <PFFlatList
         numColumns={1}
         noDataMessage='No Orders'
         data={SampleData.activeOrder}
         renderItem={(item) => (
           <PFActiveOrders
           imageURL={item.imageURL}
            statusIndicator = {item.statusIndicator}
            timePurchase={item.timePurchase}
            orderIDNo = {item.orderIDNo}
           total = {item.total}
           items = {item.items}
           
           onPress={() => {navigation.navigate('DrawerTrackOrderDetails', {
             orderIDNo: item.orderIDNo,
             timePurchase: item.timePurchase,

           }            
            ) }}          

           />
         )}
         keyExtractor={(item,index) => index}

       />
       <View>
       </View>
   </View>


})
*/}