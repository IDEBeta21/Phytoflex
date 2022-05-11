import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt5 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/1438161443_bonsai-tree-care.jpg'}}
                    />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>PLANTING</Text>
                    <PFText weight='semi-bold' style={styles.title}>Caring Tips For A Bonsai Tree</PFText>

                    <PFText style={styles.description}>
                    It is a big misconception to many people with regards to bonsai care that it is such a difficult thing to do. 
                    The way I like to explain it is like this – we all deal with different people on a daily basis. 
                    Each of those people have specific needs and want, likes and dislikes and different personalities. 
                    We all have basic needs like food and water but besides the basics we're fussy in our own ways. 
                    Trees can be looked at this in the same way.
                    {'\n'}{'\n'}{'\n'} 

                    <PFText weight='semi-bold' style={styles.section}>1. They need water</PFText>
                    {'\n'} 
                    When it comes to watering, there are three simple rules to follow. 
                    Make sure your soil is moist but not soaked. 
                    When it's dry, water, and lastly, water thoroughly. 
                    Make sure you water thoroughly and that the water flows through. 
                    Watering only the surface of the soil does not always reach the deeper roots.
                    In the winter, watering should be done in the mornings when needed. 
                    The reason for this is that as the temperatures drop, watering becomes less necessary. 
                    Watering in the evening may cause temperatures to drop below freezing, causing the water in your pots to freeze. 
                    This could cause your plant's roots to freeze and kill it. In the summer, do watering in the late afternoons or evenings. 
                    The reason for this is that your plants will stay moist all night and most of the morning if you do it this way. 
                    Even if you water them first thing in the morning, they will only be moist for a few hours.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>2. They need light</PFText>
                    {'\n'} 
                    Light is accompanied by heat. 
                    If the tree is in direct sunlight, it will receive a lot of heat. 
                    Trees and plants cannot grow in the absence of light because they require it for photosynthesis. 
                    It is critical to understand how much light your plant requires. 
                    You don't want to put a tree that needs full sun in a dark corner of your house. 
                    The tree will undoubtedly die, and vice versa, i.e. you cannot place shade-loving trees in full sun.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>3. Fertilization</PFText>
                    {'\n'} 
                    Fertilizing every few months is a good idea, as bonsai are pot bound and cannot seek nutrients with their roots like they would in the wild. 
                    Fertilizers are available in a variety of forms on the market. 
                    Some are in liquid form, while others are in pellet form. 
                    As a result, every time you water, you're also feeding the plant.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>4. Watch for bugs</PFText>
                    {'\n'} 
                    Keep an eye on your trees, especially in the early spring when all of the new fresh green growth begins, and then throughout the growing season when bugs are out in force. 
                    I'd recommend a good systemic poison because they last a long time, and if the infestation is severe, a contact poison would be a good idea to get rid of them. 
                    You can repel them instead of killing them if you don't want to kill them. 
                    Always use caution when handling poisons and follow the manufacturer's instructions.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>5. Know your tree</PFText>
                    {'\n'} 
                    As previously stated, trees have different needs, so it's always a good idea to know what you're getting yourself into when it comes to tree care. 
                    Find out what species it is and what its natural growing environment is so you can provide it with that, such as full or semi-sun, lots or little water, and whether it is an easy tree to grow or not. 
                    What tree is best for a beginner, or are you a more experienced grower? When purchasing a tree, these factors should be considered. 
                    Also, if you're going on vacation, remember that your tree will still need to be watered.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold' style={styles.section}>6. TLC</PFText>
                    {'\n'} 
                    Looking after your tree or trees can be a very rewarding experience that you can do for the rest of your life and even pass on to someone else one day if well cared for. 
                    Your trees will bring you joy for a lifetime, and all they ask in return is a little tender loving care. 
                    {'\n'}{'\n'}{'\n'}
                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://plantinfo.co.za/ARTICLES/CARING-TIPS-FOR-A-BONSAI-TREE/')}>  Plantinfo</Text>
                    </Text>
                </View>

            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

    title:{
        paddingBottom: 13,
        paddingTop: 4,
        fontSize: 19,

    },

    description:{
        textAlign: 'justify',
        lineHeight: 22,
        fontSize: 14,
    },

    section: {
        lineHeight: 28,
    },

    imageContainer: {
        alignItems: 'center'
    },

    image: {
        height: 370, 
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