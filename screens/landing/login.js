import * as React from 'react';
import {useState , useEffect}from 'react';
import { render } from 'react-dom';
import { 
    View, ScrollView, KeyboardAvoidingView, 
    Image, TextInput, TouchableOpacity,  
    StyleSheet,
    Alert, Button, ImageBackground, SafeAreaView, Dimensions, Keyboard, Pressable
} from 'react-native';

import firebase from 'firebase';
import SignUpScreen from '../../screens/landing/signup';
import MyTabs from '../global/bottomNav';

//  Galio Framework
import { Text } from 'galio-framework';
import Colors from '../../utils/globalColors';

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

    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });
    });



    return(

        // <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.loginContainer}>
            <ImageBackground 
                source={require('../../assets/drawerIcons/login.png')} 
                resizeMode= 'stretch' 
                style={styles.loginContainer}>
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
                    
                    <View style={(keyboardStatus == false ? styles.loginView : styles.loginViewKeyUp)}> 
                        {/* Text Input Area */}
                        <Pressable 
                            onPress={() => navigation.navigate('ComponentsSample')}
                            onLongPress={() => navigation.navigate('FirebaseSample')}>
                            <Text style={styles.headerText}>Welcome Back!</Text>
                        </Pressable>
                        

                        <Text style={styles.label}>YOUR EMAIL</Text>
                        <TextInput
                            style={styles.textbox}
                            placeholder="i.e. NameIsDev21"
                            onChangeText = {(text) => setuserEmail(text)}
                            value={userEmail}
                        ></TextInput>
                        
                        <Text style={styles.label}>PASSWORD</Text>
                        <TextInput
                            style={styles.pwtextbox}
                            placeholder="Password"
                            onChangeText = {(text) => setUserPass(text)}
                            value={userPass}
                        ></TextInput>



                        <TouchableOpacity>
                            <View style={{color: 'white', justifyContent: 'center', alignItems: 'flex-end', marginBottom: 10, marginEnd: 11}}>
                                <Text style={{color: 'white', fontFamily: 'poppins-light', fontSize: 12}}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => gotoHome()}>
                            <View style={styles.guestButtonArea}>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-regular'}}>CONTINUE AS A GUEST</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => logInClick()}>
                            <View style={styles.buttonArea}>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'center', marginBottom: 10}}>
                            <Text style={{color: 'white', fontFamily: 'poppins-light'}}>Don't have an account yet?</Text>
                            <TouchableOpacity onPress={toSignUp}>
                                <View style={{color: 'white', }}>
                                    <Text style={{color: '#639D04', fontFamily: 'poppins-semiBold', paddingHorizontal: 14}}>Sign Up</Text>
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

        // </KeyboardAvoidingView>
    ); 

}
    
const styles = StyleSheet.create({
    loginContainer:{
        flex: 1,
        // backgroundColor: Colors.primary,
        fontFamily: 'poppins-regular',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
    loginViewKeyUp: {
        backgroundColor: '#040',
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
        fontSize: 24,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 8,
        paddingBottom: 0,
        fontFamily: 'poppins-semiBold'
    },
    textbox: {
        borderColor: '#1D4123',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 0,
        padding: 10,
        fontSize: 16,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    label:{
        color: 'white',
        marginTop: 12,
        paddingStart: 8,
        paddingBottom: 4,
        fontSize: 14,
        fontFamily: 'poppins-regular'
    },
    pwtextbox: {
        borderColor: '#1D4123',
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 8,
        marginTop: 0,
        padding: 10,
        fontSize: 16,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    logo: {
        width: 180,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12
    },
    buttonArea: {
        marginTop: 16,
        padding: 10,
        marginStart: 14,
        marginEnd: 14,
        
        backgroundColor: '#639D04',
        borderRadius: 40,
        
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
    guestButtonArea: {
        marginTop: 32,
        padding: 8,
        marginStart: 14,
        marginEnd: 14,
        
        // backgroundColor: 'green',
        borderRadius: 40,
        
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