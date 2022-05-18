import { Button, StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';
import React, { Component } from 'react';
import{ useState } from 'react';
import { IconButton, Colors } from 'react-native-paper';
import {ImagePicker} from 'react-native-image-picker'
import firebase from 'firebase';

// import * as React from 'react';

export default function Header({ title, navigation, boolHome, boolClose, boolBack, boolCancelCheckout, screenDescription }) {
  
  //remove selected items from check out
  function deleteItems() {
    navigation.navigate('ShopCrate')
    firebase.firestore()
    .collection('tempOrders').where('userId', '==', window.userId).get().then((res) => {
      res.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        const docRef = firebase.firestore().collection('tempOrders').doc(doc.id).delete()
        .then(() => {
          console.log('User deleted!');
        }); 
      })
    })
  }
  const [text, setText] = useState(""); //for resetting text field/text input
  return (
    <View style={style.header}>
      
      {/* Test if the displayed screen is a home screen */}
      {boolHome ? 
        <Pressable 
        onPress={() => navigation.toggleDrawer()}>
          <Image
            style={{height: 25, width: 25, marginEnd: 32, marginStart: 4 }}
            source={require('../../assets/drawerIcons/menu.png')}
          />
        </Pressable> : null
      }

      {boolClose ?
        <Pressable 
            onPress={() => navigation.navigate('PlantCareHome')}>
            <Image
              style={{height: 25, width: 25, marginEnd: 32, marginStart: 4 }}
              source={require('../../assets/img/plantcare/icn_window-close.png')}
            />
        </Pressable> : null
      }

      {boolBack ?
        <Pressable 
            onPress={() => navigation.navigate('PlantCareHome')}>
            <Image
              style={{height: 25, width: 25, marginEnd: 32, marginStart: 4 }}
              source={require('../../assets/img/plantcare/icn_arrow-left.png')}
            />
        </Pressable> : null
      }
      {boolCancelCheckout ?
        <Pressable 
            onPress={() => deleteItems()}>
            <Image
              style={{height: 20, width: 20, marginEnd: 32, marginStart: 3, resizeMode:'contain' }}
              source={require('../../assets/drawerIcons/shopIcons/crate.png')}
            />
        </Pressable> : null
      }
   
      {/* <Button title='lll' onPress={() => navigation.toggleDrawer()}/> */}
      <Text style={style.headerTitle}>{title}</Text>

      {/* Top right corner icons */}
      {title == 'Plant Care' && boolHome? /* rendering icons for plant care*/
        <View style={style.headerIconContainer}>
          {/* <Pressable onPress={() => navigation.navigate('PlantCareHealthCare')} > */}
          <Pressable onPress={() => navigation.navigate('PlantCare')} >
            <Image
              style={style.plantCareHeaderIcons}
              // source={require('../../assets/drawerIcons/plantCareIcons/healthCare.png')}
              source={require('../../assets/drawerIcons/plantCareIcons/icn_bell.png')}
              resizeMode='contain'
            />
          </Pressable>
          {/* <Pressable onPress={() => navigation.navigate('PlantCareOpportunity')} > */}
          <Pressable onPress={() => navigation.navigate('PlantCareTips')} >
            <Image
              style={style.plantCareHeaderIcons}
              source={require('../../assets/drawerIcons/plantCareIcons/opportunity.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }

      {title == 'Shop' && boolHome? /*Shop Main Page*/
        <View style={style.headerIconContainer}>
          <Pressable onPress={() => navigation.navigate('ShopCrate', {
          })} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/crate.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/bell.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }
      {title == 'Checkout Details' && boolCancelCheckout? /*Shop Main Page*/
        <View style={style.headerIconContainerCheckout}>
         
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/bell.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }
      
      {title == 'Social Media' && boolHome? /*Social Media Main Page*/
        <View style={style.headerIconContainer}>
          <Pressable onPress={() => navigation.navigate('SocMedSearch')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/search.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('SocMedInboxZone')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/shopIcons/bell.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }

      {title == 'Discussion' && boolHome? /*Discussion Main Page*/
        <View style={style.headerIconContainer}>
          <Pressable onPress={() => navigation.navigate('DiscussionSearchHeaderPage')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/discussionIcons/search.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('DiscussionNotifBellPage')} >
            <Image
              style={style.headerIcons}
              source={require('../../assets/drawerIcons/discussionIcons/notifbell.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }

      {title == 'Ask Community' ? /*Discussion Main Page*/
        <View style={style.headerIconContainer1}>
          <Pressable onPress={() => navigation.navigate('AddPhotosPage')} >
            <Image
              style={style.dscheaderIcons}
              source={require('../../assets/drawerIcons/discussionIcons/ri_image-add-fill.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable>
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/wSearch.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }
      {title == 'Search' ? /*Shop Search*/
        <View style={style.whiteHeaderIconContainer}>
         
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/shopIcons/filter.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/shopIcons/crate.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }

      {screenDescription == 'DscSearch' ? /*Discussion Search*/
        <View style={style.searchIconContainer}>
          <TextInput style={style.input} placeholder= "Search"/>
          {/* <Pressable onPress={() => navigation.navigate('ShopNotifBell')} > */}
          <Pressable onPress={() => navigation.navigate('ShopNotifBell')} >
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/cancel.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable>
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/wSearch.png')}
              resizeMode='contain'
            />
          </Pressable>
           <Pressable>
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/wSearch.png')}
              resizeMode='contain'
            />
          </Pressable>
          
        </View> : null
      }
      {title == 'socMedSearch' ? /*Social Media Search*/
        <View style={style.searchIconContainer}>
          <TextInput style={style.input} value={text}
            onChangeText={(value) => setText(value)}
            placeholder= "Search"/>
          <Pressable onPress={() => setText("")} >
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/cancel.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable>
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/wSearch.png')}
              resizeMode='contain'
            />
          </Pressable>
           <Pressable>
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/wSearch.png')}
              resizeMode='contain'
            />
          </Pressable>
          <Pressable>
            <Image
              style={style.whiteHeaderIcons}
              source={require('../../assets/drawerIcons/wSearch.png')}
              resizeMode='contain'
            />
          </Pressable>
        </View> : null
      }

      {/* Top right corner icons */}
      {title == 'Edit' && boolClose? /* rendering icons for plant care edit header */
        <View style={style.headerIconContainer}>
          <Pressable>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('PlantCarePlantCareTips')} >
            <Image
              style={style.plantCareHeaderIcons}
              source={require('../../assets/img/plantcare/icn_pencil-outline.png')}
              resizeMode='contain'
            />
            
          </Pressable>
        </View> : null
      }

      {/* Top right corner icons */}
      {title == 'Add plant care' && boolClose? /* rendering icons for plant care done header */
        <View style={style.headerIconContainer}>
          <Pressable>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('PlantCarePlantCareTips')}>
          <Text style={{ color: '#ffffff', fontFamily: 'poppins-semiBold', fontSize: 15, marginLeft: 14 }}>Done</Text>
          </Pressable>
        </View> : null
      }

      {/* Top right corner icons */}
      {title == 'Plant name' && boolClose? /* rendering icons for plant care save header */
        <View style={style.headerIconContainer}>
          <Pressable>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('PlantCarePlantCareTips')}>
            <Text style={{ color: '#ffffff', fontFamily: 'poppins-semiBold', fontSize: 15, marginLeft: 14 }}>Save</Text>
          </Pressable>
        </View> : null
      }

      {/* Top right corner icons */}
      {title == 'Album name' && boolBack? /* rendering icons for plant care album header */
        <View style={style.headerIconContainer}>
          <Pressable>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('PlantCarePlantCareTips')} >
            <Image
              style={style.plantCareHeaderIcons}
              source={require('../../assets/img/plantcare/icn_pencil-outline.png')}
              resizeMode='contain'
            />
            
          </Pressable>
        </View> : null
      }



    </View>
  );
} 


const style = StyleSheet.create({
  input: {
    borderColor: '#1D4123',
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 2,
    paddingStart: 10,
    paddingEnd: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    fontFamily: 'poppins-light',
    fontSize: 12,
    color: '#1D4123',
  },
  headerTitle: {
    color: 'white', 
    fontFamily: 'poppins-semiBold',
    fontSize: 18,
    paddingTop: 4
  },
  header: {
    flex: 1,
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    marginHorizontal: 0
  },
  headerIconContainer:{
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 32, 
    flexDirection: 'row',
    elevation: 0
  },
  headerIconContainer1:{
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 45, 
    flexDirection: 'row'
  },
  headerIconContainerCheckout:{
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 32, 
    flexDirection: 'row'
  },
  whiteHeaderIconContainer:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 92, 
    flexDirection: 'row'
  },
  searchIconContainer:{
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end', 
    alignItems: 'flex-end', 
    paddingRight: 12,
    paddingLeft: 100, 
    flexDirection: 'row'
  },
  headerIcons:{
    height: 24, 
    width: 24, 
    marginLeft: 16
  },
  plantCareHeaderIcons:{
    height: 27, 
    width: 27, 
    marginLeft: 14
  },
  whiteHeaderIcons:{
    height: 24, 
    width: 24, 
    marginLeft: 16,
    marginBottom: 4
  },
  dscheaderIcons:{
    height: 24, 
    width: 24, 
    marginLeft: 35,
    //marginRight: 20

  },
  dscwhiteHeaderIcons:{
    height: 24, 
    width: 24, 
    marginLeft: 20,
    marginBottom: 1,
    marginRight: 5
  },
});