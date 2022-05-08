import { Text, StyleSheet, View, ScrollView, Image, Button, TouchableOpacity, TextInput, Alert, Pressable } from 'react-native';
import React, { Component  } from 'react';
import {  Avatar, Card, Title, Paragraph } from 'react-native-paper';
import { PFText } from '../../components';
import SampleData from '../../utils/SampleData';


export default function PlantCareTips({navigation}) {
  return (
    
    <View style={ styles.mainContainer }>
      <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          backgroundColor: 'white', 
          paddingTop: 9, 
          paddingBottom: 9,
        }}>

          {/* Tip 1 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt1')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}> 
              
              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/1376232097_time-to-plant.jpg'}}
              />
                
              <Card.Content 
                style={styles.content}>
                <PFText weight='semi-bold'>When To Plant And Transplant</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>Plants grown in containers can be planted out into the garden at any time of the year. This is possible because the root-ball of the plant remains undisturbed when it is planted into the soil.</PFText>
              </Card.Content>
                
            </Card>
          </Pressable>



          {/* Tip 2 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt2')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>  

              <Card.Cover 
                style={styles.image}   
                source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/1376238029_improving-your-soil2.jpg'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold'>Improving Your Soil</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>When cultivating the soil, it is essential to improve its texture and quality on an ongoing basis. Organic matter acts as a soil conditioner, improving the structure, drainage and aeration characteristics of the soil.</PFText>
              </Card.Content>
                
            </Card>
          </Pressable>



          {/* Tip 3 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt3')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>

              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://portlandnursery.com/plants/images/rose/rose-problems/aphids750.jpg'}}   
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold'>Home – Made Pest Control Remedies</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>Gardeners who prefer a totally natural approach can opt for home–made, natural remedies to cover a variety of insect and plant-related problems. Unless indicated otherwise, use as a full cover spray and apply once a week for as long as the problem persists.</PFText>
              </Card.Content>
                
            </Card>
          </Pressable>



          {/* Tip 4 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt4')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>   

              <Card.Cover 
                style={styles.image}   
                source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/Containerized-Hydrangea4.jpg'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold' numberOfLines={1}>When and how you should water containers, pots and containerised plants</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>How often to water containers depends on the plants you grow in them, it’s important to group plants with the same watering requirements together</PFText>
              </Card.Content>
                
            </Card>
          </Pressable>



          {/* Tip 5 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt5')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>

              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://plantinfo.co.za/wp-content/uploads/2020/07/1438161443_bonsai-tree-care.jpg'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold'>Caring Tips For A Bonsai Tree</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>It is a big misconception to many people with regards to bonsai care that it is such a difficult thing to do. The way I like to explain it is like this – we all deal with different people on a daily basis.</PFText>
              </Card.Content>
                
            </Card>
          </Pressable>

      </ScrollView>

    </View>

  );
}



const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
  
  },

  card: {
    borderRadius: 7,
    marginHorizontal: 15,
    marginVertical: 9,
    alignSelf: 'stretch',
    alignContent: 'center',
  },

  content: {
    paddingTop: 12,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  description: {
    lineHeight: 18, 
    paddingTop: 3
  },

  image: {
    borderTopLeftRadius: 7, 
    borderTopRightRadius: 7
  }

  })





