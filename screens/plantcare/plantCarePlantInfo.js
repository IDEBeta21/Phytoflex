import { Text, StyleSheet, View, Image, Colors, FlatList, SectionList, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { Button } from 'react-native-elements';

import { PFText } from '../../components';
// import { Section } from 'react-native-paper/lib/typescript/components/List/List'; 
// import Colors from '../../utils/globalColors';




const ListItem = ({item}) => {
    return (


        <View style={styles.item}>
           
            <Image
            source={{uri: item.uri,}}
            style={styles.itemPhoto}
            resizeMode="cover"
            />

            <Text style={styles.itemText}>{item.text}
            </Text>

        </View>

    );
};

export default () => {
    return (
        
        <View style={styles.container}>

            <ScrollView
            showsVerticalScrollIndicator={false}>
      
                <View>
                    <Image 
                        style={{ height: 210,
                                    resizeMode: 'cover'}}
                        source={require('./../../assets/img/plantcare/pc_photo1.png')}/>
                </View>

                        <View>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.fabContainer}
                                // onPress={() => navigation.navigate('Instruction')}
                                onPress={() => alert('Succesfully added to favorites!')}>

                                <Image
                                source={ require('../../assets/img/plantcare/icn_heart.png')}
                                style={styles.fabImage}
                                />
                            </TouchableOpacity>
                        </View>

                {/* Container ng mga text */}
                 <View style={styles.plantDetails}>

                     
                      

                        <PFText weight='semi-bold' style={styles.textCont}>Cactus</PFText>


                        <View style={styles.row}>
                                <View style={styles.textCategory1}>
                                    <PFText weight='semi-bold'>Kingdom</PFText>  
                                    <PFText weight='medium' style={styles.txtMargin}>Plantae</PFText>
                                </View>

                                <View style={styles.textCategory2}>
                                    <PFText weight='semi-bold'>Family     </PFText>   
                                    <PFText weight='light' style={styles.txtMargin}>Amaranthaceae</PFText>
                                </View>
                        </View>

                       

                        <View style={styles.plantDes}>
                            <PFText weight='semi-bold'>Description</PFText>
                            <PFText weight='light' style={styles.txtDescription}>Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). It is not known by whom, or when, spinach was introduced to India, but the plant was subsequently introduced to ancient China, where it was known as "Persian vegetable". Spinach is thought to have originated in ancient Persia (modern Iran and neighboring countries). It is not known by whom, or when, spinach was introduced to India, but the plant was subsequently introduced to ancient China, where it was known as "Persian vegetable".</PFText>
                        </View>

                 </View>
                  {/* end of Container ng mga text */}


                <View style={styles.flContainer}>
                    <StatusBar style="light" />
                    <SafeAreaView style={{ flex: 1 }}>
                        <SectionList
                            contentContainerStyle={{paddingHorizontal: 0}}
                            stickySectionHeadersEnabled={false}
                            sections={SECTIONS}

                        //For header
                        renderSectionHeader={({section}) => (
                          <>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                              {section.horizontal && (
                               <FlatList style={styles.flImage}

                                    // removeClippedSubviews={false}
                                    contentContainerStyle={{paddingHorizontal: 9}}
                                    showsHorizontalScrollIndicator={false}
                                    data={section.data}
                                    horizontal
                                    renderItem={({item}) => {
                                        return <ListItem item={item} />;
                                    }}
                                />
                                )}
                                </>
                                )}
                                // items
                                renderItem={({item, section}) => {
                                    if (section.horizontal){
                                        return null;
                                    }
                                    return <ListItem item={item} />;
                                }}
                            />

                    </SafeAreaView>
                </View>

                

            </ScrollView>

            <View style={styles.btnBG}>
                   <TouchableOpacity onPress={() => alert('Haluu!')}>
                       <View style={styles.btnMonitor}>
                           <Text style={{ color: 'white', fontSize: 18, fontFamily: 'poppins-semiBold'}}>Monitor this plant</Text>
                        </View>
                   </TouchableOpacity>
           </View>
               
        </View>
    );
};

