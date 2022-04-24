import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, CheckBox, IconButton, Colors} from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, } from 'react-native';
import { Text as XText } from 'react-native';
import { PFText } from '../../components';
import { useState} from 'react';

// const LeftContent = props => <Avatar.Image {...props} 
// color='white'
// backgroundColor='green'
// source={require('../../assets/drawerIcons/login.png')} 
// />


export const MyComponent = ({
  imageURL, 
  plantType,
  commonName,
  title,
  description, 
  onPress = () => {}, 
}) => {

  /*     // Avatar
    const LeftContent = props => <Avatar.Image {...props} 
    // icon="cat" 
    color='white'
    backgroundColor='#2C62C5'
    // source={require('../../assets/drawerIcons/login.png')} 
    source={src}

    /> */

    // const RightContent = props => <IconButton {...props} 
    // icon="check-circle-outline" 
    // // color={Colors.red500} 
    // color={'#639D04'}
    // size={25} 
    // onPress={() => alert('You need to...')}
    // // onPress={() => {}} 

    // />


  return(

    // <TouchableOpacity
    //     onPress={() => alert('Hello!')}>

      <Card style={styles.card} onPress={() => onPress()}>
    
        
          <Card.Title  
          style={{alignContent:'center', fontSize: 15, fontFamily: 'poppins-regular'}} 
          titleStyle={{fontSize: 15, fontFamily: 'poppins-regular'}}
          subtitleStyle={{fontSize: 12, fontFamily: 'poppins-regular' }}  

          title={title} 
          subtitle={description}
          // left={LeftContent}
          // right={RightContent} 
          left={(props) => <Avatar.Image {...props} source={{ uri: imageURL }} />}  
          right={(props) => <IconButton {...props} icon="check-circle-outline" color={'#639D04'} onPress={() => alert('You need to...')} />}
        />

      </Card>
    // </TouchableOpacity>
  );
}



const styles = StyleSheet.create({

  card: {
    // borderWidth: 1,
    // borderColor: 'black',
    marginBottom: 7,
    marginHorizontal: 9, 

    // // margin: 5, 
    // // borderRadius: 9,
    // backgroundColor: 'white', 
    // height: 104,  
    // paddingHorizontal: 5,
    elevation: 1, /* shadow effect */
    // borderRadius: 12,
    fontSize: 15, 
    fontFamily: 'poppins-regular', 
    flex: 1
    

  }, 

  cardTitle: {
    fontSize: 15, 
    fontFamily: 'poppins-regular', 
  },


 
})


