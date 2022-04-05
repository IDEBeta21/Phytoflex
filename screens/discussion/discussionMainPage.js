import { Button, Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import { FAB } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function DiscussionHomePage({navigation}) {

  return (
    <View style={ globalStyles.FABContainer }>
      <FAB 
          title = "Ask Community" 
          placement= "right" 
          size= "large" 
          upperCase
          icon= { <FontAwesome5 name="question-circle" size={24} color="white" /> }
          buttonStyle= {{ backgroundColor: "#639D04", borderRadius: 25 }}
          titleStyle= {{ fontFamily: 'poppins-semiBold', fontSize: 15, paddingLeft: 6, marginTop: 2 }} 
      />
    </View>
  );
}

