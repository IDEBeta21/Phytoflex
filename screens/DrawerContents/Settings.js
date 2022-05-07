import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image} from 'react-native'
import React from 'react'

export default function Settings({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Pressable
        style={styles.button} 
        onPress={() => navigation.navigate('DrawerNotifications')} >
      <View style={styles.container}>
        <Text style={styles.textLabel}>
            Notifications
        </Text>
            <Image
              source={require('../../assets/drawerIcons/discussionIcons/go.png')}
              style={styles.imageStyle}
            />
        </View>
      </Pressable>

      <Pressable
        style={styles.button} 
        onPress={() => navigation.navigate('DrawerFAQs')} >
      <View style={styles.container}>
        <Text style={styles.textLabel}>
            FAQs
        </Text>
            <Image
              source={require('../../assets/drawerIcons/discussionIcons/go.png')}
              style={styles.imageStyle}
            />
        </View>
      </Pressable>

      <Pressable
        style={styles.button} 
        onPress={() => navigation.navigate('DrawerTermsAndConditions')} >
      <View style={styles.container}>
        <Text style={styles.textLabel}>
            Terms And Conditions
        </Text>
            <Image
              source={require('../../assets/drawerIcons/discussionIcons/go.png')}
              style={styles.imageStyle}
            />
        </View>
      </Pressable>  

      <Pressable
        style={styles.button} 
        onPress={() => navigation.navigate('DrawerPrivacyPolicy')} >
      <View style={styles.container}>
        <Text style={styles.textLabel}>
            Privacy Policy
        </Text>
            <Image
              source={require('../../assets/drawerIcons/discussionIcons/go.png')}
              style={styles.imageStyle}
            />
        </View>
      </Pressable>  

      <Pressable
        style={styles.button} 
        onPress={() => navigation.navigate('DrawerAboutUs')} >
      <View style={styles.container}>
        <Text style={styles.textLabel}>
            About Us
        </Text>
            <Image
              source={require('../../assets/drawerIcons/discussionIcons/go.png')}
              style={styles.imageStyle}
            />
        </View>
      </Pressable>        
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyle: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end',

  },
  textLabel: {
    color: '#1D4123', 
    fontFamily: 'poppins-regular', 
    fontSize: 16,
    textAlign: 'left'
  },
  container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',

        marginTop: 20,
        padding: 8,
        paddingStart: 16,
        marginStart: 20,
        marginEnd: 20,
 
        borderRadius: 40,
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 5,

        borderWidth: 0.2,
        borderColor: '#1D4123',
        backgroundColor: '#f5f5f5',
  }, 
    button: {
        backgroundColor: 'transparent',
  },
})