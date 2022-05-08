import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt2 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/1376238029_improving-your-soil2.jpg'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>FERTILIZING</Text>
                    <PFText weight='semi-bold' style={styles.title}>Improving Your Soil</PFText>
                   

                    <PFText style={styles.description}>
                    When cultivating the soil, it is essential to improve its texture and quality on an ongoing basis. 
                    Organic matter acts as a soil conditioner, improving the structure, drainage and aeration characteristics of the soil. 
                    However, the food value of organic matter is low, although it does contain some necessary trace elements. 
                    To ensure the correct feeding of plants, additional plant foods or fertilizers are necessary.
                    {'\n'} {'\n'} 
                    The size of soil particles determines its texture, be it gravel, coarse sand, fine sand, silt, or clay. 
                    Garden soil usually consists of a mixture of sand, silt, clay, and organic matter. 
                    Water is found in the spaces between the soil particles. In sandy soils, where the spaces between are large, water drains away quickly.
                    {'\n'} {'\n'} 
                    The addition of organic matter, such as compost, mushroom or acid compost, and kraal manure, helps to bind sandy soil, enabling it to retain moisture at the roots of plants.
                    The spaces in clay soils are smaller, so overwatering fills them to the exclusion of air, causing waterlogging. 
                    A long-term remedy for breaking up clay soil is to add lots of organic matter, coarse sand, and lime.
                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink}  
                            onPress={() => Linking.openURL('https://plantinfo.co.za/ARTICLES/IMPROVING-YOUR-SOIL/')}>  Plantinfo</Text>
                    </Text>
                </View>

            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

    title:{
        paddingBottom: 6,
        paddingTop: 4,
        fontSize: 19

    },

    description:{
        textAlign: 'justify',
        lineHeight: 22,
        paddingBottom: 20,
        fontSize: 14,
    },

    imageContainer: {
        alignItems: 'center'
    },

    image: {
        height: 250, 
        width: 570, 
        resizeMode: 'cover'
    },

    content: {
        paddingHorizontal: 16, 
        paddingVertical: 15, 
        flex: 1,
    },

    category: {
        color: '#639D04', 
        fontFamily: 'poppins-semiBold', 
        letterSpacing: 2, 
        fontSize: 13,
    },

    hyperlink: {
        fontFamily: 'poppins-regular', 
        fontWeight: 'normal', 
        color: '#639D04',
    },

    source: {
        fontFamily: 'poppins-semiBold', 
        color: '#1D4123'
    }



    

})