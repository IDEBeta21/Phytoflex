import * as React from 'react';
import {useState}from 'react';
import { render } from 'react-dom';
import { 
    View, ScrollView, KeyboardAvoidingView, 
    Image, Text, TextInput, TouchableOpacity,  
    StyleSheet,
    Alert
} from 'react-native';

import firebase from 'firebase';
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

export default function SignUpScreen(){
    
    const def_usrname = "admin1"
    
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
    

    function signUpClick() {
        const auth = firebase.auth();
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
            .then((result) => {
                Alert.alert(result.message);
                console.log(result);
            })
            .catch((error) => {
                Alert.alert(error.message);
                console.log(error);
            });
    }
    
    return (
        <View style={styles.loginContainer}>
            {/* Display Header */}
            
            {/* Make the view scrollable */}
            {/* To detect virtual keyboard */}
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"}
            > */}
                
                {/* Logo area */}
                <View style={styles.logoView}>
                    <Image
                    style = {styles.logo}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                    }}
                    />
                    <Text style={styles.headerText}>For Plantitos </Text>
                    <Text style={styles.headerText}> and Plantitas</Text>
                </View>
                
                <View style={({paddingHorizontal: 30, flex: 1})}> 
                    {/* Text Input Area */}
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                    style={styles.textbox}
                    placeholder="i.e. NameIsDev21"
                    onChangeText = {(text) => setUserEmail(text)}
                    value={userEmail}
                    ></TextInput>
                    
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                    style={styles.textbox}
                    placeholder="Password"
                    onChangeText = {(text) => setUserPass(text)}
                    value={userPass}
                    ></TextInput>
                    
                    <TouchableOpacity onPress={() => signUpClick()}>
                        <View style={styles.buttonArea}>
                            <Text style={{ color: 'white', fontSize: 20, }}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            {/* </KeyboardAvoidingView> */}
        </View>
    )
    
}

const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25
    },
    headerText: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbox: {
        borderColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 15,
    },
    label:{
        marginVertical: 10,
        fontSize: 20,
    },
    logo: {
        width: 200,
        height: 200,
        backgroundColor: '#040',
        borderRadius: 12
    },
    buttonArea: {
        marginTop: 40,
        padding: 15,
        
        backgroundColor: 'green',
        borderRadius: 15,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
    },
});