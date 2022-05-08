import React,  { useState, useEffect } from 'react';
import {
    View, Text, StyleSheet, ScrollView, TextInput, 
    Image, TouchableOpacity, Pressable, Button, 
    Alert, Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function UserProfileDrawer({navigation}) {
  return (
    <View>
    <StatusBar style="auto" />
    <ScrollView>
      <View style ={{width: '100%', backgroundColor: '#1D4123', height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.item}>
              <TouchableOpacity>
                  <Image
                    source={require('../../../assets/drawerIcons/discussionIcons/sampleProfile.jpg')}
                    style={{ width:120, height:120, borderRadius:120, resizeMode:'cover'}}>
                  </Image>
              </TouchableOpacity>
          </View>
          <View>
            <Text style={{
                textAlign: 'left',
                color: 'white', 
                fontFamily: 'poppins-semiBold', 
                fontSize: 25,
                marginTop: 6,}}>
                Leila Alejandre
            </Text> 
            <Text style={{
                color: 'white', 
                fontFamily: 'poppins-light', 
                fontSize: 16 }}>
                @titoDusik
            </Text>
          <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'flex-start', marginBottom: 26}}>
              <TouchableOpacity style={style=styles.buttonArea}>
                <View style={{color: 'white', }}>
                  <Text style={{
                      color: '#1D4123', 
                      fontFamily: 'poppins-semiBold', 
                      paddingHorizontal: 16}}>
                      Edit Profile
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>          
    </ScrollView>

    <ScrollView>
      <View style ={{width: '100%', backgroundColor: '#1D4123', height: '100%'}}>
        <View style={styles.container1}>
          <View style={styles.item1}>
            <Text style={styles.textNum}>
                556
            </Text> 
            <Text style={styles.textCaption}>
                Followers
            </Text> 
          </View>
          <View style={styles.item1}>
            <Text style={styles.textNum}>
                1025
            </Text> 
            <Text style={styles.textCaption}>
                Following
            </Text> 
          </View>
          <View style={styles.item1}>
            <Text style={styles.textNum}>
                300
            </Text> 
            <Text style={styles.textCaption}>
                Following
            </Text> 
          </View>
        </View>
      </View>          
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 16,
    flexDirection: 'row',
    alignItems: 'flex-start' // if you want to fill rows left to right,
  },
  item: {
    width: '37%',// is 50% of container width
  },
  container1: {
    flex: 1,
    paddingBottom: 16,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
// if you want to fill rows left to right,
  },
  item1: {
    width: '33%',// is 50% of container width
  },
  textCaption: {
    textAlign: 'center',
    color: '#777F78', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 14,
    marginVertical: 3,
  },
  textNum: {
    textAlign: 'center',
    color: '#f2f2f2', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 20,
    marginVertical: 3,
  },
  containerInfo: {
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    width: '90%',
    padding: 8,
    paddingBottom: 8,
    borderRadius: 1,
    elevation: 1,
    marginTop: 16,
    marginBottom: 20,
  },
    sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'transparent',
    height: 40,
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'transparent',
  },
  imageStyle: {
    padding: 8,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  textInfo: {
    flex: 1 ,
    color: '#1D4123',
    marginTop: 4,
    paddingStart: 8,
    paddingBottom: 4,
    marginEnd: 8,
    fontSize: 14,
    fontFamily: 'poppins-regular',
    textAlign: 'right'
  },
  textLabel: {
    color: '#1D4123', 
    fontFamily: 'poppins-semiBold', 
    fontSize: 14
  },
  buttonArea: {
        
        backgroundColor: '#f2f2f2',
        borderRadius: 40,
        
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    },
  btnBtmSheet: {
        marginTop: 10,
        padding: 10,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 10,
        
        backgroundColor: '#f2f2f2',
        borderRadius: 40,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    },
  btnBtmSheetSave: {
        marginTop: 10,
        padding: 10,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 10,
        
        backgroundColor: 'transparent',
        borderRadius: 40,
        borderColor: '#639D04',
        borderWidth: 2,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "transparent",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    },
  btnBtmSheetCancel: {
        marginTop: 10,
        padding: 10,
        marginStart: 16,
        marginEnd: 16,
        marginBottom: 10,
        
        backgroundColor: '#8E1B1B',
        borderRadius: 40,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
    },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 160
  },
  modalView: {
    margin: 8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 50,
      height: 100
    },
    shadowOpacity: 0.50,
    shadowRadius: 4,
    elevation:10
  },
  btnModal: {
        marginTop: 16,
        paddingStart: 20,
        paddingEnd: 20,
        padding: 8,
        marginBottom: 8,
        
        backgroundColor: '#639D04',
        borderRadius: 25,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,

    }
})