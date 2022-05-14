import * as React from 'react';
import {useState}from 'react';
import { render } from 'react-dom';
import { StatusBar } from 'expo-status-bar';
import { 
  View, ScrollView, KeyboardAvoidingView, 
  Image, Text, TextInput, TouchableOpacity,  
  StyleSheet,
  Alert, ImageBackground, RecyclerViewBackedScrollViewBase
} from 'react-native';

import Onboarding from './Onboarding';

import firebase from 'firebase';
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { computeOutShape } from '@tensorflow/tfjs-core/dist/ops/concat_util';
import Colors from '../../utils/globalColors';


export default function SignUpScreen({navigation}){
  
  const def_usrname = "admin1"
  
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const [userConfirmPass, setuserConfirmPass] = useState('')

  // Validation hooks
  const [emaiValidationText, setemaiValidationText] = useState('')
  const [passwordValidationText, setpasswordValidationText] = useState('')
  const [passwordConfirmValidationText, setpasswordConfirmValidationText] = useState('')

  const [emailValidationStatus, setemailValidationStatus] = useState(false)
  const [passwordValidationStatus, setpasswordValidationStatus] = useState(false)

  const [passwordStrength, setpasswordStrength] = useState('')

  const [passwordMatched, setpasswordMatched] = useState(false)
  
  
  function signUpClick() {
    const auth = firebase.auth();
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .then((result) => {
      Alert.alert(result.message);
      firebase.firestore().collection("users")
      .doc(firebase.auth().currentUser.uid)
      .set({
        fName,
        lName,
        userName,
        userEmail,
        userPass, 
        profilePic: 'assets/icon.png',
        followers: 0,
        following: 0, 
        userBadgePoints: 0,

      })
      console.log(result);
    })
    .catch((error) => {
      Alert.alert(error.message);
      console.log(error);
    });
    console.log(userEmail)
  }
  
    function gotoOnboarding() {
        toOnboarding();
    }
      
    const toOnboarding = () => {
        navigation.push('Onboarding');
    }

    // Check Email Address
    function checkEmail(text){
      setUserEmail(text)
      if (text == ''){
        return
      }

      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text))
      {
        setemaiValidationText('Valid Email Address')
        setemailValidationStatus(true)
        return
      }
        // setemaiValidationText("You have entered an invalid email address!")
        setemaiValidationText("Please enter your email address in format. yourname@example.com")
        setemailValidationStatus(false)
        return
    }

    // Check Password
    function checkPassword(text){
      setUserPass(text)

      if(text == ''){
        setpasswordValidationText('')
        if(String(text) == String(userConfirmPass)){
          setpasswordConfirmValidationText('Password Matched')
          setpasswordMatched(true)
          // return
        }else{
          setpasswordConfirmValidationText('Password Did not Matched')
          setpasswordMatched(false)
        }
        return
      }

      if(String(text) == String(userConfirmPass)){
        setpasswordConfirmValidationText('Password Matched')
        setpasswordMatched(true)
        // return
      }else{
        setpasswordConfirmValidationText('Password Did not Matched')
        setpasswordMatched(false)
      }
      
      var pattern = new RegExp(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$' 
      );
      
      // test if password has lower case and upper case letters
      if(new RegExp('^(?=.*[a-z])(?=.*[A-Z]).+$').test(text)){
        // test if password has atleast 1 numerical character
        if(new RegExp('^(?=.*\\d).+$').test(text)){
          //test if password has atleast 8 characters
          if(String(text).length >= 8){
            // console.log('Your Password is secure')
            setpasswordValidationText('Your Password is secure')
            setpasswordValidationStatus(true)
            setpasswordStrength('FAIR')
            if(new RegExp('^(?=.*[-+_!@#$%^&*., ?]).+$').test(text)){
              setpasswordStrength('GOOD')
              if(String(text).length >= 10){
                setpasswordStrength('STRONG')
                return
              }
              return
            }
            return
          }
          // console.log('MUST constain atleast 8 character')
          setpasswordValidationText('Please enter at least 8 characters')
          setpasswordValidationStatus(false)
          setpasswordStrength('WEAK')
          return
        }
        // console.log("MUST contain atleast one numerical value (0-9)")
        setpasswordValidationText("Please include at least one number")
        setpasswordValidationStatus(false)
        setpasswordStrength('WEAK')
        return
      }
      // console.log("MUST contain both uppercase and lower case letters ")
      setpasswordValidationText("Please inlude both uppercase and lower case letters ")
      setpasswordValidationStatus(false)
      setpasswordStrength('WEAK')
      return

    }

    function checkPasswordConfirmation(text){
      setuserConfirmPass(text)

      if(String(text) == String(userPass)){
        setpasswordConfirmValidationText('Password Matched')
        setpasswordMatched(true)
        return
      }
      setpasswordConfirmValidationText('Password Did not Matched')
      setpasswordMatched(false)
      return
    }

  return (
    <ImageBackground source={require('../../assets/drawerIcons/register.png')} resizeMode= "cover" style={styles.loginContainer}>
      <ScrollView>
        <StatusBar style="auto" />
        {/* Display Header */}
        
        {/* Make the view scrollable */}
        {/* To detect virtual keyboard */}
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "android" ? "padding" : "height"}
        > */}
        
        {/* Logo area */}
        {/* <View style={styles.logoView}>
        <Image
        style = {styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        }}
        />
        <Text style={styles.headerText}>For Plantitos </Text>
        <Text style={styles.headerText}> and Plantitas</Text>
      </View> */}
        <TouchableOpacity onPress={() => gotoOnboarding()} >
            <View style={{color: 'white', alignItems: 'flex-end', flex: 1, marginEnd: 8, paddingTop: 54}}>
                <Text style={{color: 'white', fontFamily: 'poppins-regular', paddingHorizontal: 14, fontSize: 16}}>CANCEL</Text>
            </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', paddingTop: 24, paddingBottom: 2, alignItems: 'flex-end', flexDirection: 'column', marginEnd: 48}}>
            <Text style={{color: 'white', fontFamily: 'poppins-semiBold', fontSize: 20}}>Join the Community</Text>
        </View>          
              
      <View style={{paddingHorizontal: 32}}> 
        {/* Text Input Area */}
        <Text style={styles.label}>FIRST NAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your first name"
            onChangeText = {(text) => setFName(text)}
            value={fName}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>
        
        <Text style={styles.label}>LAST NAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your last name"
            onChangeText = {(text) => setLName(text)}
            value={lName}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>
        
        <Text style={styles.label}>USERNAME</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your username "
            onChangeText = {(text) => setUserName(text)}
            value={userName}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>

        <View style={{alignContent: 'center'}}>
          <Image
          style={{
            paddingTop: 32,
            resizeMode: 'contain', 
            alignSelf: 'center',
            width: '95%',
          }}
          source={require('../../assets/sectionLine.png')}>
          </Image>
        </View>
        
        <Text style={styles.label1}>YOUR EMAIL</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your email address"
            onChangeText = {(text) => checkEmail(text)}
            value={userEmail}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>

        {/* <Text style={styles.labelError}>{emaiValidationText}</Text>       */}
        {!userEmail == '' ? <Text style={(emailValidationStatus) ?  styles.labelCorrect : styles.labelError}>{emaiValidationText}</Text> : null}      
          
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 4}}>
              <Text style={styles.label}>PASSWORD</Text>
            </View>
            {!userPass == '' ? 
              <View style={{flex: 8, marginRight: 10, alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 8, alignItems: 'flex-end'}}>
                    <Text style={styles.labelCorrect}>Password Strength: </Text>
                  </View>
                  <View style={{flex: 4, alignItems: 'flex-end'}}>
                    {passwordStrength == 'WEAK' ? <Text style={{...styles.labelCorrect, color: 'red'}}>{passwordStrength}</Text> : null}
                    {passwordStrength == 'FAIR' ? <Text style={{...styles.labelCorrect, color: 'orange'}}>{passwordStrength}</Text> : null}
                    {passwordStrength == 'GOOD' ? <Text style={{...styles.labelCorrect, color: 'yellow'}}>{passwordStrength}</Text> : null}
                    {passwordStrength == 'STRONG' ? <Text style={{...styles.labelCorrect}}>{passwordStrength}</Text> : null}
                  </View>
                </View>
              </View>
              :
              null
            }
            
          </View>
        
          <TextInput
            style={styles.textbox}
            placeholder="Enter your password"
            onChangeText = {(text) => checkPassword(text)}
            value={userPass}
            secureTextEntry={true}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>

          {/* <Text style={styles.labelError}>MUST contain at least one uppercase letter</Text> */}
          
          <Text style={(passwordValidationStatus) ? styles.labelCorrect : styles.labelError }>{passwordValidationText}</Text>
           
          

          <Text style={styles.label}> CONFIRM PASSWORD</Text>
          <TextInput
            style={styles.textbox}
            placeholder="Re-enter your password"
            onChangeText = {(text) => checkPasswordConfirmation(text)}
            value={userConfirmPass}
            selectionColor={'#CBDEAB'}
          >
        </TextInput>
        
        {!userConfirmPass == '' ? <Text style={(passwordMatched) ? styles.labelCorrect : styles.labelError}>{passwordConfirmValidationText}</Text> : null}

        <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'center', marginBottom: 0}}>
            <Text style={{color: 'white', fontFamily: 'poppins-light', fontSize: 8.5}}>By signing up you agree to our </Text>
            <Pressable>
            <Text style={{color: 'white', fontFamily: 'poppins-regular', fontSize: 8.5, color: '#639D04'}}>Terms and Conditions </Text>
            </Pressable>
            <Text style={{color: 'white', fontFamily: 'poppins-light', fontSize: 8.5}}>and </Text>
            <Pressable>
            <Text style={{color: 'white', fontFamily: 'poppins-regular', fontSize: 8.5, color: '#639D04'}}>Privacy Policy</Text>              
            </Pressable>
        </View>        
        
        <TouchableOpacity onPress={() => signUpClick()}>
          <View style={styles.buttonArea}>
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold' }}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
      </View>
                    
      {/* <TouchableOpacity>
        <View style={styles.guestButtonArea}>
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-regular'}}>CONTINUE AS A GUEST</Text>
            </View>
      </TouchableOpacity> */}

            <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center', marginBottom: 10}}>
                <Text style={{color: 'white', fontFamily: 'poppins-light'}}>Already signed up?</Text>
                    <TouchableOpacity >
                      <View style={{color: 'white', }}>
                          <Text style={{color: '#639D04', fontFamily: 'poppins-semiBold', paddingHorizontal: 14}}>Log In</Text>
                      </View>
                    </TouchableOpacity>
            </View>      
      
      {/* </KeyboardAvoidingView> */}
    </ScrollView>
  </ImageBackground>
  )
}

