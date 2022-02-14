import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
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

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

  const paperTheme = useTheme();

  // const { signOut, toggleTheme } = React.useContext(AuthContext);

  return(
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 15}}>
              <Avatar.Image 
                source={{
                  uri: 'https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg'
                }}
                size={50}
              />
              <View style={{marginLeft:15, flexDirection:'column'}}>
                  <Title style={styles.title}>Peter Flores</Title>
                  <Caption style={styles.caption}>@Peter_Flores</Caption>
              </View>
              <View style={{flex: 1, alignContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10}}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../assets/drawerIcons/menu.png')}
                /> 
              </View>

            </View>

            
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

                

          <Drawer.Section style={styles.drawerSection}>
              {/* <TouchableRipple onPress={() => {toggleTheme()}}> */}
              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/posts.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Post</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/swapHistory.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Swap History</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/threads.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Threads</Text>
                  </View>
              </TouchableRipple>
              
              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/activityLogs.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Activity Logs</Text>
                  </View>
            </TouchableRipple>
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/trackOrders.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Track your orders</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/selling.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Selling</Text>
                  </View>
              </TouchableRipple>

          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/settings.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Settings</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/rate.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>Love the app?</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/aboutUs.png')}
                    /> 
                    <Text style={{color: 'white', alignItems: 'center'}}>About</Text>
                  </View>
              </TouchableRipple>

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
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white'
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      // borderTopColor: '#f4f4f4',
      // borderTopWidth: 1
  },
  drawerItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 5,
    paddingLeft: 40,
    color: 'white'
  },
  tinyLogo: {
    marginRight: 5,
    width: 20,
    height: 20
  }
});









// import { View, StyleSheet } from 'react-native';
// import React, { Component } from 'react';

// import { 
//   Avatar, Title, Caption, Paragraph, 
//   Text, TouchableRipple, Switch  
// } from 'react-native-paper';

// import {
//   DrawerContentScrollView,
//   DrawerItem
// } from '@react-navigation/drawer';

// export function DrawerContent(props) {
//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView {...props}>
//         <View>
//           <Text style={{color: 'white'}}>Main Content</Text>
//         </View>
//       </DrawerContentScrollView>
//     </View>
//   );
// }


