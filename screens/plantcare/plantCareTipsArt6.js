import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt6 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://images.ctfassets.net/3s5io6mnxfqz/lUAPTlYrt8BSCdIO2HJ0o/70128e29042e7105004554727bb598d7/AdobeStock_338707439.jpeg?fm=jpg&w=1200&fl=progressive'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>GARDEN MAINTENANCE</Text>
                    <PFText weight='semi-bold' style={styles.title}>10 Ways to Care for Your Garden: How to Keep Plants Alive</PFText>
                   
                    <PFText style={styles.description}>
                    Plant care can be simple when you know what to look for. Below are a few key care tips for maintaining a vibrant and healthy garden:
                    {'\n'}{'\n'}
                    <PFText weight='semi-bold' style={styles.section}>1. Check the health of your plants</PFText>
                    {'\n'} 
                    Whether you’re transplanting plants from nurseries or growing your own from seeds, fully inspect your garden plants to make sure they are pest and rot free. Bringing in infected or diseased plants can harm the whole garden. Aside from plant disease, destructive bugs like aphids, gnats, and whiteflies should be eliminated using the appropriate pesticides or other effective extermination methods.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>2. Water properly</PFText>
                    {'\n'} 
                    Overwatering can lead to fungi growth, leaf spots, and unhealthy plants. Only water as often as necessary during the growing season for your specific plant species, and let the soil dry between waterings to keep from oversaturating. The trick is to keep your garden well-watered but not soaking, and avoid wetting the foliage. Water directly onto the soil instead. This is easy to do when watering by hand, but if you want to automate things, opt for a drip irrigation system rather than sprinklers.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>3. Treat your soil</PFText>
                    {'\n'} 
                    Soil degrades over time and needs to be refreshed every so often. You can buy new soil from a local garden center, so make sure to check the quality of your garden soil and replace when necessary. Adding mulch is also useful for retaining the soil moisture of your garden. Mulching material will keep weeds down while also supplying organic matter to your soil when it begins to degrade. Fertilizing your garden is another method to keeping it healthy. Depending on the type of plant species you’re growing, use the right amount of fertilizer and apply appropriately to make sure you don’t overstress your plants.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>4. Clean your gardening tools</PFText>
                    {'\n'} 
                    Garden tools should be cleaned to control disease and prevent transferring any bacteria or dangerous elements into your garden. In addition to the other methods of garden care, clean tools can help keep your garden healthy longer.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>5. Perform plant maintenance</PFText>
                    {'\n'} 
                    Deadhead, prune, and cull your plants as needed. Deadheading removes old flower blooms to encourage new growth. Pruning is cutting back the branches of your plants to control growth and make room for more. Culling your plants will clean up the unhealthy bits and also create more space for your garden to flourish. These gardening methods can all promote growth, clearing out any possible hidden pests or undesirable parts, increasing room for your flower or vegetable garden to flourish.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>6. Destroy the weeds</PFText>
                    {'\n'} 
                    Weeds are garden killers. They can suffocate the roots of your healthy plants, harbor pests, and become an unsightly nuisance. Weeds take up space and resources that your plants could be using, so weeding your garden can keep it healthy and growing.
                    {'\n'} {'\n'}


                    <PFText weight='semi-bold' style={styles.section}>7. Protect from animals</PFText>
                    {'\n'} 
                    Set up a barrier around your garden bed, like a wire fence, to keep herbivores, critters, and other garden pests from destroying your plants. Wire fencing keeps your garden safe, while also keeping it visible and exposed to the sun (traditional fencing can sometimes block direct sunlight).
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>8. Stake your plants</PFText>
                    {'\n'} 
                    Staking involves fixing sticks into the ground and tying your flower stems or other garden crops to them with cloth or thread (you can also use a trellis). Staking your plants—like cucumber, pepper, or tomato plants—reinforces the stems and keeps them from bending or breaking, keeping them upright and healthy.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>9. Companion plant</PFText>
                    {'\n'} 
                    Companion planting, or intercropping, is when you plant a variety of different crops together to increase growth productivity, provide pollinators, ward off pests, and control the habitat for beneficial insects. Intercropping is a great way to keep your garden and flower beds thriving by surrounding them with the right plants that will enable their successful growth.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>10. Try raised beds</PFText>
                    {'\n'} 
                    Adding raised beds (or garden containers) to your garden plans can significantly increase your plant’s longevity. Raised beds are great if you want to start small, or plant a variety of sections. Raised beds come with a barrier, provide proper drainage, and can help keep your garden bed safe from pathway weeds and other menaces.
                    {'\n'} {'\n'}



                    {'\n'}{'\n'}{'\n'}

                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://www.masterclass.com/articles/how-to-keep-plants-alive#how-to-care-for-your-gardengardening-tips')}>  MasterClass</Text>
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