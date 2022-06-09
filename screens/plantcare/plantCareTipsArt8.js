import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt8 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardeners-corner-royalty-free-image-527525164-1563060048.jpg?crop=0.655xw:0.980xh;0.0595xw,0.0102xh&resize=980:*'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>PLANTING</Text>
                    <PFText weight='semi-bold' style={styles.title}>9 common gardening mistakes — and how you can avoid them</PFText>
                   
                    <PFText style={styles.description}>
                    Are you guilty of the most common gardening mistakes? From overwatering to not giving plants enough space, these bad habits are putting our beautiful gardens at risk.
                    {'\n'}{'\n'}
                    <PFText weight='semi-bold' style={styles.section}>1. Overwatering</PFText>
                    {'\n'} 
                    Often, overwatering can be just as bad as forgetting to water your plants completely. When you water your plants, remember to water the roots and not the leaves. Seedlings need plenty of water once they are planted, but after they have roots of their own, they will suck up the moisture from the soil.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>2. Garden tasks</PFText>
                    {'\n'} 
                    Gardening jobs are hard work and take sacrifice. Many of us start with growing plants, flowers or vegetable patches but give up soon after because it takes more work than we first thought. Keep a diary of what needs to be done and tick it off once completed.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>3. Give plants space</PFText>
                    {'\n'} 
                    It can be easy to pack your plants into one small space, but they need plenty of room to grow and stretch their roots. Check to see how much space they need before you place them in the ground.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>4. The sun</PFText>
                    {'\n'} 
                    Another simply yet incredibly vital ingredient to growing healthy plants is the sun — and lots of it, too. Make sure you are aware of how much sunlight the flowers you plant need (as they tend to vary depending on what type they are).
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>5. Plants versus weeds</PFText>
                    {'\n'} 
                    When it comes to weeding, pay extra attention so that you don't accidentally pull out your plants. With time, you will be able to identify and pick out the weeds that shouldn't be there.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>6. Planting out of season</PFText>
                    {'\n'} 
                    Always check when plants or seeds need to be placed into the soil. A common mistake amongst UK gardeners is planting them in the wrong season.
                    {'\n'} {'\n'}


                    <PFText weight='semi-bold' style={styles.section}>7. Short grass</PFText>
                    {'\n'} 
                    Avoid cutting your grass too short. If your lawn mower has a setting, choose the middle one to keep your grass looking healthy.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>8. Soil types</PFText>
                    {'\n'} 
                    Check your soil type before you buy a bag to ensure it reacts well with your plants. Different areas in the country have different soil, so some might not work as well with your chosen flowers.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>9. Pests</PFText>
                    {'\n'} 
                    It's worth getting clued-up on which pests are likely to strike and when. Slugs, for example, love warm post-rain conditions, so make sure you keep your plants safe by opting for an eco-friendly deter.
                    {'\n'} {'\n'}

                    
                    {'\n'}{'\n'}{'\n'}

                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://www.goodhousekeeping.com/uk/house-and-home/a28418172/common-gardening-mistakes/')}>  Good Housekeeping</Text>
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

    section: {
        lineHeight: 25,
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