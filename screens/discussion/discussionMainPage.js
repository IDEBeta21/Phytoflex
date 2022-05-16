import { Button, Text, View, Image, Alert} from 'react-native';
import React, { Component, useState, useEffect } from 'react';
import { globalStyles } from '../global/globalStyles';
import { FAB } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFTextInput, PFCard, PFCardForumPost2} from './../../components'
import firebase from 'firebase';

export default function DiscussionHomePage({navigation}) {
  const [refdata, setrefdata] = useState([]); // declaration
  const [refnull, setrefnull] = useState(true);

 let dateString = new Date(firebase.firestore.Timestamp.now().seconds*10000).toLocaleDateString()
 console.log(dateString)


  const getForumPost = async() => {

    // Get data inside document
    firebase.firestore()
    .collection('Question').get().then((res) => {
      let comment = res.docs.map(doc => { 
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
    
  }
  
useEffect(() => {

  getForumPost();

}, [])


  return (

    
    <View style={ globalStyles.FABContainer }>
      <View>
      <PFFlatList
            numColumns={1}
            noDataMessage='Loading...'
            data={refdata}
            renderItem={(item) => (
              <PFCardForumPost2
                imageURL={item.qstImage}
                userName={item.userName}
                date={item.qstDate}
                time={item.qstTime}
                userImage={item.profilePic}
                badgePoints={item.userBadgePoints}
                forumPost={item.qstContent}
                bloomQuantity={item.qstReactQuantity}
                liked={item.qstReact}
                onPressText={() => navigation.navigate('CommentAnswerPage', {qstID: item.qstID})}
                onPressImage = {() => Alert.alert('Modal dapat e')}
              />
            )}
            keyExtractor={(item,index) => index}
          />
      </View>
      <FAB 
          title = "Ask Community" 
          placement= "right" 
          size= "large" 
          upperCase
          icon= { <FontAwesome5 name="question-circle" size={24} color="white" /> }
          buttonStyle= {{ backgroundColor: "#639D04", borderRadius: 25 }}
          titleStyle= {{ fontFamily: 'poppins-semiBold', fontSize: 15, paddingLeft: 6, marginTop: 2 }} 
          onPress = {() => navigation.navigate('CreateQuestionPage')}
      />
    </View>
  );
}

