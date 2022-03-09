import * as React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { PFText } from '../../components';
import Colors from '../../utils/globalColors';

export const PlantListItem = ({
    CardList,
    imageURL, 
    itemName,
    category,
    price,
    quantity,
    onPress = () => {}}, 
    style, 
    
) => (
  
  <TouchableOpacity onPress={() => onPress()}>
    {
      CardList
      ? 
      <View style={{...styles.cardContainer, ...style}}>
        <Image 
          source={{ uri: imageURL}}
          style={{
            height: 140,
            width: (Dimensions.get('window').width/2) * 0.90,
            margin: 4,
            borderRadius: 8
          }}
        />

        <View style={{...styles.cardContent}}>
          <PFText weight='medium'>{itemName}</PFText>  
          <PFText weight='medium'>{category}</PFText>  
          <View>
            <PFText color={Colors.secondary} weight='medium'>P {price}</PFText>
          </View>
        </View>
      </View>

      : 
      <View style={{...styles.itemContainer, ...style}}>
        <Image style={{...styles.imageContainer}} source={{ uri: imageURL}}/>
        <View style={{...styles.textContainer}}>
            <PFText weight='semi-bold'>{itemName}</PFText>
            <PFText weight='semi-bold'>{category}</PFText>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={{flex: 11}}>
                <PFText color={Colors.secondary} weight='semi-bold'>P {price}</PFText>
              </View>
              <View style={{flex: 1}}>
                <PFText color={Colors.primary} weight='semi-bold'>x {quantity}</PFText>
              </View>
            </View>
        </View>
      </View>
    }
    
  </TouchableOpacity>
    
);

const styles = StyleSheet.create({
  itemContainer: {
    // marginLeft: 8, 
    // width: (Dimensions.get('window').width/2) * 0.93
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    marginVertical: 7
  },
  imageContainer: {
      width: 60, 
      height: 60, 
      borderRadius: 10
  },
  textContainer: {
    // justifyContent: 'center',
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingLeft: 8,
  },

  cardContainer: {
    flex: 1,
    marginLeft: 5, 
    // width: (Dimensions.get('window').width/2) * 0.90,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderRadius: 12,
  },
  cardContent: {
    padding: 12,
    paddingTop: 10,
    margin: 0
  },
})