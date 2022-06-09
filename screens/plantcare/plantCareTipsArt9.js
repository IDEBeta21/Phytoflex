import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt9 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://media.self.com/photos/5ee90a9fec5f7025c4284e5c/4:3/w_2560%2Cc_limit/gardening_vegetables.jpeg'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>GARDEN MAINTENANCE</Text>
                    <PFText weight='semi-bold' style={styles.title}>10 Helpful Gardening Tips That Actually Helped This Former Plant Killer</PFText>
                   
                    <PFText style={styles.description}>
                    {'\n'}
                    <PFText weight='semi-bold' style={styles.section}>1. Start small, but not too small</PFText>
                    {'\n'} 
                    What size of a garden you want will depend on how much time you're willing to invest. One expert estimates it takes 1.5 minutes per square foot a week to maintain a 25-square-foot garden. Another horticulturist says beginners can start with a simple 20-inch diameter pot and some seeds. Be wary of garden envy, an urban gardener in Houston says.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>2. Plant your garden where the sun does shine</PFText>
                    {'\n'} 
                    “For edible, rule number one is you need full sun,” Dimitrov says. In general, you can usually grow edible food anywhere that is south, southeast, or southwest facing. Or just pay attention to where the sun goes during the day. Which area spends most of the day in the sun? That’s where you’ll want to put your edible garden.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>3. Want quick and bountiful? Focus on leaves instead of fruits</PFText>
                    {'\n'} 
                    Most edible plants start their life as a seed. Focus on plants whose main bounty is their leaves, like lettuce and herbs. You'll get a yield quicker, since fruiting happens later in a plant's life. Burke is putting the leaves where her mouth is, too—she challenged herself to eat a home-grown salad every day for six months, all from a 15-square-foot bed.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>4. Know your “zone"</PFText>
                    {'\n'} 
                    The USDA mapped out "hardiness" zones for every area in the country. Knowing your zone will inform you what kind of plants are best suited to your area. Some tools, like one from garden.org, let you put in your zip code to make it completely foolproof. Plants that are discounted are often cheaper because you're headed out of the prime season.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>5. Move beyond the potting soil mix</PFText>
                    {'\n'} 
                    Even organic potting soil can contain unsustainable ingredients like peat moss and vermiculite. Potting soil often isn't very nutrient-rich since there's so much filler. "Mulch is just a ground cover, something that you put on top of the soil," says Hammond. Straw and wood chips both make for good mulch material, he says.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>6. If you use transplants instead of seeds, keep the soil consistent</PFText>
                    {'\n'} 
                    You'll want to be choosy about the plants you begin with seeds and the ones you buy as transplants. Beginners are often better off getting transplants for herbs like basil, rather than hoping it sprouts. If you plant a start and it just doesn't seem to grow, the soil mix-match is a likely culprit.
                    {'\n'} {'\n'}


                    <PFText weight='semi-bold' style={styles.section}>7. Your garden should be full of things you actually eat</PFText>
                    {'\n'} 
                    If you’re not sure what you want to plant, Hammond says the best place to start is your kitchen. “What do you use when you cook?” he says. “You should grow something not just because it’s easy, but grow something because you’re going to use it.” There’s a lot of satisfaction of bringing your harvest indoors and cooking yourself a meal. Or, if you’re me, snapping off your peas and tomatoes one at a time and eating them in the sun.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>8. Eat your plants as soon as they’re ready</PFText>
                    {'\n'} 
                    Most plants aren't year-round producers or even months-long producers. They show up happy and delicious for a short period and then move on to flowering. Most of the plants I would grow in the garden, they're going to finish their entire life cycle in 90 days. This is usually hard, if not impossible, to undo.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>9. Use the three-second rule when watering</PFText>
                    {'\n'} 
                    For most edible plants, you want to make sure you water them enough, but not too much. Hammond says the easiest trick is to water a container or a garden bed until you can count to three seconds with the water still pooled on top. But for the most part, plants will tell you when they're thirsty, and if the leaves are drooping, it's time for refreshment.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>10. Cut yourself some slack when you fail</PFText>
                    {'\n'} 
                    You have to go through the same things that make you a good gardener or a more advanced gardener. You have to kill a bunch of plants, get diseases on your plants, and you just have to learn, Hammond says. This morning I harvested bok choy that I regrew from a grocery-bought plant. My thyme is thriving, and I can see the beginnings of a broccoli head poking out of my broccoli plant. Don't get me wrong, I'm still a rubbish gardener, but I'm a little less terrible than I was before.
                    {'\n'}



                    {'\n'}{'\n'}{'\n'}

                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://www.self.com/story/gardening-tips')}>  SELF</Text>
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