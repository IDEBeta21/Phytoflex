import React from 'react'
import { StyleSheet } from 'react-native'
import { View, TextInput as NativeTextInput } from 'react-native'
import { TextInput as XTextInput } from 'react-native-paper'
// import { Text } from './Text'
import { PFText } from '.'
// import Colors from '../../../utils/Colors'
import Colors from '../utils/globalColors'

export const PFTextInput = ({
        label, 
        value, 
        onChangeText, 
        autoCapitalize = 'none', 
        onBlur, 
        error, 
        secureTextEntry=false, 
        style, 
        containerStyle,
        right, 
        errorMsg = '', 
        onFocus, 
        onEndEditting,
        onSubmitEditing,
        nonEditable,
        active,
        roundness = 20,
        multiline = false,
        mode = 'outlined',
        dense = false,
        autoFocus = false,
        disabled,
        underlineColor
    }) => {
    return (
        <View style={{ ...styles.textInput , ...containerStyle }}>
            <XTextInput
                label={label}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                autoCorrect={false}
                mode={mode}
                // outlineColor={ active ? Colors.primary : Colors.secondary}
                outlineColor={ active ? Colors.primary : Colors.secondary}
                activeOutlineColor={Colors.primary}
                activeUnderlineColor={Colors.primary}
                underlineColor={Colors.white}
                onBlur={ onBlur }
                theme={{ 
                    colors: { text: Colors.primary, placeholder: active ? Colors.primary : Colors.primary}, 
                    fonts: {regular: { fontFamily: 'poppins-light'}}, 
                    roundness: roundness,
                }}
                error={error}
                secureTextEntry={secureTextEntry}
                dense={dense}
                style={{ backgroundColor: Colors.white, ...style }}
                right={right}
                onFocus={onFocus}
                // onEndEditing={onEndEditting}
                editable={nonEditable ? false : true}
                multiline={multiline}
                render={(innerProps) => (
                    <NativeTextInput 
                        {...innerProps}
                        style={[innerProps.style, {textAlignVertical: 'center', fontFamily: 'poppins-semiBold', fontSize: 20, padding: 0, borderBottomWidth: 0}]}
                    />
                )}
                onSubmitEditing={onSubmitEditing}
                autoFocus={autoFocus}
                disabled={disabled}
            />
            {
            errorMsg 
                ? <Text color={Colors.red}>{errorMsg}</Text>
                : null
            }
            
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderColor: Colors.primary,
        // backgroundColor: 'white', 
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 1,
        paddingHorizontal: 10,
        paddingBottom: 2,
        fontSize: 16,
        fontFamily: 'poppins-light',
        // marginStart: 8,
        // marginEnd: 8,
        // alignItems: 'center'
    },
})



// import React from 'react';
// import { TextInput, StyleSheet, View, ImagePropTypes } from 'react-native';

// export const PFTextInput = ({label, style, onChangeText}) => {
//   const {value, onChange} = props;

//   return (
//     <View style={{ ...style , ...styles.container}}>
//         <TextInput
//         placeholder={label}
//         style={styles.textInput}
//         onChangeText={text => onChange(text)}
//         // value={value}
//         />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     textInput: {
//         borderColor: '#1D4123',
//         backgroundColor: 'white', 
//         borderRadius: 15,
//         borderWidth: 1,
//         marginBottom: 0,
//         padding: 10,
//         fontSize: 16,
//         fontFamily: 'poppins-light',
//         marginStart: 8,
//         marginEnd: 8,
//         alignItems: 'center'
//     },
// })