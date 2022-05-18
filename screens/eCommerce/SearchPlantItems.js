import { Button, Text, StyleSheet, View, Alert, TextInput, ActivityIndicator, Image, TouchableHighlight, Dimensions, TouchableOpacity} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFTextInput, PFCard, PFCardShop, PlantCategory, SearchPlant} from './../../components'
import firebase from 'firebase'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { render } from 'react-dom';
import { TabRouter } from 'react-navigation';
import SampleData from '../../utils/SampleData'



export default function SearchPlantItems({navigation, route})  {

    
  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);
//search plant items
const searchPlant = async(search) => {

    // Get data inside document
    firebase.firestore()
    .collection('PlantListItem').where('itemName', '>=', search).get().then((res) => {
      let comment = res.docs.map(doc => { 
        const data = doc.data();
        const id = doc.id;
        return {id, ...data}
      })
      setrefdata(comment);
      console.log(refdata);
      setrefnull(false);
    }).catch((err) => {
      Alert.alert(err)
    })
    searchPlant();
  }
  useEffect(() => {

    searchPlant();
 
}, [])
  return (
   
    
    <View style={styles.mainContainer} >
      <ScrollView showsVerticalScrollIndicator={false}>
      
      <View style={styles.searchBoxContainer}>
      <TextInput
            style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1, marginStart: 5, height: 25}}
            placeholder='Search for Plants'
            onChangeText={(search) => searchPlant(search)}
          />
      <View style={{flex: 1, alignItems: 'flex-end'}}>
      
      <Image
            style={styles.searchBoxIcon}
            source={require('../../assets/drawerIcons/plantCareIcons/search.png')}
            resizeMode='contain'
          />
          </View>
      </View>
      <View>
      <PFText weight = "semi-bold" size = {18} style={{marginTop: 5, marginLeft: 8}}>Categories</PFText>
      <PFFlatList
            numColumns={4}
            noDataMessage='No Plant item to post'
            data={SampleData.plantCategory}
            renderItem={(item) => (
             
              <PlantCategory
                imageURL={item.imageURL}
                categoryName={item.category}
                onPress={() => {navigation.navigate('ShopCategoryPage',{
                  category: item.category
                  })}}
              />
            )}
            keyExtractor={(item,index) => index}
          />
      
        </View>
              
        <View>
              
        <PFFlatList
            numColumns={2}
            noDataMessage='No Plant to Post'
            data={refdata}
            renderItem={(item) => (
              <PFCardShop
                imageURL={item.imageURL}
                itemName={item.itemName}
                category={item.categoryName}
                price={item.price}
                quantity={item.quantity}
                sold={item.sold}
                onPress={() => {navigation.navigate('ProductPage',  {itemName: item.itemName, imageURL: item.imageURL, category: item.categoryName, price: item.price, sold: item.sold, size: item.size, 
                  stock: item.quantity, plantDesc: item.plantDesc})
    
              }}
              />
            )}
            keyExtractor={(item,index) => index}
          />
        </View>
              
      </ScrollView>
      
      
    
    </View>
    
  
  )

  

  
}



const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  textContaine:{
    fontSize: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: '#000', height: 350 },
  content1: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonArea: {
    width: 180,
    padding: 10,
    paddingBottom: 5,
    marginStart: 27,
    marginBottom: 5,
    backgroundColor: '#639D04',
    borderRadius: 15,
    alignItems: 'center', 
    justifyContent: 'center',
    shadowColor: "black",
  },
  content2: {
    width: '100%',
    height: 100,
    marginTop: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: { color: '#fff' },
  buttons: {
    zIndex: 1,
    height: 15,
    marginTop: -25,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 3,
    width: 15,
    height: 15,
    opacity: 0.9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonSelected: {
    opacity: 1,
    color: 'white',
  },
  customSlide: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  customImage: {
    width: (Dimensions.get('window').width/1) * 1,
    height: 160,
  },
  bannerPadding: {
    paddingBottom: 8, 
    marginLeft: 10, 
    marginRight: 10,
  },
  searchBoxContainer: {
    borderColor: '#1D4123',
    width: '94%',
    borderWidth: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    color: '#1D4123',
    marginLeft: 10,
    marginRight: 10
    // flex:1,
  },
  searchBoxIcon: {
    height: 20,
    width: 20
  },
})


