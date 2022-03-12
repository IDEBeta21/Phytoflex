import { Text, StyleSheet, View, Image, Pressable } from 'react-native'
import React, { Component } from 'react'
import { PFText } from '../../PFText'
import { Button } from 'react-native-paper'
import Colors from '../../../utils/globalColors'

export const MessagaNotifItem = ({
  imageURL,
  senderName,
  messagePreview,
  timeRecieved,
  onProfilePress = () => {},
  onMessagePress = () => {},
  onDeletePress = () => {}
}) => {
  return (
    <View style={{...styles.notifItemContainer}}>
      <View>
        <Pressable onPress={onProfilePress}>
          <Image 
            source={{ uri: imageURL}}
            style={styles.imageContainer}  
          />
        </Pressable>
      </View>

      <View style={styles.messageContainer}>
        <Pressable onPress={onMessagePress}>
          <View>
            <PFText weight='semi-bold'>{senderName}</PFText>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <PFText weight='regular'>{messagePreview}</PFText>
              <PFText weight='regular' style={{marginLeft: 10}}>{timeRecieved}</PFText>
            </View>
          </View>
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <View style={{flex: 1}}>
          <Button 
            mode='text' 
            icon='delete-outline' 
            color={Colors.primary} 
            labelStyle={{fontSize: 25}}
            onPress={onDeletePress}
            >
          </Button>
        </View>
      </View>
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  notifItemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 3,
    paddingVertical: 3
  },
  imageContainer: {
    borderRadius: 25,
    height: 50, 
    width: 50,
    flex: 3
  },
  messageContainer: {
    justifyContent: 'center',
    marginLeft: 6,
    flex: 6
  },
  buttonContainer: {
    alignContent: 'flex-end',
    flex: 1
  }
})