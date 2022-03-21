import { Text, StyleSheet, View, Alert, Dimensions, Image,} from 'react-native';
import React from 'react';
import { globalStyles } from '../global/globalStyles';
import Colors from '../../utils/globalColors';
import { PFText } from '../../components';

export default function  ProductPage ({ route, navigation }){ 

    
   
    return (
      
      <View style={{...styles.cardContainer}}>
       <Image 
          source={{ uri: route.params.imageURL}}
          style={{
            height: 300,
            width: (Dimensions.get('window').width/1) * 1,   
          }}
        />
      <View style={{...styles.textShopContainer }}>
        <PFText weight='semi-bold' size = {23}>
        {route.params.itemName} </PFText>
        <View style={{...styles.categoryStyle}}>
        <PFText weight='semi-bold' size = {20}>
        {route.params.category} </PFText>
        </View>
        
        <View style={{flex: 1}}>
            <PFText color={Colors.secondary} weight='semi-bold' size = {15}>P {route.params.price}</PFText>
           <View style={{...styles.detailsContainer}}>
              <View style={{flex: 2, alignItems: 'center'}}>
                   <PFText weight='semi-bold'>Size: </PFText>
                   <PFText>{route.params.size}</PFText>
             </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <PFText weight='semi-bold'>Stock: </PFText>
               <PFText color={Colors.primary} weight='light'>{route.params.stock}</PFText>
                    </View>
            <View style={{alignItems:'flex-start'}}>
             <PFText weight='semi-bold'>Type: </PFText>
              <PFText weight='light'>{route.params.category} </PFText>
             </View>
           </View>
            
              </View>
              
      </View>
      </View>
    );

}

const styles = StyleSheet.create({
  itemContainer: {
    // marginLeft: 8, 
    // width: (Dimensions.get('window').width/2) * 0.93
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    marginVertical: 7
  },
  textContainer: {
    // justifyContent: 'center',
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 8,
  },
  cardContainer: {
    flex: 1,
    // justifyContent: 'center',
    borderColor: Colors.primary, 
    paddingRight: 20
  },
  textShopContainer: {
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 0,
    paddingLeft: 10,
    paddingTop: 10,
  },
  detailsContainer: {
    paddingTop: 20,
  },
  categoryStyle:{
    paddingTop: 1
  }

})