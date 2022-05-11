import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt4 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/Containerized-Hydrangea4.jpg'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>GARDEN MAINTENANCE</Text>
                    <PFText weight='semi-bold' style={styles.title}>When and how to water containers, pots and containerized plants</PFText>
                    {/* PLANTING */}
                   

                    <PFText style={styles.description}>
                    <PFText weight='semi-bold'>When to water pots or containers:</PFText>
                    {'\n'} 
                    How often you water containers depends on the plants you grow in them. 
                    It’s important to group plants with the same watering requirements together – check the water requirement icon on plants in the PlantInfo database. 
                    Containers are easily over or under watered. 
                    To avoid this, regularly check the soil moisture of your containers by digging your finger 2-5 cm into the soil. 
                    If it's dry, add water, if not, don’t. 
                    When containers are grouped together, it is important to check the moisture of more than one container before watering. 
                    Just because one container needs water doesn’t mean all of them do. 
                    Throughout the day, moisture is not only drawn from the plant but from the container as well, so water containers early in the morning to ensure your containers have plenty of moisture for the day ahead. 
                    Remember, containers dry out faster than garden soil and smaller containers dry out faster than larger ones, so they may often require watering daily. 
                    Also, remember not to water during, before, or after rainy weather. 
                    {'\n'} {'\n'} 
                    <PFText weight='semi-bold'>How to water pots or containers: </PFText>
                    {'\n'} 
                    To avoid soil and dirt splashing from the containers when watered with a spray, try to stick the nozzle beneath the foliage when watering. 
                    This not only reduces splashing but it prevents water from gathering on and between foliage and flowers, which helps avoid disease buildup and encourages a healthy plant. 
                    When watering containers, do so thoroughly, watering to the point where water runs out the bottom of the container.
                    {'\n'}
                    
                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('HTTPS://PLANTINFO.CO.ZA/ARTICLES/WHEN-AND-HOW-TO-WATER-CONTAINERS-POTS-AND-CONTAINERISED-PLANTS/')}>  Plantinfo</Text>
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