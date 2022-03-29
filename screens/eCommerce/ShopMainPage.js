import { Button, Text, StyleSheet, View, Alert, TextInput, ActivityIndicator, Image, TouchableHighlight, Dimensions} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFTextInput, PFCard, PFCardShop, PlantCategory, SearchPlant} from './../../components'
import SampleData from '../../utils/SampleData'
import ImageSlider from 'react-native-image-slider';


import firebase from 'firebase'

import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { render } from 'react-dom';

const images = [
      'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_1.jpg?alt=media&token=85e917d3-fb19-4772-a972-2b2adbecf717',
      'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_2.jpg?alt=media&token=2b7262d3-005e-40ef-a044-eee8f6529558',
      'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_3.jpg?alt=media&token=947ce232-6cac-4488-9b5c-83ad1f3b5aa4',
      'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/Shop%2FBanner_4.jpg?alt=media&token=a2b2f513-2c8e-4d2f-93d7-654f83755a3c',
]

export default function ShopHomePage({navigation})  {

  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);

  



    const getData = async() => {

      // Get data inside document
      firebase.firestore()
      .collection('PlantListItem').get().then((res) => {
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
      
    }
    
useEffect(() => {

    getData();
  
}, [])


  function toShopSearch() {
    navigation.navigate('ShopSearch');
    
  }
  

 
  return (
   
    
    
    <View style={styles.mainContainer} >

     
      <ScrollView> 
      <View style={styles.searchBoxContainer}>
      <TextInput
            style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1}}
            placeholder='Search for Plants'
          />
      <View style={{flex: 1, alignItems: 'flex-end'}}>
      <Image
            style={styles.searchBoxIcon}
            source={require('../../assets/drawerIcons/plantCareIcons/search.png')}
            resizeMode='contain'
          />
          </View>
      
      </View>

      <View style={styles.bannerPadding}>

      <ImageSlider
          loop
          autoPlayWithInterval={5000}
          images={images}
          onPress={({ index }) => alert(index)}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide,
                { backgroundColor: index % 2 === 0 ? '#F5FCFF' : '#F5FCFF' },
              ]}
            >
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </View>
      <View>
      <PFText weight = "semi-bold" size = {18}> Categories</PFText>
      
      <PFFlatList
            numColumns={4}
            noDataMessage='No Plant item to post'
            data={SampleData.plantCategory}
            renderItem={(item) => (
             
              <PlantCategory
                imageURL={item.imageURL}
                categoryName={item.category}
                onPress={() => Alert.alert(item.category)}
              />
            )}
            keyExtractor={(item,index) => index}
          />
      
        </View>
              
        <View>
              
        <PFText weight = "semi-bold" size = {18}>Discover Plants</PFText>
        <PFFlatList
            numColumns={2}
            noDataMessage='No Plant item to post'
            data={refdata}
            renderItem={(item) => (
              <PFCardShop
                imageURL={item.imageURL}
                itemName={item.itemName}
                category={item.categoryName}
                price={item.price}
                quantity={item.quantity}
                sold={item.sold}
                onPress={() => {navigation.navigate('ProductPage', {itemName: item.itemName, imageURL: item.imageURL, category: item.categoryName, price: item.price, sold: item.sold, size: item.size, 
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
    paddingHorizontal: 7,
    alignItems: 'center'
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
    justifyContent: 'center',
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
  },
  searchBoxContainer: {
    borderColor: '#1D4123',
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    color: '#1D4123'

    // flex:1,
  },
  searchBoxIcon: {
    height: 20,
    width: 20
  },
})