const SECTIONS = [
    {
        // title: "Made for you",
        horizontal: true,
        data: [
            {
                key: "1",
                //text: "Item text 1",
                uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/gh5e595u5krzc0ajc/best-tall-houseplants-majesty-palm.jpg",
            },

            {
                key: "2",
                //text: "Item text 2",
                uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/zlyvx3d5pkrzbpyd1/best-tall-houseplants-snake-plant.jpg",
            },

            {
                key: "3",
                //text: "Item text 3",
                uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/9lqgnndjgkrzbshdk/best-tall-houseplants-parlor-palm.jpg",
            },

            {
                key: "4",
                //text: "Item text 4",
                uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/ru7ns39jwkrzc1b6b/best-tall-houseplants-elephants-ears.jpg",
            },

        ],
    },
];



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff", 
        paddingHorizontal: 0,
        // #f5f3f2
        // #cbbec3
    },

    flContainer: {
        flex: 1,
       backgroundColor: "#ffffff", 
       paddingHorizontal: 0,
      //paddingRight: 5,
       // #f5f3f2
       // #cbbec3
   },

    sectionHeader: {
        fontWeight: "800",
        fontSize: 8, 
        color: "#f4f4f4",
        marginTop: 2,
        marginBottom: 2, 
    },

    item: {
        margin: 5,
        borderColor: '#000000',
        // fontSize: 18,
        //paddingHorizontal: 2,
        
    },

    itemText: {
        color: "#e5cce5",
        fontSize: 9,
    },

    itemPhoto: {
        width: 150,
        height: 150,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },

    plantDetails: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 12,
    },

    textCont: {
        fontSize: 28,

    },

    row: {
        
        flexDirection: 'column',
      },


    textCategory1: {
        flexDirection: 'row',

    },

    textCategory2: {
        flexDirection: 'row',
 

    },

    plantDes: {
        flex: 1,
        paddingTop: 20,

    }, 

    txtDescription: {
        textAlign: 'justify',
        lineHeight: 22,
        paddingBottom: 2,        
        textAlign: 'justify',
        // margin: 20,
    },

    btnBG: {
        // color: '#f7f7f7',
        height: 64,   
        backgroundColor: '#ffffff',   
        // borderWidth: 1,
        // D5D0CE 
        // #f7f7f7
        //aliceblue
        //#F2D7F1
        //skyblue

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 12,

    },


    btnMonitor: {
        marginTop: 8,
        padding: 10,
        marginStart: 14,
        marginEnd: 14,
        height: 47,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#639D04',
        borderRadius: 30,

        borderColor: 'rgb(0, 0, 0)',     
    },

    flImage: {
        // marginHorizontal: 9,
        
    },

 
    fabContainer: {
        // backgroundColor: 'white',
        

        backgroundColor: '#FF6262',
        position: 'absolute',
        width: 57,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',    
        borderRadius: 35,
        shadowColor: "black",

        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 0,
        elevation: 10,

        // position: 'absolute',
        // margin: 23,
        // right: 0,
        // bottom: 0,
        // backgroundColor: '#F5F7FA',

        // marginTop: -28,
        // marginLeft: 284,
        // marginRight: 0,
        // marginBottom: 0,


      
        //Align to right
        position: 'absolute',
        right: 0,
        marginRight: 12,
         marginTop: -28,

        // alignSelf: 'flex-end'







        // marginTop: 253,
        // marginLeft: 343,
      },

      fabImage: {
        // marginTop: 7,
        resizeMode: 'contain',
        width: 25,
        height: 25,
        //backgroundColor:'black'
      },


    btnFloat:{

        flex: 1,
            // alignItems: 'flex-end',
            // justifyContent: 'right',
            // right: 0,
            // textAlign: 'right',
            // alignSelf: 'flex-end',
            // alignItems: 'flex-end'

            // flexDirection: 'row', 
            // marginLeft: 'auto',

      },

      txtMargin:{
          marginLeft: 24,
      }



})