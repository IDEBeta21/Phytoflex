import * as React from 'react';
import { Dimensions } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { PFText } from '../PFText';
import Colors from '../../utils/globalColors';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const PFCard = ({
  imageURL, 
  description, 
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardContainer, ...style}}>
    <Card stye={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{

        }}
      />
      <Card.Content style={{...styles.cardContent, ...cardContentStyle}}>
        <PFText>{description}</PFText>  
      </Card.Content>
      
    </Card>
  </View>
);

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 8, 
    width: (Dimensions.get('window').width/2) * 0.93
  },
  cardContent: {
    paddingTop: 10,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10
  },
})