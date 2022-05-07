import React, {Component, useState, useEffect} from 'react';
import { Dimensions, Pressable, TouchableOpacity, CheckBox, Alert, Text} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { PFText } from '../PFText';
import Colors from '../../utils/globalColors';
import StarRating from 'react-native-star-rating-widget';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import firebase from 'firebase';
import { PFSecondaryButton } from '../Button/PFSecondaryButton';
import { PFPrimaryButton } from '../Button/PFPrimaryButton';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const PFCard = ({
  imageURL, 
  description, 
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={require('../../assets/logo.png')} 
        style={{
          height: 140,
          width: (Dimensions.get('window').width/2) * 0.90,
          margin: 4,
          borderRadius: 8
        }}
      />
      <Card.Content style={{...styles.cardContent, ...cardContentStyle}}>
        <PFText>{description}</PFText>  
      </Card.Content>
      
    </Card>
  </View>
);

export const PFPostsCard = ({ userPhoto, imageURL, name, description, timeDate, onPress = () => {}}, 
  style,
  cardContentStyle) => (
  <View style={{...styles.cardPostContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      <Card.Cover 
        source={require('../../assets/img/socmed/sc1.png')} 
        style={{
          height: 300,
          width: (Dimensions.get('window').width) * 0.90,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}
      />
      <Card.Content style={{...styles.cardPostContent, ...cardContentStyle}}>
        <View style= {{flexDirection:'row'}}>
          <Image 
            source={require('../../assets/logo.png')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              marginRight: 10
            }}
          />
          <View style={{flexDirection:'column', flexShrink:1}}>
            <PFText weight='semi-bold' size = {14}>{name}</PFText>
            <PFText weight='light'size = {10}>{timeDate}</PFText>
          </View>
          {/* <View style={styles.followBtnContainer}>
            <PFPrimaryButton title={'+ Follow'} onPress={() => navigation.navigate('')}></PFPrimaryButton>
          </View>         */}
        </View>
        <PFText style ={{padding:10}}>{description}</PFText>

        {/* ReactionSection */}
        <View style={styles.reactContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('')}
          >
            <Image
              source={ require('../../assets/drawerIcons/socmedIcons/bloom_react.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('CommentPage')}
          >
            <Image
              source={ require('../../assets/drawerIcons/socmedIcons/comments.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('')}
          >
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/socmedIcons/more_icon.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  </View>
);

export const PFPostsNoImageCard = ({
  name, description, timeDate, 
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardPostContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => navigation.navigate('PostPage')}>
      <Card.Content style={{...styles.cardPostContent1, ...cardContentStyle}}>
        <View style= {{flexDirection:'row'}}>
          <Image 
            source={require('../../assets/logo.png')}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              marginRight: 10
            }}
          />
          <View style={{flexDirection:'column', flexShrink:1}}>
            <PFText weight='semi-bold' size = {14}>{name}</PFText>
            <PFText weight='light'size = {10}>{timeDate}</PFText>
          </View>       
        </View>
        <PFText style ={{padding:10}}>{description}</PFText>

        {/* ReactionSection */}
        <View style={styles.reactContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('')}
          >
            <Image
              source={ require('../../assets/drawerIcons/socmedIcons/bloom_react.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('')}
          >
            <Image
              source={ require('../../assets/drawerIcons/socmedIcons/comments.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('')}
          >
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/socmedIcons/more_icon.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.reactSize}
            />
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  </View>
);

export const PFCommentCard = ({
  userPhoto, name, comment, reactionNum, replyNum, time,
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
    <View style={styles.commentSection}>
    <View style={ styles.container }>
      <Image
        // FAB using TouchableOpacity with an image
        // For online image
        source={{ uri: userPhoto }}
        // For local image
        //source={require('./images/float-add-icon.png')}
        style={styles.userPhoto1}
      />
      <View styles={{flexDirection: 'column'}}>
      <View style={ styles.container }>
      <PFText weight='semi-bold' size={13}>{name}</PFText>
          <PFText weight='semi-bold' size={10} style={{marginLeft: 8, marginTop: 3}}>•</PFText>
          <PFText size={10} style={{marginLeft: 8, marginTop: 3}}>{time}</PFText>
        </View>
        <View style={ styles.container }>
          <TextInput style={styles.commentTxtBox} editable={false}>{comment}</TextInput>
            <View style={{borderWidth: 1, borderRadius: 100, borderColor: Colors.primary, margin: 5, marginLeft: 10}}>
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/drawerIcons/socmedIcons/bloom_react.png')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.commentReactSize}
              />
            </View>
        </View>
        <View style={ styles.container }>
          <PFText size={11} onPress={() => navigation.navigate('')} style={{marginLeft: 5}}>{replyNum}  Reply</PFText>
        </View>
      </View>
    </View>
  </View>
);

export const PFFriendCard = ({
  userPhoto, name,
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
    <View style={{height: 150, marginTop: 10, width: 110}}>
      <View style={ styles.conFollow }>
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={{uri: userPhoto}}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={{height: 40, width: 40, borderRadius: 100}}
        />
        <PFText size={12} weight={'semi-bold'} style={{textAlign: 'center', textAlignVertical: 'center', paddingTop: 5}}>{name}</PFText>
        <TouchableOpacity onPress={() => gotoHome()}>
          <View style={styles.guestButtonArea}>
            <Text style={{ color: '#1d4123', fontSize: 10, fontFamily: 'poppins-regular'}}>Following</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
);

export const PFCardShop = ({imageURL, category, itemName, price, quantity, sold, onPress = () => {}}, 
style, cardContentStyle) => {

  const [image, setimage] = useState(null)
  //heart react 
  const [liked, setLiked] = useState(false);
  

    firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
      setimage(url);
    })

    return(


      <View style={{...styles.cardShopContainer, ...style}}>
    <Card stye={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={{ uri: image }} 
        style={{
          height: 140,
          width: (Dimensions.get('window').width/2) * 0.90,
          margin: 2,
          borderRadius: 8
        }}
      />

      <Card.Content style={{...styles.cardShopContent, ...cardContentStyle}}>
        <View style={{flexDirection:'row'}}>
        <PFText weight='semi-bold'>{itemName}</PFText>
        <View style={{...styles.heartReact, alignItems:'center'}}>
        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
       <MaterialCommunityIcons
        name={liked ? "heart" : "heart-outline"}
        size={17}
        color={liked ? "#1D4123" : "#1D4123"}
      />
    </Pressable>
        </View>
       
        </View>
        <View style={{...styles.textShopContainer}}>
           
            <PFText weight='semi-bold'>{category}</PFText>
            <View style={{flex:1, flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <PFText color={Colors.secondary} weight='semi-bold'>P {price}</PFText>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <PFText color={Colors.primary} weight='light'>sold {sold}</PFText>
              </View>
            </View>
        </View>

      </Card.Content>
      
    </Card>
  </View>

    )
  
  

}
  
  


export const PFCardShopCategory = ({imageURL, category, onPress = () => {}}, style, cardContentStyle) => (
  <View style={{...styles.cardShopContainer, ...style}}>
    <Card stye={{flex: 1}} onPress={() => onPress()}>


      
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{
          height: 60,
          width: (Dimensions.get('window').width/4) * 0.90,
          margin: 2,
          borderRadius: 8
        }}
      />

      <Card.Content style={{...styles.cardShopContent, ...cardContentStyle}}>
        
        <View style={{...styles.textShopContainer}}>
            <PFText weight='semi-bold'>{category}</PFText>
        </View>

      </Card.Content>
      
    </Card>
  </View>
);

export const PFCardShopReviews = ({imageURL, review, date, customerName, rate, onPress = () => {}}, style, 
cardContentStyle) => {

  const [image, setimage] = useState(null)

  const [rating, setRating] = useState(0);

  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  return(

    <View style={{...styles.cardShopReview, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      <View style= {{flexDirection:'row'}}>
     
      <Image 
        source={{ uri: image}}
        style={{
          marginTop: 8,
          height: 50,
          width: (Dimensions.get('window').width/1) * 0.15,
          borderRadius: 100
        }}
      />

      <Card.Content style={{...styles.cardShopReviewContent}}>
              <View style={{flexDirection:'column'}}>
              <PFText weight='semi-bold' size = {18}>{customerName}</PFText>
              <PFText weight='light'>{date}</PFText>
              <StarRating
              rating={rate}
              onChange={setRating}
              starSize={20}
               />
               </View>
      </Card.Content>
       

            </View>
      
               <View style={{alignItems:'flex-start'}}>
               <PFText weight='light'>{review}</PFText>
               </View>
    </Card>
  </View>

  )
}

export const PFCardProduct = ({imageURL, onPress = () =>{}}, style) => {
  const [image, setimage] = useState(null)

  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  return(
      <Image 
        source={{ uri: image}}
        style={{
          height: 300,
          width: (Dimensions.get('window').width/1) * 1,
          
        }}
      />

  )
};


export const PFCardShopCartItems = ({imageURL, itemName, price, onAdd, onSubtract,  onPress = () => {}}, style, 
cardContentStyle) => {

 
  
  
  const [isSelected, setSelection] = useState(false);

   //IncrementDecrement
   const [counter, setCounter] = useState(1);
   const incrementCounter = () => setCounter(counter + 1);
   let decrementCounter = () => setCounter(counter - 1);
 
   if(counter<=0) {
     decrementCounter = () => setCounter(1);
   }

   

  

  const [image, setimage] = useState(null)


  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  return(

    <View style={{...styles.cardShopCrateArea, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      <View style= {{...styles.cardShopCrateContent, flexDirection:'row'}}>
        <View style={{...styles.checkBoxArea}}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          
        />
          
        </View>
      <Image 
        source={{ uri: image}}
        style={{
          marginTop: 8,
          height: 63,
          width: (Dimensions.get('window').width/1) * 0.15,
          borderRadius: 8
        }}
      />

      <Card.Content style={{...styles.cardShopCrateContent}}>
              <View style={{...styles.buttonAlignment, flexDirection:'row'}}>
              <PFText weight='semi-bold' size = {12.5}
               style={{ flex: 1, textAlign: 'justify', marginLeft: 1}}
               numberOfLines={2} 
              >{itemName}</PFText>
              <View style={{...styles.cartDeleteButtonArea}}>
            
              <Pressable onPress={() => Alert.alert('Remove')}>
            <Image
              style={{...styles.headerIcons}}
              source={require('../../assets/drawerIcons/shopIcons/Delete.png')}
              resizeMode='contain'
            />
            </Pressable>
            </View>
               </View>
               <View style={{...styles.buttonAlignment, flexDirection:'row'}}>
               <TouchableOpacity onPress={() => decrementCounter()}>
            <View style={{...styles.buttonDesign, alignItems:'center'}}>
            <PFText weight='semi-bold' size = {15}>-</PFText>
            </View>
          </TouchableOpacity>



          <View style={{...styles.quantityArea, alignItems:'center'}}>
          <PFText weight='semi-bold'>{counter}</PFText>
          </View>
        
          
          <TouchableOpacity onPress={onAdd}>
             <View style={{...styles.buttonDesign, alignItems:'center'}}>
            <PFText weight='semi-bold' size = {15}>+</PFText>
            </View>
          </TouchableOpacity>
          <View style={{...styles.cartPriceArea}}>
          <PFText color={Colors.secondary} weight='semi-bold'>P{price}</PFText>
          <PFText color={Colors.secondary}>{global.getPrice = isSelected ? price : ""}</PFText>
          </View>
          </View>
      </Card.Content>     
       </View>         
    </Card>
   
  
  </View>
  
  )
}

export const PFCardForumPost1 = ({imageURL, userName, userImage, badgePoints, dateTime, forumPost,  onPress = () => {}}, style, 
cardContentStyle) => {

 
  const [image, setimage] = useState(null)


  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  return(

    <View style={{...styles.cardForumPostArea, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      <View style= {{...styles.cardForumPostArea, flexDirection:'column'}}>
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{
          height: 300,
          width: (Dimensions.get('window').width) * 0.90
        }}
      />

      <Card.Content>
      
       <View style={{...styles.cardForumContentStyle, flexDirection:'row'}}>
                  <Image 
                      source={{ uri: userImage}}
                      style={{
                        marginTop: 10,
                        height: 52,
                        width: (Dimensions.get('window').width/1) * 0.15,
                        borderRadius: 100
                      }}
                    />
             <View  >
             <PFText weight='semi-bold' size = {12.5}
              >{userName}</PFText>
              <PFText weight = 'light' size = {12.5}>{badgePoints}</PFText>
              <View style={{...styles.cardForumButtonArea}}>
              <TouchableOpacity>
                  <View style={styles.buttonArea}>
                  <Text style={{ color: '#639D04', fontSize: 12, fontFamily: 'poppins-semiBold', textAlign: 'center'}}>SOLVED</Text>
                  </View>
                  </TouchableOpacity>
            
            </View>
             </View>
            
               </View>
              <PFText weight='light'>{forumPost}</PFText>
      </Card.Content>     
       </View>         
    </Card>
  </View>
  )
};

export const PFCardForumPost = ({
  imageURL, userName, userImage, badgePoints, dateTime, forumPost, 
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardPostContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{
          height: 300,
          width: (Dimensions.get('window').width) * 0.90
        }}
      />
      <Card.Content style={{...styles.cardForumPostArea, ...cardContentStyle}}>
      <View style= {{flexDirection:'row'}}>
      <Image 
        source={{ uri: imageURL}}
        style={{
          height: 50,
          width: (Dimensions.get('window').width/1) * 0.14,
          borderRadius: 100,
          marginRight: 10
        }}
      />
       <View style={{flexDirection:'column'}}>
         
            <PFText weight='semi-bold' size = {15}>{userName}</PFText>
            <PFText weight='light'size = {12}>{dateTime}</PFText>
       </View>
       <View style={{...styles.cardForumButtonArea}}>
              <TouchableOpacity>
                  <View style={styles.buttonArea}>
                  <Text style={{ color: '#639D04', fontSize: 12, fontFamily: 'poppins-semiBold', textAlign: 'center'}}>SOLVED</Text>
                  </View>
                  </TouchableOpacity>
            
            </View>
       
      </View>
        <PFText style ={{padding:10}}>{forumPost}</PFText> 
      </Card.Content>
      
    </Card>
  </View>
);

export const PFCartImage = ({imageURL, onPress = () =>{}}, style) => {
  const [image, setimage] = useState(null)

  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  return(
    <Image 
    source={{ uri: image}}
    style={{
      marginTop: 8,
      height: 63,
      width: (Dimensions.get('window').width/1) * 0.15,
      borderRadius: 8
    }}
  />


  )
};





const styles = StyleSheet.create({
  // Social Media----------------------------
  reactContainer: {
    flexDirection: 'row', 
    borderWidth: 1, 
    borderRadius: 30, 
    alignItems: 'center', 
    padding: 5,
    paddingLeft: 20
  },
  userImage: {
    height: 30,
    width: (Dimensions.get('window').width) * 0.10
  },
  reactSize: {
    height: 30,
    width: (Dimensions.get('window').width) * 0.10,
    marginRight: 30,
    marginLeft: 20
  },
  followBtnContainer:{
    alignItems: 'flex-end',
    flexGrow:1
  },
  cardContainer: {
    marginLeft: 8, 
    width: (Dimensions.get('window').width/2) * 0.93
  },
  cardContent: {
    paddingTop: 10,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,
   
  },
  cardPostContainer: {
    width: (Dimensions.get('window').width) * 0.90,
    marginBottom: 15,
    marginTop: 10
  },
  cardPostContent: {
    paddingTop: 15,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  cardPostContent1: {
    paddingTop: 15,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderRadius: 20
  },
  mainContainer: {
    margin: 5,
    paddingTop: 10,
    paddingLeft: 20
  },
  userPhoto: {
    height: 40,
    width: 40,
    borderRadius: 100
  },
  userPhoto1: {
    height: 35,
    width: 35,
    borderRadius: 100,
    marginRight: 10
  },
  container: {
    flexDirection:'row'
  },
  reactContainer: {
    flexDirection: 'row', 
    borderWidth: 1, 
    borderRadius: 30, 
    alignItems: 'center', 
    padding: 5,
    paddingLeft: 20,
    marginTop: 10
  },
  reactSize: {
    height: 30,
    width: (Dimensions.get('window').width) * 0.10,
    marginRight: 30,
    marginLeft: 20
  },
  commentReactSize: {
    height: 20,
    width: 20,
    margin: 4
  },
  commentSection: {
    marginTop: 10
  },
  commentTxtBox: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    width: 230,
    height: 40,
    fontFamily: 'poppins-light',
    color: '#1D4123',
    fontSize: 13,
    padding: 10
  },
  conFollow: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
    marginRight: 10
  },
  guestButtonArea: {
    height: 25,
    width: 80,
    borderRadius: 100,
    
    alignItems: 'center', 
    justifyContent: 'center',
    
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    borderWidth: 1,
    borderColor: '#1d4123',
    fontFamily: 'poppins-regular',
    marginTop: 8
  },
  //Social Media---------------------------
  cardShopContainer: {
    
    marginBottom: 5,
    marginLeft: 4,
    width: (Dimensions.get('window').width/2) * 0.93,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderRadius: 7,
   
    
  },
  cardShopContent: {
    marginLeft: 0,
    flex: 1,
    padding: 0,
    paddingTop: 0,
    paddingBottom: 6,
    paddingLeft: 7,
    margin: 0
  },
  textShopContainer: {
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 0,
  },
  cardShopReview:{
    width: 600,
    backgroundColor:'#639D04'
  },
  cardShopReviewContent:{
    marginLeft: 10,
    paddingHorizontal: 15,
    paddingLeft: 2
  },
  heartReact: {
    paddingLeft: 0,
    marginLeft: 1,
  
  },
  buttonAlignment:{
    marginBottom: 0,
    paddingLeft: 1,
    
  },
  buttonDesign:{

    padding: 5,
    width: 30,
    height: 30,
    backgroundColor: "#D3E4B9",
    borderRadius: 10,
  },
  quantityArea:{
   
    padding: 5,
    width: 35,
    height: 43,
   
  },
  cardShopCrateArea:{
    flex: 1,
    marginBottom: 10,
    width: 335,
    height:95,
    borderWidth: 1,
    borderColor: "#1D4123",
    borderRadius: 3,
    
    
  },

  cardShopCrateContent:{
    padding: 1, 
    marginTop: 5
  },
  cartPriceArea:{
    marginStart: 80,
    padding: 5
  },
  cartDeleteButtonArea:{
    marginStart: 20,
    padding: 5
  },
  checkBoxArea: {
    padding: 1,
    paddingTop: 17
  },
  headerIcons:{
    height: 24, 
    width: 24, 
    
  },
  //Discussion Design

  cardForumPostArea: {
   
    backgroundColor: "#D8F9C9",
  
    paddingTop: 10,
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10
  },
  cardForumButtonArea: {
    width: 80,
    height: 21,
    borderWidth: 1,
    borderColor: "#639D04",
    borderRadius: 10,
    backgroundColor: '#D8F9C9',
    marginStart: 30


  },
  cardForumContentStyle:{
    padding: 2,
  }
})