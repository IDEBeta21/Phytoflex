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
  plantType,
  commonName, 
  onPress = () => {}, 
  style, 
  cardContentStyle}) => {
    
    const [image, setimage] = useState(null)

    firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
      setimage(url);
    })

    return(
      <View style={{...styles.cardContainer, ...style}}>
        <Card style={{ flex: 1 }} onPress={() => onPress()}>
          
          <Card.Cover 
            source={{ uri: image }} 
            style={{ 

            }}
          />
          <Card.Content style={{...styles.cardContent, ...cardContentStyle}}>
            <PFText style={{paddingTop: 0, padding: 0, margin: 0, fontSize: 12, justifyContent: 'center', backgroundColor: '#ffffff'}}>{plantType}</PFText> 
            <PFText style={{paddingTop: 0, padding: 0, margin: 0, fontSize: 15, justifyContent: 'center', backgroundColor: '#ffffff'}}>{commonName}</PFText>    
          </Card.Content>
          
        </Card>
      </View>
    );
  }

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: (Dimensions.get('window').width/2) * 0.04, 
    width: (Dimensions.get('window').width/2) * 0.94,
    marginBottom: 11,
  },

  cardContent: {
    paddingTop: 10,
    paddingBottom: 5,
    borderWidth: 1, 
    // height: 25,
    // borderColor: 'Colors.primary', 
    borderColor: '#AFAFAF', 
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5,
    backgroundColor: '#ffffff',
  
  },
})