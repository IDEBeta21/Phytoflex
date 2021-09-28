import * as React from "react";
import {ScrollView, View, Text, StyleSheet} from 'react-native';

export default function Forum(){
    
    return(
        <View style={{flex: 1}}>
            {/* <ScrollView> */}
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                </View>
            {/* </ScrollView> */}
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
});