import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Dimensions, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import firebase from 'firebase';
import React,  { useState, useEffect } from 'react';
import { Portal } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { globalStyles } from '../global/globalStyles';

import { NavigationContainer } from '@react-navigation/native';

import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList, PFCommentCard2,
  PFCard, PFPostsCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { ScrollView } from 'react-native-gesture-handler';


export default function CommentAnswerPage({navigation, route}) {

  const [ansTime, setCurrentTime] = useState('');
  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentTime( hours + ':' + min );
  }, []);

  //get user info
 const [refdata2, setrefdata2] = useState([]); // declaration 
 const [refnull2, setrefnull2] = useState(true);

 const [refdata, setrefdata] = useState([]); // declaration for getAnswers function
 const [refnull, setrefnull] = useState(true);
              //get user
                
              const getUsers = async() => {
                firebase.auth().onAuthStateChanged((user) => {
                  if (user) {
                    // User logged in already or has just logged in.
                    console.log(user.email);
                    firebase.firestore()
                    .collection('users').where("userEmail", "==", user.email).get().then((snapshot) => {
                      let users = snapshot.docs.map(doc => { 
                        const data2 = doc.data();
                        const id2 = doc.id;
                        return {id2, ...data2}
                      })
                      setrefdata2(users);
                      console.log(refdata2);
                      setrefnull2(false);
                    }).catch((err) => {
                      Alert.alert(err)
                    })
                  } else {
                    // User not logged in or has just logged out.
                  }
                });

              }
              //display userImage
              let userImage = "";
              let userfullName = "";
              let userName = "";
              let followers = "";
              let following = "";
              let badgePoints = "";
              refdata2.forEach((item) => {
              userImage = item.profilePic
              userfullName = item.fName + "  " + item.lName 
              userName = item.userName
              followers = item.followers
              following = item.following
              badgePoints = item.userBadgePoints

              })
              const [image, setimage] = useState(null)


              firebase.storage().ref().child(userImage).getDownloadURL().then((url) => {
              setimage(url);
              })
              //get comment
              const getAnswers = async() => {

                firebase.firestore().collection('Question').doc(route.params.qstID).collection('Answer').where("qstID", "==", route.params.qstID).get().then((snapshot) => {
                      
                
                  let users = snapshot.docs.map(doc => { 
                    const data2 = doc.data();
                    const id2 = doc.id;
                    return {id2, ...data2}
                  })
                  setrefdata(users);
                  console.log(refdata);
                  setrefnull(false);
                }).catch((err) => {
                  Alert.alert(err)
                }) 
              }
              const [ansContent, setansContent] = useState('');

              function addComment(){
                firebase.firestore().collection("Question").doc(route.params.qstID).collection('Answer').add({
                  userfullName: userfullName,
                  ansContent: ansContent,
                  ansTime: ansTime,
                  qstID: route.params.qstID,
                  profilePic: userImage,
                  ansID: "0",
                }).then((res) => {
                  console.log(res.id)
                
                })
                getAnswers();
              }


              useEffect(() => {
                getAnswers();
                getUsers();
            }, []);

 // const {width} = Dimensions.get('window');
            
  return (
    <View style={ styles.mainContainer }>
      <ScrollView>
        {/* <View>
          <ScrollView horizontal = {true}>
            <PFFlatList
              numColumns={5}
              noDataMessage='Loading...'
              data={SampleData.followFriend}
              renderItem={(item) => (
                <PFFriendCard
                  userPhoto={item.userPhoto}
                  name={item.name}
                  onPress={() => {navigation.navigate()
                  }}
                />
              )}
              keyExtractor={(item,index) => index}
            />
          </ScrollView>
        </View>   */}
        <View>
          <PFFlatList
            numColumns={1}
            noDataMessage='No Comment'
            data={refdata}
            renderItem={(item) => (
              <PFCommentCard2 
                userPhoto={item.profilePic}
                name={item.userfullName}
                comment={item.ansContent}
                time={item.ansTime}
                
                />
            )}
            keyExtractor={(item,index) => index}
          />
        </View>      
      </ScrollView>
      <View style={styles.addComment}>
        <View style={ styles.container }>
          <Image
            // FAB using TouchableOpacity with an image
            // For online image
            source={ {uri: image}}
            // For local image
            //source={require('./images/float-add-icon.png')}
            style={styles.userImage}
          />
          <View styles={{flexDirection: 'column'}}>
            <View style={ styles.container }>
              <TextInput style={styles.commentTxtBox} 
              placeholder={'Aa'}
              onChangeText = {(text) => setansContent(text)}
              multiline
              ></TextInput>
                <View style={{margin: 5, marginLeft: 15, }}>
                  <TouchableOpacity onPress={() => addComment()}>
                  <Image
                    // FAB using TouchableOpacity with an image
                    // For online image
                    source={ require('../../assets/drawerIcons/socmedIcons/send_icon.png')}
                    // For local image
                    //source={require('./images/float-add-icon.png')}
                    style={styles.commentReactSize}
                  />
                  </TouchableOpacity>
                
                </View>
            </View>
          </View>
        </View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  userImage: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 10,
    marginLeft: 5
  },
  createpostIcon: {
    height: 30,
    width: 30,
    marginLeft: 90,
    marginTop: 5
  },
  addComment: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 15,
    width: (Dimensions.get('window').width/1),
    backgroundColor: '#2a5123', //'#879c4d',//'#3f6921', 
    
    shadowColor: "black",
    shadowOffset: {
            width: 0,
           height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  textFormat: {
    paddingLeft: 10,
    paddingTop: 8,
    color: '#1d4123',
    fontFamily: 'poppins-semiBold'
  },
  userPhoto: {
    height: 40,
    width: 40,
    borderRadius: 100
  },
  userPhoto1: {
    height: 35,
    width: 35,
    borderRadius: 100,
    marginRight: 10
  },
  container: {
    flexDirection:'row',
    //maxHeight: 100,
    //position: 'absolute'
  },
  addbtn: {
    height: 30,
    width: 30,
    marginLeft: 5,
    borderRadius: 100
  },
  hr: {
    position: 'relative',
    top: 0,
    borderBottomColor: '#1D4123',
    borderBottomWidth: 1,
    // marginLeft: 20,
    // marginRight: 20,
    marginBottom: 10,
    marginTop: 5
  },
  image: {
    height:290,
    width: (Dimensions.get('window').width/2) * 1.6,
    borderRadius: 10
  },
  reactContainer: {
    flexDirection: 'row', 
    borderWidth: 1, 
    borderRadius: 30, 
    alignItems: 'center', 
    padding: 5,
    paddingLeft: 20,
    marginTop: 10
  },
  reactSize: {
    height: 30,
    width: (Dimensions.get('window').width) * 0.10,
    marginRight: 30,
    marginLeft: 20
  },
  commentReactSize: {
    height: 30,
    width: 30,
    //maxHeight: 100
  },
  commentSection: {
    marginTop: 10
  },
  commentTxtBox: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    width: 230,
    height: 40,
    fontFamily: 'poppins-light',
    color: '#1D4123',
    fontSize: 13,
    padding: 10,
  }
})
  