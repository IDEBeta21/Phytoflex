import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt7 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardening-ideas-1622735961.jpg?crop=0.711xw:1.00xh;0.154xw,0&resize=980:*'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>GARDEN MAINTENANCE</Text>
                    <PFText weight='semi-bold' style={styles.title}>13 simple gardening tips and how to use flora for mindfulness</PFText>
                   
                    <PFText style={styles.description}>
                    
                    {'\n'}
                    <PFText weight='semi-bold' style={styles.section}>1. Focus on your sunny spaces</PFText>
                    {'\n'} 
                    It feels like quite a dual irony and a double edged sword, perhaps, that this is happening on the cusp of spring; I’m looking at trees coming into bud and we’re cooped up when the world is waking up. But as the days are lengthening and the world gets warmer, why not see it as the perfect time to start growing things? 
                    If you’re not blessed with outdoor spaces or you’ll be stuck inside a flat or house, you can grow, too. All you really need is a sunny spot. My flat doesn’t have a lot of natural light, but it does have enough on the windowsill in my kitchen that I can grow things. As long as you’ve got light, you can grow.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>2. Be resourceful</PFText>
                    {'\n'} 
                    You don’t need tonnes of pots and planters; you can use the tubs that your tomatoes or mushrooms come in, or even salad trays. If you’re really stuck, try a bread baking tin. It’s less ideal as it doesn't have drainage, but if you’ve got a trough and soil, you can grow.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>3. Grow things you can eat</PFText>
                    {'\n'} 
                    I like to grow edibles, in other words, things that we can eat. 
                    At a time like this where we are all being more resourceful at home, it has a really practical dimension, too.
                    Not only that, but the actual process of watching something grow is really relaxing. 
                    Especially when we’re going to be going a bit mad inside and there’s no real differentiation between morning and night, if you’re working from home. 
                    It’s actually a nice way of watching the time pass. 
                    More exactly on what to grow later, but any sort of herb or salad leaves are always a good start.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>4. Utilise your supermarket shop</PFText>
                    {'\n'} 
                    If you don’t have seeds, you can gain a lot of extra life out of your supermarket herbs by planting them up—you know the ones you get in pots? Take them out of their pot, split the root ball up into halves or even quarters and pot them on in a wider space of soil. Often there are too many shoots in one of those basil pots, which is why they often die.
                    Basil is great because it smells amazing and you can put it in everything, and it does take to the splitting and repotting technique quite well. Other supermarket herbs, like parsley and mint, you can dunk in a bigger pot of compost, inside or out, and they will just keep growing.                    
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>5. Focus on more unusual seeds</PFText>
                    {'\n'} 
                    Forget chives and cress: I’d recommend growing some more unusual leaves in your sunny areas. Think lettuce leaves, pea shoots, rocket, endive and mizuna. Seed companies will still be delivering so you should be able to order these online. They leave you with more interesting things to eat for dinner, and can make you feel like you’re doing something at a time when a lot of us are going to be getting quite frustrated in our own space.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>6. Invest in indoor plants</PFText>
                    {'\n'} 
                    Because of the time of year, supermarkets are stocking a whole host of different house plants to brighten up your space. Again, you can order them online for delivery straight to your door.
                    {'\n'} {'\n'}
                    Scientifically, they have been proven to boost our mood, and especially in these times where we’re not going out as much as we should do, it’s a way of bringing nature in. We really need nature to feel calm, happy and to escape. If you find yourself endlessly scrolling on your phone, plants also offer something to look at that isn’t a screen.
                    {'\n'} {'\n'}
                    If you do decide to invest and bring some into your home for the first time, make sure they’re in a space where they are getting what they need, rather than just looking pretty. Make sure your plant is somewhere where it gets the right level of light—ferns and things generally need less light, they’re great for a bathroom, but succulents and more tropical plants will need more light, so make sure they’re relatively near to a window.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>7. Don’t overwater</PFText>
                    {'\n'} 
                    People tend to over water their plants massively, especially succulents. Realistically, this time of year, they only need to drink about once a week. I’d also recommend, when you do water them, watering them properly. Don’t let the water hang around in the pot and get all manky, as it will kill it.
                    {'\n'} {'\n'}

                    How to water your plants properly:
                    {'\n'} {'\n'}
                    {'\tTake them to the sink.'}{'\n'}
                    {'\tStick them underneath the tap and turn the tap on.'}{'\n'}
                    {'\tMake sure that water is running out the bottom.'}{'\n'}
                    {'\tOnce done, pop it back in its pot.'}

                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>8. Grab some floral bargains</PFText>
                    {'\n'} 
                    If you look online at most florists or supermarkets at the moment, you’ll see a lot of cheap bulbs in paper pots. Think hyacinths, nasturtiums and daffodils (or tete-a-tete’s). These are a really lovely alternative to cut flowers. They’re, firstly, normally a lot cheaper—you can normally pick them up for less than £2.
                    {'\n'} {'\n'}
                    Secondly, you can put them in a nice pot and they’ll last a couple of weeks, sometimes longer, depending on how well they’ve been grown. This is a lot longer than fresh flowers last. These spring flowers also smell amazing. Hyacinth and nasturtiums are my favourites, so I’ve been stocking up on those.
                    {'\n'} {'\n'}


                    <PFText weight='semi-bold' style={styles.section}>9. Take care of plants you already own</PFText>
                    {'\n'} 
                    Rather than taking on new projects, you could use this time to take care of the plants you already have if you live in a bit of an urban jungle. Why not utilise your spare social distancing time to take care of the houseplants that may have got a little ratty over the winter? It’s time to start pruning and propagating.
                    {'\n'} {'\n'}
                    Take a nice pair of kitchen scissors, pruning shears or secateurs if you’ve got them, and cut away any dead growths. If they are needing a re-pot, in other words, if their roots are coming out of the bottom and they’re looking a little bit tight in their space, now’s the time to start potting them on. You can order new pots online.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>10. Don’t be afraid to give it a go</PFText>
                    {'\n'} 
                    People think that they’re bad at growing plants, without really having any experience of it. It’s worth just giving it a go. The sole purpose of the vast majority of plants is to live, exist and survive, a bit like any other thing; our goal in life is to keep going.
                    {'\n'} {'\n'}
                    Why not just bring some plants into your home and let them hang out without worrying about them too much? Know that if it all goes terribly wrong, you can always order another one. You’re not beholden to try and keep them alive forever—you’re meant to enjoy them, appreciate what they do and learn from the process of growing them.
                    {'\n'} {'\n'}


                    <PFText weight='semi-bold' style={styles.section}>11. Utilise your balcony space</PFText>
                    {'\n'} 
                    What people never realise, with spaces of any size, big or small, is that you have as much room up as you have out. When people look at photos of my balcony and remark on how much I have on there, I tell them that really, it appears that way because I’m growing at different heights.
                    {'\n'} {'\n'}
                    Even if you’ve got a juliette balcony, try hang some planters off the side of your railings and trail in and out of the railings to create the illusion of more space. If you're stuck for inspiration, these Good Housekeeping colourful window box ideas are a good start. If you have a spare empty pot in the house, a hack I do quite a lot, is to use an empty plant pot to put a growing pot on top of.
                    {'\n'} {'\n'}
                    In other words, I turn one upside down and use the other as a prop. The minute you lift that plant up, not only have you got something to grow against, so you’ve got more space, it brings the eye up so you don’t just have this expanse of wall and then some plants at two foot high. Instead, you’re growing them all the way up.
                    {'\n'} {'\n'}


                    <PFText weight='semi-bold' style={styles.section}>12. Don’t be afraid to go large</PFText>
                    {'\n'} 
                    Often, when you start gardening in a small space, you have little pots here, there and everywhere. From a design perspective, starting with at least a couple of the biggest planters you can fit in the house—think a big bamboo, a fat japonica or a fern, something that’s quite sculptural—they’ll provide year-long green and a backdrop to grow against.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>13. Invest in plants that thrive with minimal attention</PFText>
                    {'\n'} 
                    I’d advise buying some Mexican fleabane. It’s a type of daisy that blooms for around nine months of the year and will creep everywhere. It looks beautiful coming out of pots or trailing over steps. You also can’t go wrong with wallflowers—I love Erysimum, or 'Bowles's Mauve'—they last forever and are very beautiful.
                    {'\n'} {'\n'}
                    Why not just bring some plants into your home and let them hang out without worrying about them too much? Know that if it all goes terribly wrong, you can always order another one. You’re not beholden to try and keep them alive forever—you’re meant to enjoy them, appreciate what they do and learn from the process of growing them.
                    {'\n'} {'\n'}

                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://www.goodhousekeeping.com/uk/house-and-home/gardening-advice/a31802907/gardening-ideas/')}>  Good Housekeeping</Text>
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