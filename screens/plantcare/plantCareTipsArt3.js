import { Text, StyleSheet, View, Image, ScrollView, Linking} from 'react-native';
import React, { Component } from 'react';

import { PFText } from '../../components';

export default function PlantCareTipsArt3 ({navigation}) {

    return (
        
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: 'https://portlandnursery.com/plants/images/rose/rose-problems/aphids750.jpg'}}
                        />
                </View>
                
                <View style={styles.content}>
                    <Text weight='semi-bold' style={styles.category}>PESTS AND DISEASES</Text>
                    <PFText weight='semi-bold' style={styles.title}>Home – Made Pest Control Remedies</PFText>
                   
                    <PFText style={styles.description}>
                    Gardeners who prefer a totally natural approach can opt for home–made, natural remedies to cover a variety of insect and plant-related problems. 
                    Unless indicated otherwise, use as a full cover spray and apply once a week for as long as the problem persists.
                    {'\n'} {'\n'} 

                    <PFText weight='semi-bold'>Garlic spray – fungal disease</PFText>
                    {'\n'} 
                    Boil 5ml of crushed garlic in one litre of water for five minutes; strain and leave to cool.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold'>Nasturtium spray – aphids, scale and red spider mite</PFText>
                    {'\n'} 
                    Pour 500ml boiling water over two handfuls of fresh nasturtium leaves and allow to steep for 15 minutes. 
                    For aphids and red spider mite, dilute 10 drops of the resulting tea in one litre of water. 
                    For scale, use 250ml of the tea diluted in two-and-a-half litres of water.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold'>Quassia spray – a general insect poison</PFText>
                    {'\n'} 
                    Prepare a concentrate by soaking 200g quassia chips in two litres of water for 12 hours, and then bring to a quick boil and strain. 
                    Quassia (Quassia amara), also known as Bitter ash or Bitter wood, is a tall tree, native to the West Indies, whose bark has noted insecticide properties. 
                    It is also used medicinally. 
                    Quassia chips are available from health shops.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold'>Soap spray – aphids and mealy bugs</PFText>
                    {'\n'} 
                    Dilute 10ml of dishwashing liquid in two litres of water. 
                    Spray daily for five or six days, then every second day until the aphids or mealy bugs disappear. 
                    Remember to wet both the tops and undersides of leaves.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold'>Soya bean spray – black spot and powdery mildew</PFText>
                    {'\n'} 
                    Dilute 60ml soya bean oil in three litres of water and add 5ml of liquid soap. Spray as necessary. 
                    Black spot and powdery mildew are linked to damp, cool weather. 
                    Once the weather improves and becomes drier, they should disappear and there will be no need to continue spraying.
                    {'\n'} {'\n'}

                    <PFText weight='semi-bold'>Wormwood or Tansy spray – cutworm, bollworm and fruit fly</PFText>
                    {'\n'} 
                    To make a spray from wormwood (Artemisia absinthium), prepare a concentrate by pouring two litres of boiling water over 300g fresh or 30g dried wormwood. 
                    Steep for 15 minutes, strain and dilute 1:5 for use on insect pests, rust and mildew. 
                    Wormwood has medicinal uses and is available from health shops in dried form.
                    {'\n'} {'\n'}

                    Tansy (Tanacetum vulgare) is a yellow-flowered perennial herb, also known as Bitter buttons. 
                    It is an effective insect repellant, often used in companion planting for biological pest control. 
                    Like wormwood, it has medicinal uses, but can be toxic if used incorrectly.

                    </PFText>

                    <Text style={styles.source}>
                        Source: 
                        <Text 
                            style={styles.hyperlink} 
                            onPress={() => Linking.openURL('https://plantinfo.co.za/ARTICLES/HOME-MADE-PEST-CONTROL-REMEDIES/')}>  Plantinfo</Text>
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