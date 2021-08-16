import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View , Image , TouchableOpacity, Alert, ScrollView} from 'react-native';

// Functions
const hello = () => {
    Alert.alert('hello world!!');
}

// Layouts
export default function App() {
    return (
        <View style={styles.loginContainer}>
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
                    <View style={styles.header}>
                        <Image
                            style = {styles.logo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                            }}
                            />
                        <Text style={styles.headerText}>PHYTOFLEX</Text>
                    </View>
                    
                    {/* Text Area */}
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.textbox}
                        placeholder="i.e. NameIsDev21"
                    ></TextInput>

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.textbox}
                        placeholder="Password"
                    ></TextInput>

                    {/* Button Area */}
                    <TouchableOpacity onPress={hello}>
                        <View style={styles.buttonArea}>
                            <Text style={{ color: 'white', fontSize: 20, }}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>

        </View>
    );
}

// Styles
//Login form Styles
const styles = StyleSheet.create({
    loginContainer: { 
        flex: 1,
        backgroundColor: '#fff',
        marginVertical: 0 ,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginTop: 0,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    textbox: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        fontSize: 15,
    },
    label:{
        marginVertical: 10,
        fontSize: 20,
    },
    logo: {
        width: 200,
        height: 200,
    },
    buttonArea: {
        marginTop: 40,
        backgroundColor: 'green',
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 15,
        padding: 15,
    }
});