import { Text, StyleSheet, View, Alert, Dimensions, Image, TouchableOpacity, TextInput, Pressable, CheckBox} from 'react-native';
import React,  { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFCard, PFText } from '../../components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import {PFCardShopReviews, PFFlatList, PFCardProduct, PFCardShop, PFPrimaryButton, PFCardForumComment, PFCardShopCartItems} from './../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import firebase from 'firebase';

import globalVariable from '../landing/login';
 
export default function  CommentAnswerPage   ({navigation}){ 
return(
    <View style={ styles.mainContainer }>
    <View>
    <PFFlatList
          numColumns={1}
          noDataMessage='Loading...'
          data={SampleData.forumPost}
          renderItem={(item) => (
           
            <PFCardForumComment
              imageURL={item.imageURL}
              userName={item.userName}
              dateTime={item.dateTime}
              userImage={item.userImage}
              badgePoints={item.badgePoints}
              forumPost={item.forumPost}
              onPress={() => navigation.navigate('EditQuestionPage')}
              //onPressImage = {() => Alert.alert('Modal dapat e')}
            />
          )}
          keyExtractor={(item,index) => index}
        />
    </View>
    </View>
)

};
const styles = StyleSheet.create({
    mainContainer: {
      height: 600,
      borderWidth: 1,
      borderRadius: 15,
      margin: 15
    }
})