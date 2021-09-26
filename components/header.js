import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header({text}) {
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{text} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100, 
        paddingTop: 38,
        backgroundColor: 'green',
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',

        //Render shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 15,
    },
    headerText: {
        fontSize: 30 ,
        fontWeight: 'normal' 
    }
});