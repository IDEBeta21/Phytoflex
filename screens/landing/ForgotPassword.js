import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { Fontisto } from '@expo/vector-icons'

export default function ForgotPassword ({navigation}) {
    return (
      <View style={styles.mainContainer}>
        <Pressable onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 14, marginBottom: 8, fontFamily: 'poppins-light', color: '#1D4123', paddingTop: 48, alignSelf: 'flex-end'}}>
                Back
            </Text>
        </Pressable>
        <Text style={styles.title}>
            Forgot Password?</Text>

        <Text style={styles.description}>
            Please enter your email to recieve the instruction to reset your password</Text>

        <Text style={{fontSize: 16, marginBottom: 8, fontFamily: 'poppins-regular', color: '#1D4123'}}>
            Email Address
        </Text>

        <View style={styles.sectionStyle}>
            <Image
                source={require('../../assets/drawerIcons/email.png')} //Change your icon image here
                style={styles.ImageStyle}
            />
            <TextInput 
                style={styles.emailInput} 
                placeholder={"phytoflex@gmail.com"}
                selectionColor={'#CBDEAB'}>
            </TextInput>
        </View>

        <TouchableOpacity style={{height: 50, justifyContent: 'center'}}>
            <View style={{flex: 1, backgroundColor: '#639d04', alignItems: 'center', justifyContent: 'center', borderRadius: 25, }}>
                <Text style={{color: 'white', fontSize: 18, fontFamily: 'poppins-light', textAlign:'center'}}>
                    SEND ME NOW</Text>
            </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: 'poppins-semiBold',
        fontSize: 30,
        color: '#1D4123',
    },
    description: {
        fontSize: 13,
        textAlign: 'justify',
        color: '#1D4123',
        paddingVertical: 10,
        fontFamily: 'poppins-light'
    },
    emailInput:{
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'transparent',
        paddingHorizontal: 8,
        fontFamily: 'poppins-light',
        color: '#1D4123',
        height: 40,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#1D4123',
        height: 40,
        borderRadius: 5,
        marginBottom: 14
    },
    ImageStyle: {
        padding: 4,
        marginStart: 8,
        height: 24,
        width: 24,
        resizeMode: 'contain',
        alignItems: 'center',
}
})