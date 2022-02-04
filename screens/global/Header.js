import { Button, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
// import * as React from 'react';

export default function Header({ title, navigation }) {
    return (
      <View style={style.header}>
        <Button title='lll' onPress={() => navigation.toggleDrawer()}/>
        <Text>{title}</Text>
      </View>
    );
} 

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
});