import React, {Component, useState, useEffect} from 'react';
import { Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
// import { PFText } from '../PFText';
// import Colors from '../../utils/globalColors';
import { PFText } from '../../PFText'
import Colors from '../../../utils/globalColors'

import firebase from 'firebase';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const MyGardenItem = ({
  imageURL, 
  description, 
  onPress = () => {}, 
  style, 
  cardContentStyle}) => {
    
    const [image, setimage] = useState(null)

    firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
      setimage(url);
    })

    return(
      <View style={{...styles.cardContainer, ...style}}>
        <Card stye={{flex: 1}} onPress={() => onPress()}>
          
          <Card.Cover 
            source={{ uri: image }} 
            style={{

            }}
          />
          <Card.Content style={{...styles.cardContent, ...cardContentStyle}}>
            <PFText>{description}</PFText>  
          </Card.Content>
          
        </Card>
      </View>
    );
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
})