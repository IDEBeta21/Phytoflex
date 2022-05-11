import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt1 ({navigation}) {

    return (
        
        <View>
            <ScrollView 
                showsVerticalScrollIndicator={false}>
                    
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/1376232097_time-to-plant.jpg'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>PLANTING</Text>
                    <PFText weight='semi-bold' style={styles.title}>When To Plant And Transplant</PFText>
                   
                    <PFText style={styles.description}>
                    Plants grown in containers can be planted out into the garden at any time of the year. This is possible because the root-ball of the plant remains undisturbed when it is planted into the soil.
                    {'\n'} {'\n'} 
                    Evergreen trees and shrubs are best planted or transplanted during the rainy season. Before transplanting an evergreen tree or shrub, remove half its leaves to prevent excessive moisture loss until the roots have had a chance to redevelop. You can limit transplant shock by spraying with a solution such as Wilt-Pruf, which reduces transpiration through the leaves.
                    {'\n'} {'\n'} 
                    Bare-rooted trees and shrubs, usually deciduous, should be planted in late winter or spring, before their active growing season starts. Before planting, it is advisable to soak their roots in a bucket of water and cut back all damaged and broken roots to healthy tissue.
                    {'\n'}{'\n'}{'\n'}
                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://plantinfo.co.za/articles/when-to-plant-and-transplant/')}>  Plantinfo</Text>
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