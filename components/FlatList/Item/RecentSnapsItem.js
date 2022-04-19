import React, {Component, useState, useEffect} from 'react';
import { Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
// import { PFText } from '../PFText';
// import Colors from '../../utils/globalColors';
import { PFText } from '../../PFText'
import Colors from '../../../utils/globalColors'

import firebase from 'firebase';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const RecentSnapsItem = ({
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
        <Card style={{flex: 1}} onPress={() => onPress()}>
          
          <Card.Cover 
            source={{ uri: image }} 
            resizeMode={'cover'}
            style={{ 
              height: 165, 
              
              borderTopLeftRadius: 7, 
              borderTopRightRadius: 7, 
              borderBottomLeftRadius: 7, 
              borderBottomRightRadius: 7,

            }}
          />
          {/* <Card.Content style={{...styles.cardContent, ...cardContentStyle}}> */}
          <View 
          // text in front of image
          style={{position: 'absolute', top: 0, left: 0, right: 0, height: 300, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 7,  }}>

            <Text  
            style={{color: '#ffffff', fontFamily: 'poppins-regular', 
            color: "white", 
            textShadowColor: 'black', 
            textShadowOffset: { width: -1, height: 0 },
            textShadowRadius: 10, 
           
            fontWeight: '800' }}
  
            // adjustsFontSizeToFit 
            numberOfLines={1} 

            // style={{paddingTop: 0, padding: 0, margin: 0, fontSize: 12, justifyContent: 'center', backgroundColor: '#ffffff'}}
            >{description}</Text>  
          {/* </Card.Content> */}

          </View>
          
        </Card>
      </View>
    );
  }

const styles = StyleSheet.create({


  cardContainer: {
    marginLeft: 8, 
    height:  80,
    width: 100,
    borderTopLeftRadius: 7, 
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 7, 
    borderBottomRightRadius: 7,
    // width: (Dimensions.get('window').width/2) * 0.93
  },

  cardContent: {


    // backgroundColor: '#ffffff',

    // paddingTop: 10,

    // fontSize:40,
    // height: 30,
    // borderWidth: 1, 

    // borderColor: Colors.primary, 

    // borderColor: '#AFAFAF',
    // borderBottomLeftRadius: 7, 
    // borderBottomRightRadius: 7,
    // padding: 0,
    // margin: 0,
    // paddingTop: 4,

    // position: 'absolute', top: 0, left: 0, right: 0, height: 300, alignItems: 'center', justifyContent: 'center' 
    
  },
})