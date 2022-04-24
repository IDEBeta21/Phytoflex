import { Button, Text, View, Image, Alert} from 'react-native';
import React, { Component } from 'react';
import { globalStyles } from '../global/globalStyles';
import { FAB } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { PFPrimaryButton, PFFlatList, PlantListItem, PFText, PFTextInput, PFCard, PFCardForumPost} from './../../components'


export default function DiscussionHomePage({navigation}) {

  return (

    
    <View style={ globalStyles.FABContainer }>
      <View>
      <PFFlatList
            numColumns={1}
            noDataMessage='Loading...'
            data={SampleData.forumPost}
            renderItem={(item) => (
             
              <PFCardForumPost
                imageURL={item.imageURL}
                userName={item.userName}
                dateTime={item.dateTime}
                userImage={item.userImage}
                badgePoints={item.badgePoints}
                forumPost={item.forumPost}
                onPress={() => Alert.alert(item.userName)}
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
      />
    </View>
  );
}

