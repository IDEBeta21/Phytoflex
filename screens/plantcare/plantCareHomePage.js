import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../global/globalStyles';

// global import
import PFText from '../../components/PFText';
import Colors from '../../utils/globalColors';

import { DrawerContent } from '../global/Drawer';

export default function PlantCareHomePage({navigation}) {
  // Calling Plantcare search screen
  
  return (
    <View style={ styles.mainContainer }>
      <View style={styles.searchBoxContainer}>
        <Image
          style={styles.searchBoxIcon}
          source={require('../../assets/drawerIcons/plantCareIcons/search.png')}
          resizeMode='contain'
        />
        <TextInput
          style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1}}
          placeholder='Search'
        />
      </View>

      <PFText style={ styles.titleText } color={Colors.primary}>
        This is the Plant Care Main Page
      </PFText>
      
      <Text style={ styles.paragraphText }>
        Open up plantCareHomePage.js to start working on your app!
      </Text>

      {/* <Button onPress={() => toPlantCareSearch()} title="Plant Care Search"></Button> */}
      <Button 
        onPress={
          () => navigation.navigate('PlantCareSearch')
          // () => this.props.navigation.dispatch(navigation.openDrawer())
        } 
        title="Plant Care Search"></Button>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.fabContainer}>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ require('../../assets/drawerIcons/plantCareIcons/camera.png')}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.fabImage}
          />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 12
  },
  titleText: {
    fontFamily: 'poppins-semiBold',
    fontSize: 14,
    color: '#1D4123'
  },
  paragraphText: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#1D4123',
    marginVertical: 8,
    lineHeight: 20,
  },
  searchBoxContainer: {
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    // flex:1,
  },
  searchBoxIcon: {
    height: 20,
    width: 20
  },
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F7FA'
  },
  fabContainer: {
    position: 'absolute',
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 20,

    borderRadius: 35,
    // borderColor: 'black',
    // borderWidth: 5,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 5,
  },
  fabImage: {
    marginTop: 7,
    resizeMode: 'contain',
    width: 25,
    height: 25,
    //backgroundColor:'black'
  },
})