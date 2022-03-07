import { Text, View, Pressable, Image, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class HeaderSearch extends Component {
  render() {
    return (
        <View style={style.whiteHeaderIconContainer}>
            <TextInput style={style.input} placeholder= "Search"/>
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
                source={require('../../assets/drawerIcons/shopIcons/cart.png')}
                resizeMode='contain'
            />
            </Pressable>
        </View> 
    )
  }
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
      backgroundColor: 'white'
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
      marginHorizontal: 0,
    },
    headerIconContainer:{
      flex: 1,
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
      paddingRight: 32, 
      flexDirection: 'row',
    },
    whiteHeaderIconContainer:{
    //   flex: 1,
    //   width: '100%',
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
    //   paddingRight: 92, 
      flexDirection: 'row',

    },
    searchIconContainer:{
      flex: 1,
      width: '100%',
      justifyContent: 'flex-end', 
      alignItems: 'flex-end', 
      paddingRight: 12, 
      flexDirection: 'row'
    },
    headerIcons:{
      height: 24, 
      width: 24, 
      marginLeft: 16,
    },
    plantCareHeaderIcons:{
      height: 27, 
      width: 27, 
      marginLeft: 14,
    },
    whiteHeaderIcons:{
      height: 24, 
      width: 24, 
      marginLeft: 10,
      marginBottom: 4
    },
    
  });