const styles = StyleSheet.create({
  loginContainer:{
        flex: 1,
        fontFamily: 'poppins-regular',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    txtPolicy: {
      color: 'white', 
      fontFamily: 'poppins-light', 
      fontSize: 8.5
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
        fontSize: 24,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingStart: 8,
        paddingBottom: 0,
        fontFamily: 'poppins-semiBold'
    },
    textbox: {
        backgroundColor: '#f2f2f2',
        color: '#1D4123',
        borderRadius: 10,
        marginBottom: 0,
        padding: 4,
        paddingStart: 8,
        fontSize: 14,
        fontFamily: 'poppins-light',
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center'
    },
    label1:{
        color: 'white',
        paddingStart: 8,
        paddingBottom: 5,
        fontSize: 12,
        fontFamily: 'poppins-regular'
    },
    label:{
        color: 'white',
        marginTop:6,
        paddingStart: 8,
        paddingBottom: 5,
        fontSize: 12,
        fontFamily: 'poppins-regular'
    },
    labelError:{
        color: 'red',
        marginTop:6,
        paddingStart: 8,
        fontSize: 12,
        fontFamily: 'poppins-semiBold'
    },
    labelCorrect:{
        color: '#639d04',
        marginTop:6,
        paddingStart: 8,
        fontSize: 12,
        fontFamily: 'poppins-semiBold'
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
        marginTop: 12,
        padding: 10,
        marginStart: 8,
        marginEnd: 8,
        
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
        marginTop: 16,
        padding: 8,
        marginStart: 48,
        marginEnd: 48,
        
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