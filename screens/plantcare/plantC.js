import { Text, StyleSheet, View, Image, FlatList, Button, TouchableHighlight, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import React, { Component } from 'react';
import { useState } from 'react';
// import { Button } from 'react-native-elements';
import { PFText } from '../../components';



export default function PlantC({navigation}) {

    // console.log("Module3: Saying hello for the third time!");

  const [monitor] = useState([

    { 
        title: 'Fiddle Leaf Fig Plant', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/gh5e595u5krzc0ajc/best-tall-houseplants-majesty-palm.jpg", 
        key: '1' },

    {
        title: 'Bird of Paradise', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/zlyvx3d5pkrzbpyd1/best-tall-houseplants-snake-plant.jpg", 
        key: '2' },

    {
        title: 'Monstera Obliqua', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/9lqgnndjgkrzbshdk/best-tall-houseplants-parlor-palm.jpg", 
        key: '3' },
    { 
        title: 'Snake Plant', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/ru7ns39jwkrzc1b6b/best-tall-houseplants-elephants-ears.jpg", 
        key: '4' },

    {
        title: 'Philodendron Xanadu', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/9lqgnndjgkrzbshdk/best-tall-houseplants-parlor-palm.jpg", 
        key: '5' },

    { 
        title: 'Echeveria', 
        description: 'Small reddish spots appear on the leaves in the early...',
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/9lqgnndjgkrzbshdk/best-tall-houseplants-parlor-palm.jpg", 
        key: '6' },

    { 
        title: 'Ficus elastica', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/gh5e595u5krzc0ajc/best-tall-houseplants-majesty-palm.jpg", 
        key: '7' },
        
    { 
        title: 'Pothos', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/9lqgnndjgkrzbshdk/best-tall-houseplants-parlor-palm.jpg", 
        key: '8' },

    { 
        title: 'Palms', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/9lqgnndjgkrzbshdk/best-tall-houseplants-parlor-palm.jpg", 
        key: '9' },

    { 
        title: 'Cactus', 
        description: 'Small reddish spots appear on the leaves in the early...', 
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/ru7ns39jwkrzc1b6b/best-tall-houseplants-elephants-ears.jpg", 
        key: '10' },

    { 
        title: 'Sampaguita', 
        description: 'Small reddish spots appear on the leaves in the early...',
        uri: "https://mindbodygreen-res.cloudinary.com/images/dpr_2.0,c_scale,w_671,q_auto,f_auto,fl_lossy/org/ru7ns39jwkrzc1b6b/best-tall-houseplants-elephants-ears.jpg", 
        key: '11' },

  ]);


    return (

        
        <SafeAreaView style={styles.decontainer}>
        <View style={styles.container}>

            <FlatList 
                // numColumns={2} number of columns
                // keyExtractor={(item) => item.id}

                contentContainerStyle={{paddingBottom: 8, paddingTop: 12}}
                showsVerticalScrollIndicator={false}
                data={monitor}
                renderItem={({ item }) => (

                    <TouchableOpacity
                    onPress={() => alert('Hello!')}>
                        
                        
                        <View style={styles.list}>

                                <View style={styles.img}>
                                    <Image source={{uri: item.uri}} style={styles.itemPhoto} resizeMode="cover"/>
                                </View>

                                <View style={styles.txt}>
                                        {/* <Text style={styles.item}>Name: {item.name}</Text> */}
                                    <PFText weight='semi-bold' style={styles.txtItem1}>{item.title}</PFText>
                                    <PFText weight='poppins-regular' style={styles.txtItem2}>{item.description}</PFText>
                                </View>

                                <View style={styles.btn}>
                                    <TouchableOpacity onPress={() => alert('Goodbye!')}>
                                        <View style={styles.btnDone}>
                                            <PFText weight='poppins-regular' style={styles.btnText}>Done</PFText>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                        </View>

                     </TouchableOpacity>

                     

                )}
            />


            {/* <ScrollView>
                { people.map(item => (
                    <View key={item.key}>
                        <Text 
                            style={styles.item}>{item.name}
                        </Text>
                    </View>
                ))}
                
            </ScrollView> */}

      </View>

      
      </SafeAreaView>

      

      
    );     
  }

                            


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 0,
        paddingHorizontal: 10,
        // backgroundColor: 'pink',
        // backgroundColor: '#ffffff',
    },

    item: {
        // backgroundColor: 'pink',

        //m arginTop: 0,
        // padding: 14,
        // fontSize: 30,
        // marginHorizontal: 0,
        // marginTop: 4,
        // marginBottom: 2,
        // borderRadius: 7,
        // fontSize: 14,
        // paddingBottom: 20,
        // paddingTop: 25,
        // textAlign: 'left',
        // fontSize: 14
        // justifyContent: 'space-evenly',
        // alignItems: 'center',
    },

    txtItem1:{
        fontSize: 16,
    },


    txtItem2:{
        fontSize: 14,
    },


    decontainer: {
        flex: 1,
    },


    list: { 

        flexDirection: "row",
        margin: 5, 
        borderRadius: 9,
        backgroundColor: 'white', 
        height: 104,  
        paddingHorizontal: 5,
        elevation: 1, /* shadow effect */
        borderRadius: 12,
       

    },

    img: {
        flex: 1,
             
    },

    txt: {
        flex: 3,
        marginLeft: 10,
        marginTop: 23,
        marginBottom: 26,
        width: 180  ,
        height: 56,
        fontSize: 16,
    },


    itemPhoto: {
        width: 51,
        height: 51,
        marginLeft: 8,
        marginTop: 26,
        marginBottom: 26,
        borderRadius: 360,
    },


    btn: {
        flex: 1,

    },


    btnDone: {
       color: '#639D04',
       width: 57,
       height: 27,           
       marginTop: 38,
       marginBottom: 26,
       borderRadius: 360,   
       borderRadius: 13,
       alignItems: 'center', 
       justifyContent: 'center',
       borderWidth: 1,
       borderColor: '#639D04',
                     
    },


    btnText: {
        textAlign: 'center',
        color: '#639D04',
        fontSize: 14,
    },


    thList: {
        borderRadius: 20,
        
    }
              
        

})