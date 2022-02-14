import * as React from 'react';
import {useState}from 'react';
import { render } from 'react-dom';
import { 
    View, ScrollView, KeyboardAvoidingView, 
    Image, TextInput, TouchableOpacity,  
    StyleSheet,
    Alert, Button, ImageBackground
} from 'react-native';

import firebase from 'firebase';
import SignUpScreen from '../../screens/landing/signup';
import MyTabs from '../global/bottomNav';

//  Galio Framework
import { Text } from 'galio-framework';


// // // firestore storage
// import { getStorage, ref } from "firebase/storage";

// // // Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = getStorage();

// // Create a child reference
// const imagesRef = ref(storage, 'assets/clipart879058.png');
// // imagesRef now points to 'images'

// import storage from '@react-native-firebase/storage';

// const reference = storage().ref('black-t-shirt-sm.png');




// const refe = firebase.storage().ref('gs://phytoflex-3f53f.appspot.com/assets/clipart879058.png');
// const url =  ref.getDownloadURL();


export default function LoginScreen({gotoForum, gotoSignUp, firebaseConfig, navigation}){
    
    const [userEmail, setuserEmail] = useState('');
    const [userPass, setUserPass] = useState('');



    
    function logInClick() {
        const auth = firebase.auth();
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
            .then((result) => {
                Alert.alert(result.message);
                console.log(result);
                toTabs();
            })
            .catch((error) => {
                Alert.alert(error.message);
                console.log(error);
            });

        // toTabs();
    }

    function gotoHome() {
        toTabs();
    }

    const toSignUp = () =>{
        navigation.push('SignUpScreen');
    }

    const toForum = () => {
        navigation.push('ForumScreen');
    }

    const toTabs = () => {
        navigation.push('MyTabs');
    }


    return(
        <ImageBackground source={require('../../assets/img/login/loginBackground.png')} style={styles.loginContainer}>
            {/* Display Header */}
            
            {/* Make the view scrollable */}
            {/* To detect virtual keyboard */}
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"}
            > */}
                
                {/* Logo area */}
                {/* <View style={styles.bgPic}>
                    {/* <Image
                        style = {styles.logo}
                        source={{
                            // uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                            // uri: 'assets/img/jspic.png',
                            uri: 'https://firebasestorage.googleapis.com/v0/b/phytoflex-3f53f.appspot.com/o/assets%2Fclipart879058.png?alt=media&token=11145a26-a723-49bf-b158-86ab34bf4505',
                        }}
                    /> 
                </View> */}
                
                <View style={(styles.loginView)}> 
                    {/* Text Input Area */}
                    <Text style={styles.headerText}>Welcome Back!</Text>

                    <Text style={styles.label}>YOUR EMAIL</Text>
                    <TextInput
                        style={styles.textbox}
                        placeholder="i.e. NameIsDev21"
                        onChangeText = {(text) => setuserEmail(text)}
                        value={userEmail}
                    ></TextInput>
                    
                    <Text style={styles.label}>PASSWORD</Text>
                    <TextInput
                        style={styles.textbox}
                        placeholder="Password"
                        onChangeText = {(text) => setUserPass(text)}
                        value={userPass}
                    ></TextInput>

                    <TouchableOpacity>
                        <View style={{color: 'white', justifyContent: 'center', alignItems: 'flex-end'}}>
                            <Text style={{color: 'white', fontFamily: 'poppins-regular'}}>Forgot Password?</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => gotoHome()}>
                        <View style={styles.guestButtonArea}>
                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'poppins-regular'}}>Continue as Guest</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => logInClick()}>
                        <View style={styles.buttonArea}>
                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'poppins-regular'}}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
                        <Text style={{color: 'white'}}>Dont have an Account Yet?</Text>
                        <TouchableOpacity onPress={toSignUp}>
                            <View style={{color: 'white'}}>
                                <Text style={{color: '#639D04', fontFamily: 'poppins-regular', paddingHorizontal: 10}}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                    
                    {/* <TouchableOpacity onPress={() => gotoHome()}>
                        <View style={{}}>
                            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'poppins-regular'}}>Home</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
                
            {/* </KeyboardAvoidingView> */}
        </ImageBackground>
    ); 

}
    
const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        fontFamily: 'poppins-regular'
    },
    loginView: {
        // backgroundColor: '#040',
        paddingHorizontal: 30, 
        paddingTop: 0, 
        // borderTopLeftRadius: 35, 
        // borderTopRightRadius: 35,
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgPic: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 25,
    },
    headerText: {
        fontSize: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        fontFamily: 'poppins-regular'
    },
    textbox: {
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 15,
        fontFamily: 'poppins-regular'
    },
    label:{
        color: 'white',
        marginTop: 20,
        fontSize: 15,
        fontFamily: 'poppins-regular'
    },
    logo: {
        width: 180,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12
    },
    buttonArea: {
        marginTop: 20,
        padding: 10,
        
        backgroundColor: '#639D04',
        borderRadius: 35,
        
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

        fontFamily: 'poppins-regular'
    },
    guestButtonArea: {
        marginTop: 20,
        padding: 10,
        
        // backgroundColor: 'green',
        borderRadius: 35,
        
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

        borderWidth: 2,
        borderColor: 'white',

        fontFamily: 'poppins-regular'
    }
});