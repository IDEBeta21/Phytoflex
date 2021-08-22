import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import { render } from 'react-dom';
import { 
  KeyboardAvoidingView, StyleSheet, Text, 
  TextInput, View , Image , 
  TouchableOpacity, Alert, ScrollView
} from 'react-native';
import Header from './components/header'

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </ScrollView>
  )
}

const loginScreen = () => {
    
  const [userName, setUserName] = useState('adfasdf');
  const [userPass, setUserPass] = useState('');
  
  const hello = ({userName}) => {
    Alert.alert('hello world: ' + {userName});
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
            <Text style={styles.headerText}>For Plantitios and </Text>
            <Text style={styles.headerText}>Plantitas</Text>
          </View>
          
          <View style={({paddingHorizontal: 30})}> 
            {/* Text Input Area */}
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.textbox}
              placeholder="i.e. NameIsDev21"
              onChangeText = {(val) => setUserName(val)}
            ></TextInput>
            
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textbox}
              placeholder="Password"
            ></TextInput>
            
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
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

// export default MainScreen;
// export default testScreen;
export default loginScreen;
// export default App;