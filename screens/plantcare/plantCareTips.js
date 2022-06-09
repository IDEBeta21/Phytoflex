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
          
          {/* Tip 7 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt7')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>

              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardening-ideas-1622735961.jpg?crop=0.711xw:1.00xh;0.154xw,0&resize=980:*'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold' numberOfLines={1}>13 simple gardening tips and how to use flora for mindfulness</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>While all the advice on how to look after your mental health in this unprecedented time can seem overwhelming, we have one word for you: gardening. </PFText>
              </Card.Content>
                
            </Card>
          </Pressable>

            {/* Tip 6 */}
            <Pressable onPress={() => navigation.navigate('PlantCareTipsArt6')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>

              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://images.ctfassets.net/3s5io6mnxfqz/lUAPTlYrt8BSCdIO2HJ0o/70128e29042e7105004554727bb598d7/AdobeStock_338707439.jpeg?fm=jpg&w=1200&fl=progressive'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold' numberOfLines={1}>10 Ways to Care for Your Garden: How to Keep Plants Alive</PFText>
                <PFText weight='light' numberOfLines={1} style={styles.description}>Plant care can be simple when you know what to look for. </PFText>
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

          {/* Tip 8 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt8')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>

              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gardeners-corner-royalty-free-image-527525164-1563060048.jpg?crop=0.655xw:0.980xh;0.0595xw,0.0102xh&resize=980:*'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold' numberOfLines={1}>9 common gardening mistakes — and how you can avoid them</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>Are you guilty of the most common gardening mistakes? From overwatering to not giving plants enough space, these bad habits are putting our beautiful gardens at risk.</PFText>
              </Card.Content>
                
            </Card>
          </Pressable>

          {/* Tip 9 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt9')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>

              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://media.self.com/photos/5ee90a9fec5f7025c4284e5c/4:3/w_2560%2Cc_limit/gardening_vegetables.jpeg'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold' numberOfLines={1}>10 Helpful Gardening Tips That Actually Helped This Former Plant Killer</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>Given our current circumstances—living in an unprecedented global pandemic resulting in much more time spent at home and much more stress when we have to venture to the grocery store—this fantasy is seeming particularly appealing.</PFText>
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

          {/* Tip 10 */}
          <Pressable onPress={() => navigation.navigate('PlantCareTipsArt10')}>
            <Card style={styles.card}
              elevation={3}
              mode={'elevated'}>

              <Card.Cover 
                style={styles.image} 
                source={{uri: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2011/3/17/1/TS-86802365_variety-of-flowerpots_s4x3.jpg.rend.hgtvcom.616.462.suffix/1400963237486.jpeg'}}
              />
                
              <Card.Content style={styles.content}>
                <PFText weight='semi-bold'>14 Simple Gardening Tips and Tricks</PFText>
                <PFText weight='light' numberOfLines={2} style={styles.description}>From using leftover coffee beans to preventing dirt from getting underneath fingernails, master gardener Paul James shares his top 14 tips and shortcuts to make spring gardening a breeze.</PFText>
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





