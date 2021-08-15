import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View , Image , Button, Alert} from 'react-native';

// Functions
const hello = () => {
    Alert.alert('hello world!!');
}

// Layouts
export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image
          style = {styles.logo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
        />
        <Text style={styles.headerText}>PHYTOFLEX</Text>
      </View>
      
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
      <View style={styles.button}>
        <Button 
          title = 'LOGIN'
          color = 'black'
          onPress = {hello}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>

    
  );
}

// Styles
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginVertical: 40 ,
    borderRadius: 12,
    margin: 10,
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
    width: 100,
    height: 100,
  },
  button: {
    marginTop: 25,
  }
});