import React, {Component, useState, useEffect} from 'react';
import { Dimensions, Pressable } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Image } from 'react-native';
import { PFText } from '../PFText';
import Colors from '../../utils/globalColors';
import StarRating from 'react-native-star-rating-widget';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import firebase from 'firebase';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const PFCard = ({
  imageURL, 
  description, 
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{
          height: 140,
          width: (Dimensions.get('window').width/2) * 0.90,
          margin: 4,
          borderRadius: 8
        }}
      />
      <Card.Content style={{...styles.cardContent, ...cardContentStyle}}>
        <PFText>{description}</PFText>  
      </Card.Content>
      
    </Card>
  </View>
);

export const PFPostsCard = ({
  imageURL, 
  description, 
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardPostContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{
          height: 400,
          width: (Dimensions.get('window').width) * 0.90
        }}
      />
      <Card.Content style={{...styles.cardPostContent, ...cardContentStyle}}>
        <PFText weight='semi-bold'>{description}</PFText> 
        <PFText>Description</PFText> 
      </Card.Content>
      
    </Card>
  </View>
);

export const PFCardShop = ({imageURL, category, itemName, price, quantity, sold, onPress = () => {}}, 
style, cardContentStyle) => {

  const [image, setimage] = useState(null)
  //heart react 
  const [liked, setLiked] = useState(false);
  

    firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
      setimage(url);
    })

    return(


      <View style={{...styles.cardShopContainer, ...style}}>
    <Card stye={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={{ uri: image }} 
        style={{
          height: 140,
          width: (Dimensions.get('window').width/2) * 0.90,
          margin: 2,
          borderRadius: 8
        }}
      />

      <Card.Content style={{...styles.cardShopContent, ...cardContentStyle}}>
        <View style={{flexDirection:'row'}}>
        <PFText weight='semi-bold'>{itemName}</PFText>
        <View style={{...styles.heartReact, alignItems:'center'}}>
        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
       <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={17}
        color={liked ? "#1D4123" : "#1D4123"}
      />
    </Pressable>
        </View>
       
        </View>
        <View style={{...styles.textShopContainer}}>
           
            <PFText weight='semi-bold'>{category}</PFText>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <PFText color={Colors.secondary} weight='semi-bold'>P {price}</PFText>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <PFText color={Colors.primary} weight='light'>sold {sold}</PFText>
              </View>
            </View>
        </View>

      </Card.Content>
      
    </Card>
  </View>

    )
  
  

}
  
  


export const PFCardShopCategory = ({imageURL, category, onPress = () => {}}, style, cardContentStyle) => (
  <View style={{...styles.cardShopContainer, ...style}}>
    <Card stye={{flex: 1}} onPress={() => onPress()}>


      
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{
          height: 60,
          width: (Dimensions.get('window').width/4) * 0.90,
          margin: 2,
          borderRadius: 8
        }}
      />

      <Card.Content style={{...styles.cardShopContent, ...cardContentStyle}}>
        
        <View style={{...styles.textShopContainer}}>
            <PFText weight='semi-bold'>{category}</PFText>
        </View>

      </Card.Content>
      
    </Card>
  </View>
);

export const PFCardShopReviews = ({imageURL, review, date, customerName, rate, onPress = () => {}}, style, 
cardContentStyle) => {

  const [image, setimage] = useState(null)

  const [rating, setRating] = useState(0);

  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  return(

    <View style={{...styles.cardShopReview, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      <View style= {{flexDirection:'row'}}>
      <Image 
        source={{ uri: image}}
        style={{
          marginTop: 8,
          height: 50,
          width: (Dimensions.get('window').width/1) * 0.15,
          borderRadius: 100
        }}
      />

      <Card.Content style={{...styles.cardShopReviewContent}}>
              <View style={{flexDirection:'column'}}>
              <PFText weight='semi-bold' size = {18}>{customerName}</PFText>
              <PFText weight='light'>{date}</PFText>
              <StarRating
              rating={rate}
              onChange={setRating}
              starSize={20}
               />
               </View>
      </Card.Content>
       

            </View>
      
               <View style={{alignItems:'flex-start'}}>
               <PFText weight='light'>{review}</PFText>
               </View>
    </Card>
  </View>

  )
}

export const PFCardProduct = ({imageURL, onPress = () =>{}}, style) => {
  const [image, setimage] = useState(null)

  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  return(
      <Image 
        source={{ uri: image}}
        style={{
          height: 300,
          width: (Dimensions.get('window').width/1) * 1,
          
        }}
      />

  )
}
  
 
 


const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 8, 
    width: (Dimensions.get('window').width/2) * 0.93
  },
  cardContent: {
    paddingTop: 10,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10
  },

  cardPostContainer: {
    width: (Dimensions.get('window').width) * 0.90,
    marginBottom: 15,
    marginTop: 10
  },
  cardPostContent: {
    paddingTop: 10,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10
  },
  
  cardShopContainer: {
    
    marginBottom: 5,
    marginLeft: 4,
    width: (Dimensions.get('window').width/2) * 0.93,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderRadius: 7
    
  },
  cardShopContent: {
    marginLeft: 0,
    flex: 1,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 6,
    paddingLeft: 7,
    margin: 0
  },
  textShopContainer: {
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 0,
  },
  cardShopReview:{
    width: 600,
    backgroundColor:'#639D04'
  },
  cardShopReviewContent:{
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingLeft: 2
  },
  heartReact: {
    paddingLeft: 0,
    marginLeft: 1,
    
  }
 
})