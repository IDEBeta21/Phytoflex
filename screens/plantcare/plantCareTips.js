import { Text, StyleSheet, View, Image, ScrollView} from 'react-native'
import React, { Component } from 'react'

import { PFText } from '../../components'

export default class PlantCareTips extends Component {
  render() {
    return (
        
        <View style={{padding: 0, paddingTop: 0}}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Image 
                    style={{width: 411, height: 300}}
                    source={require('./../../assets/img/plantcare/tips/garden.jpg')}/>
                </View>
                
                <View style={{paddingHorizontal: 20}}>
                <PFText weight='semi-bold' style={styles.textCont}>Signs That Your Plant Needs Repotting</PFText>
                <PFText style={styles.textContainer}>Public parks aside, getting a dose of nature can be a tricky task during an urban escape. But nature should and can fit into that city getaway according to Kally Ellis, the founder of the London florish company McQueens and the in-house florist for the Maybourne Hotel Group. "Connecting with the natural world wherever you are is a great antidote to jet lag and travel tiredness," she shaid. "Plants and flowers can refresh us, boost our energy and help us recalibrate."</PFText>
                </View>
            </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    textContainer:{
        // padding: 15,
        textAlign: 'justify',
        lineHeight: 22,
        paddingBottom: 20
    },

    textCont:{
        paddingBottom: 20,
        paddingTop: 25,
        textAlign: 'left',
        fontSize: 14
    }

})