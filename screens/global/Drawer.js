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
import firebase from 'firebase';
import { StackActions, NavigationActions, NavigationEvents } from 'react-navigation';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

  const paperTheme = useTheme();

  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({ routeName: 'Login' })],
  // });

  function signout(props) {
    firebase.auth().signOut;
    // props.navigation.dispatch(resetAction);
    // props.navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Login' }],
    // });
    props.navigation.goBack('Login');
  }

  // const { signOut, toggleTheme } = React.useContext(AuthContext);
 
  return(
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 16}}>
              <Avatar.Image 
                source={{
                  uri: 'https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg'
                }}
                size={55}
              />
              <View style={{flexDirection:'column', alignSelf: "flex-start", padding: 8}}>
                  <Title style={styles.title}>Peter Flores</Title>
                  <Caption style={styles.caption}>@peterflores</Caption>
              </View>
              {/* <View style={{flex: 1, alignContent: 'flex-end', alignItems: 'flex-end', paddingRight: 16}}>
                <Image
                  style={{height: 30, width: 30}}
                  source={require('../../assets/drawerIcons/menu.png')}
                /> 
              </View> */}

            </View>
           
            {/* <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View> */}
          </View>

          <Drawer.Section style={styles.drawerSection}>
              {/* <TouchableRipple onPress={() => {toggleTheme()}}> */}
              <TouchableRipple onPress={() => props.navigation.navigate('UserProfile')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/posts.png')}
                    /> 
                    <Text style={styles.textStyles}>My Profile</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress = {() => props.navigation.navigate('SocialMediaSearch')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/posts.png')}
                    /> 
                    <Text style={styles.textStyles}>Post</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate()}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/swapHistory.png')}
                    /> 
                    <Text style={styles.textStyles}>Swap History</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate()}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/threads.png')}
                    /> 
                    <Text style={styles.textStyles}>Threads</Text>
                  </View>
              </TouchableRipple>
              
              <TouchableRipple onPress={() => props.navigation.navigate()}>
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
              <TouchableRipple onPress={() => props.navigation.navigate('ShopHome')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/trackOrders.png')}
                    /> 
                    <Text style={styles.textStyles}>Track your orders</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate('ShopHome')}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/selling.png')}
                    /> 
                    <Text style={styles.textStyles}>Selling</Text>
                  </View>
              </TouchableRipple>

          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
              <TouchableRipple onPress={() => props.navigation.navigate('ShopHome')} >
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/settings.png')}
                    /> 
                    <Text style={styles.textStyles}>Settings</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate()}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/rate.png')}
                    /> 
                    <Text style={styles.textStyles}>Love the app?</Text>
                  </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => props.navigation.navigate()}>
                  <View style={styles.drawerItems}>
                    <Image
                      style={styles.tinyLogo}
                      source={require('../../assets/drawerIcons/aboutUs.png')}
                    /> 
                    <Text style={styles.textStyles}>About</Text>
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
        <TouchableRipple onPress={() => signout(props)}>
          <View style={styles.drawerItems}>
            <Image
              style={styles.tinyLogo}
              source={require('../../assets/drawerIcons/aboutUs.png')}
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
    paddingLeft: 20,
  },
  title: {
    marginTop: 3,
    fontFamily: 'poppins-semiBold', 
    fontSize: 18,
    lineHeight: 20,
    color: 'white',
  },
  caption: {
    lineHeight: 14,
    color: 'white', 
    fontFamily: 'poppins-light', 
    fontSize: 12,
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
    marginTop: 8,
    marginBottom: 8,
  },
  bottomDrawerSection: {
      marginBottom: 16,
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
    fontSize: 15,
  }
});