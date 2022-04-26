import React from 'react';

import {    View, Text, 
            StyleSheet, Image, 
            useWindowDimensions, 
} from 'react-native';

export default OnboardingItem = ({item}) => {

    const { width } = useWindowDimensions();
    
    return (
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems:'center',

   },

    image: {
       flex: 0.2,
       justifyContent: 'center',
       paddingTop: 258
   }, 
    title: {
        color: '#FFFFFF',
        fontSize: 35,
        fontFamily: 'poppins-semiBold',
        marginBottom: 10,
        textAlign: 'center',
        paddingTop: 32
   },
    description: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-light',
        textAlign: 'center',
        paddingHorizontal: 48,
   },
});