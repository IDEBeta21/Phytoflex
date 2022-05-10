import { Text, StyleSheet, View, Alert } from 'react-native'
import React, { Component, useState } from 'react'

import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFCard} from './../../components'
import SampleData from '../../utils/SampleData'

import firebase from 'firebase'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function FirebaseSample(){
  

  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);

  function addData(){
    firebase.firestore().collection('Comment').add({
      Comment: 'I like this comment',
      Date: '2022-02-22',
      PostId: 'Postid',
      UserId: 'userid'
    }).then((res) => {
      console.log(res.id)
    }).catch((err) => {
      Alert.alert(err)
    })
  }

  function onPostClick(id){

  }

  function updateData(){
    firebase.firestore().collection('Comment').doc('dTksrDWqjgI7s9KHsVGS').update({
      dataset: 'Array'
    })
  }

  const getData = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('Comment').get().then((res) => {
      let comment = res.docs.map(doc => { // saka gumamit ako ng map
        const data = doc.data();
        const id = doc.id;
        return {id, ...data}
      })
      setrefdata(comment);
      console.log(refdata);
      setrefnull(false);
    }).catch((err) => {
      Alert.alert(err)
    })

    // Get list of data inside collection
    // firebase.firestore().collection('Comment').get()
    // .then((res) => {
    //   res.forEach((data) => {
    //     // console.log(data.data())
    //   })
    // }).catch((err) => {
    //   Alert.alert(err)
    // })
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Text>FirebaseSample</Text>
        <PFText weight='semi-bold'>Hello world</PFText>

        <PFPrimaryButton 
          icon='eye' 
          title='Click Me' 
          onPress={() => getData()}
          roundness={7}/>

        <PFPrimaryButton 
          icon='eye' 
          title='Click Me' 
          onPress={() => updateData()}
          roundness={7}/>

        <View>
          
          {/* <PFFlatList
            numColumns={1}
            noDataMessage='No Plant item to post'
            data={SampleData.itemList}
            renderItem={(item) => (
              <PlantListItem 
                imageURL={item.imageURL}
                itemName={item.itemName}
                category={item.category}
                price={item.price}
                quantity={item.quantity}
                onPress={() => Alert.alert(item.itemName)}
              />
            )}
            keyExtractor={(item,index) => index}
          /> */}

          <PFFlatList
            numColumns={1}
            noDataMessage='No Plant item to post'
            data={refdata}
            renderItem={(item) => {
              return(
                <View>
                  <PFText title={item.Comment}>{item.Comment}</PFText>
                  <PFText>{item.Date}</PFText>
                </View>
              )
            }}
            keyExtractor={(item,index) => index}
          />

          

          
        </View>
      </ScrollView>
      
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
})