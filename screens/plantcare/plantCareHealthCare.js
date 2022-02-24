import { Button, Text, View } from 'react-native';
import React, { Component, useState } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';

import firebase from 'firebase';
import PFModalLogin from '../../components/Modals/PFModalLogin';

export default function PlantCareHealtCarePage({navigation}) {
  // Calling Plantcare search screen

  let userNotLoggedIn = false;

  firebase.auth().onAuthStateChanged((user) => {return user}) ? userNotLoggedIn = true : userNotLoggedIn = false

  const [modalVisible, setmodalVisible] = useState(userNotLoggedIn);

  if (userNotLoggedIn) {
    return (
      <View style={ globalStyles.textContainer }>
        
      
        <PFModalLogin 
          title={"Empty tab."} 
          message={"Login to use Plant Care funtionlity"} 
          visible={modalVisible} 
          modalClose={() => navigation.goBack()}  
        />
      </View>
    );
  }else{
    return(
      <View>
        <Text style={ globalStyles.titleText }>
            This is the Plant Care Health Care Page
          </Text>
          <Text style={ globalStyles.paragraphText }>
            Open up plantCareHealthCare.js to start working on your app!
          </Text>

          {/* <Button onPress={() => toPlantCareSearch()} title="Plant Care Search"></Button> */}
          <Button 
            onPress={
              () => navigation.navigate('PlantCareSearch')
              // () => this.props.navigation.dispatch(navigation.openDrawer())
            } 
            title="Plant Care Search"></Button>
      </View>
    )
    
  }
}
