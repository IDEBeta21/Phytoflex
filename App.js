import React  from 'react';
import { useState, useEffect } from 'react';
import { 
    KeyboardAvoidingView, StyleSheet, Text, 
    TextInput, View , Image , 
    TouchableOpacity, Alert, ScrollView, SafeAreaView, FlatList
} from 'react-native';
import Header from './components/header';

// Functions
const hello = () => {
    Alert.alert('hello world!!');
}

//Test screen
{/* This contains the test for using fetch in PHP */}
const testScreen = () => {
    //Testing for fetch
    /* 
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('http://localhost/rn-php-test/test.php')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => alert(error + '\nhello world'))
        .finally(setLoading(false));
    });
    */

    //Testing for flatlist with array
    const [data , setData] = useState([
        {ComplainantID: '1' , ComplainantName: 'Ian'},
        {ComplainantID: '2' , ComplainantName: 'Bella'}
    ])
    const [isLoading, setLoading] = useState(false);

    return(
        <SafeAreaView style={({marginTop: 50, paddingHorizontal: 15,})}>
            {
                isLoading ? 
                    (<Text>Hello</Text>) : 
                    (<FlatList
                        data = {data}
                        renderItem={({ item }) => (
                            <View style={styles.buttonArea}>
                                <Text style={({padding: 10, color: 'white'})}>{item.ComplainantName}</Text>
                            </View>
                        ) } 
                    />)
            }
        </SafeAreaView>

    );
};

// Layouts
const MainScreen = () => {
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
                    //behavior={Platform.OS === "android" ? "padding" : "height"}
                >

                    {/* Logo area */}
                    <View style={styles.logoView}>
                        <Image
                            style = {styles.logo}
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
                            }}
                        />
                        <Text style={styles.headerText}>For Plantitios and </Text>
                        <Text style={styles.headerText}>Plantitas</Text>
                    </View>

                    <View style={({paddingHorizontal: 30})}> 
                        {/* Text Input Area */}
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
                    </View>
                    
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
        borderRadius: 12,
    },
    logoView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30
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

// export default MainScreen;
export default testScreen ;