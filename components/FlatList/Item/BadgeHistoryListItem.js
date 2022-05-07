import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Colors from '../../../utils/globalColors'
import { PFText } from '../../PFText'

export const BadgeHistoryListItem = ({
  style,
  points,
  message
}) => {
  return (
    <View style={{...styles.notificationContainer, ...style}}>
      <View style={styles.bubble}>
        <PFText color={Colors.white} weight="medium" size={12}>+{points}</PFText>
      </View>
      <View style={styles.message}>
        <PFText weight='medium'>{message}</PFText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1, 
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 3
  },
  bubble: {
    backgroundColor: Colors.primary,
    width: 30,
    height: 30,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    marginLeft: 5,
    justifyContent: 'center'
  }
}) 