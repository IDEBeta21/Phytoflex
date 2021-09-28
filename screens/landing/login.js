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
import SignUpScreen from '../../screens/landing/signup';


export default function LoginScreen({gotoForum, gotoSignUp, firebaseConfig, navigation}){
    
    const [userEmail, setuserEmail] = useState('');
    const [userPass, setUserPass] = useState('');

    function logInClick() {
        const auth = firebase.auth();
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
            .then((result) => {
                Alert.alert(result.message);
                console.log(result);
            })
            .catch((error) => {
                Alert.alert(error.message);
                console.log(error);
            });
    }

    const toSignUp = () =>{
        navigation.push('SignUpScreen');
    }

    return(
        <View style={styles.loginContainer}>
            {/* Display Header */}
            
            {/* Make the view scrollable */}
            {/* To detect virtual keyboard */}
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"}
            > */}
                
                {/* Logo area */}
                <View style={styles.bgPic}>
                    <Image
                        style = {styles.logo}
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                        }}
                    />
                </View>
                
                <View style={(styles.loginView)}> 
                    {/* Text Input Area */}
                    <Text style={styles.headerText}>Log In</Text>

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

                    <TouchableOpacity onPress={toSignUp}>
                        <View style={{color: 'white', justifyContent: 'center'}}>
                            <Text style={{color: 'white'}}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => logInClick()}>
                        <View style={styles.buttonArea}>
                            <Text style={{ color: 'white', fontSize: 20, }}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            {/* </KeyboardAvoidingView> */}
        </View>
    ); 

        

    // return (
    //     <NavigationContainer independent={true}>
    //         <Stack.Navigator>
    //             <Stack.Screen 
    //                 options={{headerShown: false}} 
    //                 name="Phytoflex" 
    //                 component={main} />  
    //             <Stack.Screen 
    //                     name="Sign Up" 
    //                     component={toSignUp} />
    //         </Stack.Navigator>
    //     </NavigationContainer>
        
    // );
}
    
const styles = StyleSheet.create({
    loginContainer:{
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        flex: 1
    },
    loginView: {
        backgroundColor: '#040',
        paddingHorizontal: 30, 
        paddingTop: 30, 
        borderTopLeftRadius: 35, 
        borderTopRightRadius: 35,
        flex: 1
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
        paddingBottom: 40
    },
    textbox: {
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 15,
    },
    label:{
        color: 'white',
        marginTop: 20,
        fontSize: 15,
    },
    logo: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 12
    },
    buttonArea: {
        marginTop: 40,
        padding: 10,
        
        backgroundColor: 'green',
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
    },
});