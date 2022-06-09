import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt10 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2011/3/17/1/TS-86802365_variety-of-flowerpots_s4x3.jpg.rend.hgtvcom.616.462.suffix/1400963237486.jpeg'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>GARDENING</Text>
                    <PFText weight='semi-bold' style={styles.title}>14 Simple Gardening Tips and Tricks {'\n'}</PFText>
                    
                    <PFText style={styles.description}>
                   
                    <PFText weight='semi-bold' style={styles.section}>1. </PFText>
                    To remove the salt deposits that form on clay pots, combine equal parts white vinegar, rubbing alcohol and water in a spray bottle. Apply the mixture to the pot and scrub with a plastic brush. Let the pot dry before you plant anything in it.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>2. </PFText>
                    To prevent accumulating dirt under your fingernails while you work in the garden, draw your fingernails across a bar of soap and you'll effectively seal the undersides of your nails so dirt can't collect beneath them. Then, after you've finished in the garden, use a nailbrush to remove the soap and your nails will be sparkling clean.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>3. </PFText>
                    To prevent the line on your string trimmer from jamming or breaking, treat with a spray vegetable oil before installing it in the trimmer.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>4. </PFText>
                    Turn a long-handled tool into a measuring stick! Lay a long-handled garden tool on the ground, and next to it place a tape measure. Using a permanent marker, write inch and foot marks on the handle. When you need to space plants a certain distance apart (from just an inch to several feet) you'll already have a measuring device in your hand.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>5. </PFText>
                    To have garden twine handy when you need it, just stick a ball of twine in a small clay pot, pull the end of the twine through the drainage hole, and set the pot upside down in the garden. Do that, and you'll never go looking for twine again.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>6. </PFText>
                    Little clay pots make great cloches for protecting young plants from sudden, overnight frosts and freezes.
                    {'\n'} {'\n'}


                    <PFText weight='semi-bold' style={styles.section}>7. </PFText>
                    To turn a clay pot into a hose guide, just stab a roughly one-foot length of steel reinforcing bar into the ground at the corner of a bed and slip two clay pots over it: one facing down, the other facing up. The guides will prevent damage to your plants as you drag the hose along the bed.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>8. </PFText>
                    To create perfectly natural markers, write the names of plants (using a permanent marker) on the flat faces of stones of various sizes and place them at or near the base of your plants.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>9. </PFText>
                    Got aphids? You can control them with a strong blast of water from the hose or with insecticidal soap. But here's another suggestion, one that's a lot more fun; get some tape! Wrap a wide strip of tape around your hand, sticky side out, and pat the leaves of plants infested with aphids. Concentrate on the undersides of leaves, because that's where the little buggers like to hide.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>10. </PFText>
                    The next time you boil or steam vegetables, don't pour the water down the drain, use it to water potted patio plants, and you'll be amazed at how the plants respond to the "vegetable soup."
                    {'\n'}{'\n'}

                    <PFText weight='semi-bold' style={styles.section}>11. </PFText>
                    Use leftover tea and coffee grounds to acidify the soil of acid-loving plants such as azaleas, rhododendrons, camellias, gardenias and even blueberries. A light sprinkling of about one-quarter of an inch applied once a month will keep the pH of the soil on the acidic side.
                    {'\n'} {'\n'} 

                    <PFText weight='semi-bold' style={styles.section}>12. </PFText>
                    Use chamomile tea to control damping-off fungus, which often attacks young seedlings quite suddenly. Just add a spot of tea to the soil around the base of seedlings once a week or use it as a foliar spray.{'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>13. </PFText>
                    If you need an instant table for tea service, look no farther than your collection of clay pots and saucers. Just flip a good-sized pot over, and top it off with a large saucer. And when you've had your share of tea, fill the saucer with water, and your "table" is now a birdbath.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>14. </PFText>
                    The quickest way in the world to dry herbs: just lay a sheet of newspaper on the seat of your car, arrange the herbs in a single layer, then roll up the windows and close the doors. Your herbs will be quickly dried to perfection. What's more, your car will smell great.
                    {'\n'}
                    {'\n'}{'\n'}{'\n'}

                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://www.hgtv.com/outdoors/landscaping-and-hardscaping/14-simple-gardening-tips-and-tricks')}>  HGTV</Text>
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