import React from 'react';
import { TextInput, StyleSheet, View, ImagePropTypes } from 'react-native';

export const PFTextInput = (props) => {
  const {value, onChange} = props;

  return (
    <View style={styles.container}>
        <TextInput
        placeholder={props.label}
        style={styles.textInput}
        onChangeText={text => onChange(text)}
        // value={value}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    textInput: {
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
})