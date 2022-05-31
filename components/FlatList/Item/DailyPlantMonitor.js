import React, {Component, useState, useEffect} from 'react';
import { Dimensions, Pressable, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
// import { PFText } from '../PFText';
// import Colors from '../../utils/globalColors';
import { PFText } from '../../PFText'
import Colors from '../../../utils/globalColors'

import firebase from 'firebase';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const DailyPlantMonitor = ({
  imageURL, 
  description, 
  onPress = () => {}, 
  onLongPress = () => {},
  style, 
  cardContentStyle}) => {
    
    const [image, setimage] = useState(null)

    // firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    //   setimage(url);
    // })

    return(
      <View style={{...styles.cardContainer, ...style}}>
          <Pressable onPress={() => onPress()} onLongPress={() => onLongPress()}>
          <Card style={{ flex: 1 }} >
            
            <Card.Cover 
              // source={{ uri: image }} 
              source={{ uri: imageURL }} 
              style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderTopLeftRadius: 5, borderTopRightRadius: 5, }}
            />
            
            <View 
              style={{ backgroundColor: '#ffffff', backgroundColor: 'rgba(225,225,225,0.7)',
              position: 'absolute', left: 0, right: 0, bottom: 0, height: 30, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 7, }}>
              
                <Text numberOfLines={1}
                  style={{ color: '#1D4123', fontFamily: 'poppins-regular', top: 3, fontWeight: '800' }}>{description}</Text>  
              
            </View>
            
          </Card>
        </Pressable>
      </View>
    );
  }

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: (Dimensions.get('window').width/2) * 0.04, 
    width: (Dimensions.get('window').width/2) * 0.94,
    marginBottom: 11,
  },


})