








import { Button, Text, View , StyleSheet, StatusBar} from 'react-native';
import React, {useState, useEffect, Component } from 'react';
import { globalStyles } from '../../global/globalStyles';
import StepIndicator from 'react-native-step-indicator';
import { Dimensions } from 'react-native';


import { DrawerContent } from '../../global/Drawer';


//const { height, width } = useWindowDimensions();


const {width,height} = Dimensions.get("window");
const labels = ["Cart",
"Delivery Address",
"Order Summary",
"Payment Method",
"Track"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}



function App({navigation, route}) {
  const [currentPosition, setCurrentPosition] = useState(0)
  const data = [
    {
      label: "Order Placed",
     status: "You have placed an order",
     dateTime: "03 May 2022, 10:34 am"
    },
    {
      label: "PROCESSING",
     status: "Your order is being processed",
     dateTime: "03 May 2022, 10:34 am"
    },

  ]

  return (
    <View style= {styles.indicatorContainer}>

            
    <StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         labels={labels}
         direction={'vertical'}
    />
    </View>
  )
}

//TrackHistoryScreen
export default App;


const styles = StyleSheet.create({
    indicatorContainer: {
    height: height - 170,
    width: width - 30,
    padding: 20,
    margin: 15,
    elevation:10,
    borderRadius: 20,
    backgroundColor: '#fff'


  }, 



})