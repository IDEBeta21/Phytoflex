import * as React from 'react';
import {useState}from 'react';
import { render } from 'react-dom';
import { 
    View, ScrollView, KeyboardAvoidingView, 
    Image, Text, TextInput, TouchableOpacity,  
    StyleSheet,
    Alert
} from 'react-native';
import Header from '../components/header';

export default function LoginScreen({gotoForum}){
    
    const def_pass = "pass1";
    const def_usrname = "admin1"
    
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    
    const testInput = () => {
        if(userName == def_usrname && userPass == def_pass){
            gotoForum();
        }else{
            Alert.alert('Wrong Input/s' + userName);
            setUserName('');
            setUserPass('');
        }
    }
    
    return(
        <View style={styles.loginContainer}>
            {/* Display Header */}
            <Header/>
            
            {/* Make the view scrollable */}
            <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
                
                {/* To detect virtual keyboard */}
                <KeyboardAvoidingView
                behavior={Platform.OS === "android" ? "padding" : "height"}
                >
                    
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
                    
                    <View style={({paddingHorizontal: 30})}> 
                        {/* Text Input Area */}
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                        style={styles.textbox}
                        placeholder="i.e. NameIsDev21"
                        onChangeText = {(text) => setUserName(text)}
                        value={userName}
                        ></TextInput>
                        
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                        style={styles.textbox}
                        placeholder="Password"
                        onChangeText = {(text) => setUserPass(text)}
                        value={userPass}
                        ></TextInput>
                        
                        <TouchableOpacity onPress={() => testInput()}>
                            <View style={styles.buttonArea}>
                                <Text style={{ color: 'white', fontSize: 20, }}>LOGIN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    ); 
}
    
const styles = StyleSheet.create({
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