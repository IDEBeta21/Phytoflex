import * as React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { PFText } from '../../PFText';
// import Colors from '../../utils/globalColors';
import Colors from '../../../utils/globalColors';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const AccountListItem = ({
    imageURL, 
    accountName,
    onPress = () => {}}, 
    style, 
    cardContentStyle, 
  ) => (
  <TouchableOpacity onPress={() => onPress()}>
    <View style={{...styles.cardContainer, ...style}}>
      <Image style={{width: 30, height: 30, borderRadius: 15}} source={{ uri: imageURL}}/>
      <View style={{...styles.nameContainer}}>
        <PFText >{accountName}</PFText>
      </View>
    </View>
  </TouchableOpacity>
  
);

const styles = StyleSheet.create({
  cardContainer: {
    // marginLeft: 8, 
    // width: (Dimensions.get('window').width/2) * 0.93
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 3
  },
  nameContainer: {
    justifyContent: 'center',
    paddingLeft: 5,
  }
})