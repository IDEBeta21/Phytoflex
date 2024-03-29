import React,  { Component, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import firebase from 'firebase';
// import { StackActions, NavigationActions, NavigationEvents } from 'react-navigation';
import { StackActions, NavigationActions, NavigationEvents } from '@react-navigation/native';
import { set } from 'react-native-reanimated';



// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

  const paperTheme = useTheme();

  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({ routeName: 'Login' })],
  // });

  async function signout(props) {
    await firebase.auth().signOut().then(
      console.log('User Signed out')
    );
    // props.navigation.dispatch(resetAction);
    // props.navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Login' }],
    // });
    // props.navigation.goBack('Login');

    // const backAction = NavigationActions.back({
    //   key: 'Login',
    // });
    // props.navigation.dispatch(backAction);
    props.navigation.dispatch(StackActions.popToTop());
  }

  // const { signOut, toggleTheme } = React.useContext(AuthContext);

      //get user info
      const [refdata2, setrefdata2] = useState([]); // declaration 
      const [refnull2, setrefnull2] = useState(true);
      

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
      refdata2.forEach((item) => {
        userImage = item.profilePic
        userfullName = item.fName + " " + item.lName 
      })
      const [image, setimage] = useState(null)
  
  
      firebase.storage().ref().child(userImage).getDownloadURL().then((url) => {
        setimage(url);
      })

    let emailVerified = "";
    const [userEmail, setuserEmail] = useState('');
      //emailVerification
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          if (user.emailVerified === false) {
           //email not verified
            setuserEmail("Please verify your email address")
           
          } else {
            // successful login 
            setuserEmail("")
    
          }
        } else {
         
        }
      });

        useEffect(() => {
         
          getUsers();
          }, [])
 
  return(
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
        <Drawer.Section style={styles.drawerSection}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 16, paddingBottom: 10, alignSelf:'center'}}>
            <TouchableOpacity>
              <Avatar.Image 
                source={{
                  uri: image
                }} size={90}
              />
            </TouchableOpacity>
            </View>
                <View style={{flexDirection:'column', alignSelf: "center", padding: 8, paddingLeft: 10}}>
                      <Caption style={styles.caption}>Hello!</Caption>
                      <Title style={styles.title}>{userfullName}</Title>
                      <Caption style={styles.emailVerification}>{userEmail}</Caption>
                </View>
          </View>
              
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
              {/* <TouchableRipple onPress={() => {toggleTheme()}}> */}
              <TouchableRipple onPress={() => props.navigation.navigate('DrawerUserProfile')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/profile.png')}
                    /> 
                    <Text style={styles.textStyles}>My Profile</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate('DrawerActivityLogs')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/activityLogs.png')}
                    /> 
                    <Text style={styles.textStyles}>Activity Logs</Text>
                  </View>
            </TouchableRipple>
              
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
              <TouchableRipple onPress = {() => props.navigation.navigate('DrawerPostScreen')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/posts.png')}
                    /> 
                    <Text style={styles.textStyles}>Post</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate('DrawerThread')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/threads.png')}
                    /> 
                    <Text style={styles.textStyles}>Threads</Text>
                  </View>
              </TouchableRipple>
              
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
              <TouchableRipple onPress={() => props.navigation.navigate('DrawerTrackHistory')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/trackOrders.png')}
                    /> 
                    <Text style={styles.textStyles}>Track your orders</Text>
                  </View>
              </TouchableRipple>

          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
              <TouchableRipple onPress={() => props.navigation.navigate('DrawerSettings')} >
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/settings.png')}
                    /> 
                    <Text style={styles.textStyles}>Settings</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate('DrawerRateUs')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/rate.png')}
                    /> 
                    <Text style={styles.textStyles}>Rate Us</Text>
                  </View>
              </TouchableRipple>

          </Drawer.Section>

          <Drawer.Section style={styles.upgradeSection}>
              {/* <TouchableRipple onPress={() => {toggleTheme()}}> */}
              <Pressable onPress={() => props.navigation.navigate('DrawerUpgradeScreen')}>
                  <View style={styles.upgradeItem}>
                    <Image
                      style={styles.upgrade}
                      source={require('../../assets/drawerIcons/upgradeOption.png')}
                    /> 
                  </View>
              </Pressable>
          </Drawer.Section>

        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
      {/* <DrawerItem 
          icon={({color, size}) => (
              <Icon 
              name="exit-to-app" 
              color={color}
              size={size}
              />
          )}
          label="Sign Out"
          onPress={() => {signOut()}}
      /> */}
        <TouchableRipple onPress={() => signout(props)}>
          <View style={styles.drawerItems}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/drawerIcons/logout.png')}
            /> 
            <Text style={styles.textStyles}>Logout</Text>
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 0,
  },
  title: {
    marginTop: 10,
    fontFamily: 'poppins-semiBold', 
    fontSize: 18,
    lineHeight: 20,
    color: 'white',
    alignSelf: 'center'
  },
  caption: {
    lineHeight: 14,
    color: 'white', 
    fontFamily: 'poppins-light', 
    fontSize: 12,
    alignSelf: 'center'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 8,
    marginBottom: 8,
  },
  bottomDrawerSection: {
      marginTop: 8,
      marginBottom: 0,
      // borderTopColor: '#f4f4f4',
      // borderTopWidth: 1
  },
  drawerItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    paddingLeft: 45,
    color: 'white'
  },
  tinyLogo: {
    marginRight: 16,
    width: 24,
    height: 24
  },
  textStyles: {
    color: 'white', 
    alignItems: 'center',
    fontFamily: 'poppins-regular', 
    fontSize: 14,
  },
    upgrade: {
    paddingBottom: 8,
    width: 280,
    height: 145,
    resizeMode: 'contain',
    alignSelf: 'center',
    flexDirection: 'row',
  },
    upgradeSection: {
    marginTop: 0,
    marginBottom: 0,
  },
  upgradeItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
    paddingLeft: 12,
  },
  emailVerification: {
    lineHeight: 14,
    color: 'orange', 
    fontFamily: 'poppins-light', 
    fontSize: 12,
    alignSelf: 'center'
  },
});