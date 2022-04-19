import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Surface } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, } from 'react-native';
import {useState} from "react";

// import { Item } from 'react-native-paper/lib/typescript/components/List/List';


// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent1 = ({title, subtitle, src}) => {


  // const MyComponent1 = () => (

return (

  <Card style={styles.card}>
    <Card.Cover style={{borderTopLeftRadius: 7, borderTopRightRadius: 7}} 
     source={{uri:src}}
     />

      <Surface style={styles.surface}>

        <Card.Content style={styles.styleContent}>
          <Title style={{fontSize: 15, color: 'black'}}>{title}</Title>
          <Paragraph numberOfLines={2} style={{fontSize: 15, color: 'black'}}>{subtitle}</Paragraph>
        </Card.Content> 

       </Surface>
  </Card>

)
  }

export { MyComponent1 };

const styles = StyleSheet.create({

  
  card: {
    borderRadius: 7,
    marginHorizontal: 20,
    marginVertical: 12,

    height: 263,
    width: 327,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    alignContent: 'center',
    flexWrap: 'nowrap',
    marginLeft: 16,
    marginRight: 12,
    borderColor: 'white'
  },

  surface: {
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#dbdbdb',
    elevation: 4,
  },

  styleContent: {
    paddingVertical: 14,
    paddingHorizontal: 15,

  }


});