import { Button, Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';

import { DrawerContent } from '../global/Drawer';

export default function UserProfileScreen({navigation}) {

function gotoEditProfile() {
    toEditProfile();
}
  
const toEditProfile = () => {
    navigation.push('EditProfileScreen');
} 
  
  return (
    <View style={ globalStyles.textContainer }>
      <Text style={ globalStyles.titleText }>
            My Profile      
      </Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')} title="Edit Profile">
            <View style={globalStyles.buttonArea}>
                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Edit Profile</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}
