import { Text, StyleSheet, View, Pressable } from 'react-native'
import * as React from 'react'
import Colors from '../../../utils/globalColors';
import { PFText } from '../../PFText';

export const AddressListItem = ({
    style, 
    defaultAddress = false, 
    city, 
    contactNumber, 
    address,
    onEditPress = () => {},
  }) => {
  return (
    <View style={{...styles.cardContainer, ...style}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 5}}>
          <PFText weight='semi-bold' size={15}>{city}</PFText>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-end'}}>
          {defaultAddress ? <PFText weight='italic' size={11}>Default</PFText> : <PFText weight='semi-bold'></PFText>}
        </View>
        <View style={{flex: 4, alignItems: 'flex-end'}}>
          <Pressable onPress={onEditPress}>
            <PFText weight='medium' >Edit</PFText>
          </Pressable>
        </View>
      </View>
      <View>
        <PFText weight='medium' style={{marginVertical: 3}} size={15}>{contactNumber}</PFText>
        <PFText weight='medium'>{address}</PFText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.lightGreen,
    margin: 8,
    padding: 10,
    borderRadius: 12
  }
})