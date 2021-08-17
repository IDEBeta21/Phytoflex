import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={({fontSize:30})}>Phytoflex</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100, 
        paddingTop: 38,
        backgroundColor: 'green',
        paddingLeft: 15
    },
});