import React from 'react';

import {    View, Text, 
            StyleSheet, Image, 
            useWindowDimensions, 
            ImageBackground
} from 'react-native';

export default OnboardingItem = ({item}) => {

    const { width } = useWindowDimensions();
    
    return (
        <View style={[styles.container, {width}]}>
        <ImageBackground source={item.backgroundImage} resizeMode='cover' style={styles.imageBG}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </ImageBackground>
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
       flex: 0.1,
       justifyContent: 'center',
       paddingTop: 360
   }, 
    imageBG: {
       flex: 1,
       justifyContent: 'center',
   },
    title: {
        color: '#FFFFFF',
        fontSize: 30,
        fontFamily: 'poppins-semiBold',
        marginBottom: 4,
        textAlign: 'center',
        paddingTop: 24
   },
    description: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'poppins-light',
        textAlign: 'center',
        paddingHorizontal: 50,
   },
});