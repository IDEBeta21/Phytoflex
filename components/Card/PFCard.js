import React, {Component, useState, useEffect} from 'react';
import { Dimensions, Pressable, TouchableOpacity, CheckBox, Alert, Text,} from 'react-native';
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

export const PFPostsCard = ({ userPhoto, imageURL, name, description, timeDate, 
  onPress = () => {}},
  onPressImage = () => {},
  onPressReact = () => {},
  onPressText = () => {}, 
  style,
  cardContentStyle) =>  (
    // const [unliked, setLiked2] = useState(false);
    // const [liked, setLiked] = useState(false);
    // const [image, setimage] = useState(null)
    // const [userimage, setuserImage] = useState(null)

    // firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    //   setimage(url);
    // })
  
    // firebase.storage().ref().child(userImage).getDownloadURL().then((url) => {
    //   setuserImage(url);
    // })

    // return (
      <View style={{...styles.cardPostContainer, ...style}}>
        <Card style={{flex: 1}} onPress={() => onPress()}>
          <Card.Cover 
            source={require('../../assets/img/socmed/Cover.png')} 
            style={{
              height: 300,
              width: (Dimensions.get('window').width) * 0.90,
              margin:0,
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
                <View style={{flexDirection: 'row'}}>
                  <Image
                    // FAB using TouchableOpacity with an image
                    // For online image
                    source={ require('../../assets/drawerIcons/socmedIcons/public_green.png')}
                    // For local image
                    //source={require('./images/float-add-icon.png')}
                    style={styles.iconStyle}
                  />
                  <PFText weight='light'size = {10}>{timeDate}</PFText>
                </View>
              </View>
              {/* <View style={styles.followBtnContainer}>
                <PFPrimaryButton title={'+ Follow'} onPress={() => navigation.navigate('')}></PFPrimaryButton>
              </View>         */}
            </View>
            <PFText style ={{padding:10}}>{description}</PFText>

            {/* ReactionSection */}
            <View style={styles.reactContainer}>
              {/* <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                <MaterialCommunityIcons
                  name={liked ? "flower-tulip": "flower-tulip-outline" }
                  size={24} 
                  color={liked ? "#1D4123" : "#1D4123"}
                />
              </Pressable>
              <View style={{paddingRight: 8}}></View>
                <PFText>{bloomQuantity}</PFText>
              </View> */}
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
    // )
  )

export const PFPostsImageOnlyCard = ({ userPhoto, imageURL, name, description, timeDate, onPress = () => {}}, 
  style,
  cardContentStyle) => (
  <View style={{...styles.cardPostContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      <Card.Cover 
        source={require('../../assets/img/socmed/img.png')} 
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
            <View style={{flexDirection: 'row'}}>
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/drawerIcons/socmedIcons/public_green.png')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.iconStyle}
              />
              <PFText weight='light'size = {10}>{timeDate}</PFText>
            </View>
          </View>
          {/* <View style={styles.followBtnContainer}>
            <PFPrimaryButton title={'+ Follow'} onPress={() => navigation.navigate('')}></PFPrimaryButton>
          </View>         */}
        </View>

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
            <View style={{flexDirection: 'row'}}>
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/drawerIcons/socmedIcons/public_green.png')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.iconStyle}
              />
              <PFText weight='light'size = {10}>{timeDate}</PFText>
            </View>
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
        <PFText size={12} style={{textAlign: 'center', textAlignVertical: 'center', paddingTop: 5}}>{name}</PFText>
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
    <Card style={{flex: 1}} onPress={() => onPress()}>
      
      <Card.Cover 
        source={{ uri: image }} 
        style={{
          height: 140,
          width: (Dimensions.get('window').width/2) * 0.87,
          margin: 0,
         // borderTopLeftRadius: 5,
          borderTopRightRadius: 5
        }}
      />

      <Card.Content style={{...styles.cardShopContent, ...cardContentStyle}}>
        <View style={{flexDirection:'row'}}>
          <PFText weight='semi-bold' size={14}>{itemName}</PFText>
          <View style={{...styles.heartReact, alignItems:'center'}}>
            <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
              <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={25}
                color={liked ? "#1D4123" : "#1D4123"}
              />
            </Pressable>
          </View>
        </View>
        <View style={{...styles.textShopContainer}}>
            <PFText size={12}>{category}</PFText>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <PFText color={Colors.secondary} weight='semi-bold' size={15}>P {price}</PFText>
              </View>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <PFText color={Colors.primary} weight='light' size={12}>Sold: {sold}</PFText>
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
          marginTop: 10,
          marginLeft: 15,
          height: 45,
          width: (Dimensions.get('window').width/1) * 0.13,
          borderRadius: 100
        }}
      />

      <Card.Content style={{...styles.cardShopReviewContent}}>
              <View style={{flexDirection:'column'}}>
                <PFText weight='semi-bold' size = {15} style={{marginTop: 10}}>{customerName}</PFText>
                <PFText weight='light' size = {10}>{date}</PFText>
              </View>
      </Card.Content>
       

            </View>
              <StarRating
                rating={rate}
                onChange={setRating}
                starSize={20}
                style={{marginTop: 10, marginLeft: 10}}
                />
              <View style={{alignItems:'flex-start', marginLeft: 11, padding: 5}}>
                <PFText weight='light' style={{width: 300}}>{review}</PFText>
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
          height: 250,
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

{/*export const PFCardForumPost = ({
  imageURL,userName, userImage, badgePoints, dateTime, forumPost, 
  onPress = () => {}, 
  onPressImage = () => {},
  onPressReact = () => {},
  onPressText = () => {},
  style, 
  cardContentStyle}) => (
  <View style={{...styles.cardforumPostContainer, ...style}}>
     <Card.Content style={{...styles.cardForumPostArea2, ...cardContentStyle}}>
    <Card style={{flex: 1, elevation: 0}} onPress={() => onPressImage()}>
      <Card.Cover 
        source={{ uri: imageURL }} 
        style={{
          height: 175,
          width: (Dimensions.get('window').width) * 0.81
        }}
      />
      </Card>
      </Card.Content>
      {/*QuestionCard
    <Card style={{flex: 1, elevation: 0}} onPress = {() => onPressReact()}>
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
                  <Text style={{ color: '#639D04', fontSize: 12, fontFamily: 'poppins-semiBold', textAlign:'center'}}>SOLVED</Text>
                  </View>
              </TouchableOpacity>
            
            </View>
            </View>
    <Pressable onPressText= {() => navigation.navigate('CommentAnswerPage')}>     
        <Card style={{flex: 1, elevation: 0}} onPress={() => onPressText()}>
          <Card.Content style={{...styles.cardForumTextArea1, ...cardContentStyle}}> 
               <PFText style ={{padding:5, textAlign:'justify'}}>{forumPost}</PFText> 
          </Card.Content>
        </Card>
      </Pressable>
    </Card.Content>
  </Card>
    {/*React
    <Card style={{ elevation: 0}} onPress = {() => onPressReact()}>
      <Card.Content style={{...styles.cardForumPostArea1, ...cardContentStyle}}>
        <View style={styles.forumReactContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPressReact={() => navigation.navigate('')}
          >
            <Image
              source={ require('../../assets/drawerIcons/discussionIcons/grow.png')}
              style={styles.forumReactSize}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPressReact={() => navigation.navigate('')}
          >
            <Image
              source={ require('../../assets/drawerIcons/discussionIcons/wither.png')}
              style={styles.forumReactSize}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPressReact={() => navigation.navigate('')}
          >
            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/discussionIcons/more-horizontal.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.forumReactSize}
            />
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  </View>
); */}

export const PFCardForumPost2 = ({ userPhoto, imageURL, userImage, navigation, userName, forumPost, badgePoints, dateTime, bloomQuantity,
  onPress = () => {}, 
  onPressImage = () => {},
  onPressReact = () => {},
  onPressText = () => {},
  style, 
  cardContentStyle}) =>
  
  {
    // adding bloom reacts to firebase

  //   const onLikePress = (userId) => {
  //     const userPosts = firebase.firestore()
  //                               .collection("Question")
  //                               .doc(userId)
                                
          
  //     userPosts.collection("likes")
  //              .doc(firebase.auth().currentUser.uid)
  //              .set({})
  //              .then(() => {
  //                  userPosts.update({
  //                      qstReactQuantity: firebase.firestore.FieldValue.increment(1)
  //                  });
  //              })
  // }
    const [unliked, setLiked2] = useState(false);
    const [liked, setLiked] = useState(false);
    const [image, setimage] = useState(null)
    const [userimage, setuserImage] = useState(null)

  firebase.storage().ref().child(imageURL).getDownloadURL().then((url) => {
    setimage(url);
  })

  firebase.storage().ref().child(userImage).getDownloadURL().then((url) => {
    setuserImage(url);
  })

     return(

      <View style={{...styles.cardforumPostContainer, ...style}}>
    <Card style={{flex: 1, elevation: 0}} onPress={() => onPressImage()}>
      <Card.Cover 
        source={require('../../assets/img/socmed/sc1.png')} 
        style={{
          height: 200,
          width: (Dimensions.get('window').width) * 0.90,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <Card.Content style={{...styles.cardForumPostContent, ...cardContentStyle}}>
        <View style= {{flexDirection:'row'}}>
          <Image 
            source={{uri : userimage}}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              marginRight: 10,
            }}
          />
          <View style={{flexDirection:'column', flexShrink:1}}>
            
            <PFText weight='semi-bold' size = {14}>{userName} 
            <Image source={ require('../../assets/drawerIcons/discussionIcons/award.png')}
              style={styles.forumBadgeSize}/>
            {badgePoints}</PFText>
           {/*<PFText weight='light' size = {10}>{badgePoints}</PFText>*/}
            <PFText weight='light'size = {10}>{dateTime}</PFText>
          </View>
          <View style={styles.followBtnContainer}>
            <PFPrimaryButton title={'Solved'} onPress={() => navigation.navigate('')}></PFPrimaryButton>
          </View>        
        </View>

        
          <Card style={{flex: 1, elevation: 0}} onPress={() => onPress()}>
            <Card.Content style={{...styles.cardForumTextArea1, ...cardContentStyle}}>
              <PFText style ={{padding:5}}>{forumPost}</PFText>
            </Card.Content>
          </Card>
        
        <Pressable onPressText = {() => navigation.navigate('CommentAnswerPage')}>
          <Card style={{flex: 1, elevation: 0}} onPress={() => onPressText()}>
            <Card.Content style={{...styles.cardForumAnswerArea1, ...cardContentStyle}}>
              <PFText weight='semi-bold'size = {13}>View Answer</PFText>
            </Card.Content>
          </Card>
        </Pressable>

        {/* ReactionSection */}
        <View style={styles.forumReactContainer}>
          <View style={{paddingRight: 25, flexDirection:'row'}}>
          <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
            <MaterialCommunityIcons
            name={liked ? "flower-tulip": "flower-tulip-outline" }
            size={24} 
            color={liked ? "#1D4123" : "#1D4123"}
           />
            </Pressable>
            <View style={{paddingRight: 8}}></View>
            <PFText>{bloomQuantity}</PFText>
            
            </View>
           
            <View style={{paddingRight: 120}}>
            <Pressable onPress={() => setLiked2((isLiked) => !isLiked)}>
            <MaterialCommunityIcons
            name={unliked ? "seed" : "seed-outline" }
            size={24} 
            color={unliked ? "#1D4123" : "#1D4123"}
           />
            </Pressable>
            </View>
           
              
       
          <TouchableOpacity
            activeOpacity={0.7}>

            <Image
              // FAB using TouchableOpacity with an image
              // For online image
              source={ require('../../assets/drawerIcons/discussionIcons/more-horizontal.png')}
              // For local image
              //source={require('./images/float-add-icon.png')}
              style={styles.forumReactSize}
            />
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  </View>

     )
  

  }

export const PFCommentCard2 = ({
  userPhoto, name, comment, reactionNum, replyNum, time,
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
    <View style={styles.commentSection2}>
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
        <View style={ styles.container}>
          <TextInput style={styles.commentTxtBox} editable={false}>{comment}</TextInput>
          <View style={ styles.container2}>
            <View style={{flexDirection:'row', borderWidth: 1, borderRadius: 100, borderColor: Colors.primary, margin: 5, marginLeft: 5}}>
              <Image
                // FAB using TouchableOpacity with an image
                // For online image
                source={ require('../../assets/drawerIcons/socmedIcons/bloom_react.png')}
                // For local image
                //source={require('./images/float-add-icon.png')}
                style={styles.commentReactSize}
              />
            </View>
            <View style={{borderWidth: 1, borderRadius: 100, borderColor: Colors.primary, margin: 5, marginLeft: 1}}>
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
        </View>
        <View style={ styles.container }>
          <PFText size={11} onPress={() => navigation.navigate('')} style={{marginLeft: 5}}>{replyNum}  Reply</PFText>
        </View>
      </View>
    </View>
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

export const PFShippingAddressCard =({name, contactNumber, customerAddress}, 
  style, cardContentStyle) => {
    return (
      <View style={styles.shippingAddress}>
        <PFText weight='semi-bold' size={15}>{name}</PFText>
        <PFText size={12}>{contactNumber}</PFText>
        <PFText size={12}>{customerAddress}</PFText>
      </View>
    )
}

export const PFNotifCard = ({userPhoto, notifTitle, notifdetail, onPress = () =>{}},
style, cardContentStyle) => {
  return (
    <View>
      <TouchableOpacity style={styles.notifCard}>
        <Image 
        source={{ uri: userPhoto }}
        style={{
          height: 50,
          width: 50,
          borderRadius: 100,
          margin: 5,
          marginRight: 15
        }} 
        />
        {/* style={{flexDirection: 'column', marginBottom: 0, }} */}
        <View styles={{flexDirection: ' column'}}>
          <PFText weight='semi-bold' size={15}>{notifTitle}</PFText>
          <Text style={{fontFamily: 'poppins-light', fontSize: 12, width: 230}}>{notifdetail}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};





export const PFActiveOrders = ({
  statusIndicator,
  imageURL,
  timePurchase,
  orderIDNo,
  total, 
  items,
  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardActiveOrderContainer, ...style}}>
    <Card style={{flex: 1}} onPress={() => onPress()}>
      
    <View style={{...styles.cardActiveOrder, ...style}}>
    <Card style={{flex: 1, elevation: 0, }} onPress={() => onPress()}>
      <View style= {{flexDirection:'row', alignItems: 'center', }}>
             <Image 
                 source={{ uri: imageURL}}
                  style={{
                  marginTop: 5,
                  height: 100,
                  width: (Dimensions.get('window').width/1) * 0.25,
                 borderRadius: 10 }} />

      <Card.Content style={{...styles.cardActiveOrderContent, ...cardContentStyle}}>
               
              <View style={{ flexDirection:'row', }}> 
              <PFText weight='semi-bold' size = {18}>Order ID: </PFText>
              <PFText weight='semi-bold' size = {18}>{orderIDNo} </PFText>
              </View>
              <View>
              <PFText weight='medium' size = {14}>{timePurchase}</PFText>
             {/*<PFText weight='medium' size = {16}>{items}</PFText> */ }

              <View style={{ flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <PFText weight='medium' size = {14} color = {"green"}> {'\u2B24'} {statusIndicator} </PFText>
              <PFText weight='semi-bold' size = {20} color = {"green"}>{total}</PFText>

              </View>

              </View>
            
      </Card.Content>
           
            </View>   
    </Card>
  </View>
    </Card>
  </View>
);






export const PFTrackOrderDetails = ({
  orderIDLabel, 
  orderIDNo,
  timePurchase,
  custName,
  custcontactNum,
  shipAddress,
  items1,
  quantity1,
  imageURL1,
  price1,
  items2,
  quantity2,
  imageURL2,
  price2,
  deliveryFee,
  subTotal,
  totalPayment,
  


  onPress = () => {}}, 
  style, 
  cardContentStyle) => (
  <View style={{...styles.cardTrackOrderDetailsContainer, ...style}}>
    <Card style={{flex: 1, }} onPress={() => onPress()}>
             
         <Card.Content style={{...styles.cardTrackOrderDetailsContent, ...cardContentStyle}}>
               <View style = {{flexDirection: 'row', flex: 1, justifyContent: 'space-between', marginBottom: 5 }}>
               <PFText   weight='semi-bold' size = {14}>Order ID: </PFText>
               <PFText  paddingRight= {0 }weight='semi-bold' size = {14}>{orderIDNo}</PFText>
              <View style = {{}}>
              <PFText  weight='light' size = {14}>{timePurchase}</PFText>
              </View>
              </View>
              <View>
              <PFText weight='semi-bold' size = {20}>Delivery Status</PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>
              <PFText weight='semi-bold' size = {18}> </PFText>

              </View>
              
              <PFText weight='semi-bold' size = {18}>Order Summary</PFText>
             <View style ={{...styles.orderSummary, ...style}}>
              <PFText  weight='semi-bold' size = {18}>{custName}</PFText>
              <PFText  weight='medium' size = {14}>{custcontactNum}</PFText>
              <View style = {{flex: 1, flexDirection: 'column'}}>
              <PFText  weight='medium' size = {14}>{shipAddress}</PFText>
              </View>
              </View>
              <PFText weight='semi-bold' size = {18}></PFText>

              <PFText weight='semi-bold' size = {18}>Items</PFText>





  
          </Card.Content>
                    
    </Card>
  </View>
    
);




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
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 20
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
  container2: {
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
    marginTop: 20,
    marginLeft: 20
  },
  commentSection2: {
    marginTop: 20,
    marginLeft: 8
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
  notifCard: {
    width: (Dimensions.get('window').width) * 1,
    flexDirection: 'row', 
    padding: 10, 
    backgroundColor: 'rgba(29,65,35,0.2)', 
    marginBottom: 5,
    paddingLeft: 15,
    height: 85,
  },
  iconStyle: {
    height: 12,
    width: 12,
    marginRight: 5,
    marginTop: 2
  },
  //Social Media---------------------------
  shippingAddress: {
    flexDirection: 'column', 
    padding: 15, 
    borderWidth: 1, 
    borderColor: '#1d4123', 
    borderRadius: 5, 
    marginTop: 5
  },
  cardShopContainer: {
    
    marginBottom: 5,
    marginLeft: 12,
    marginStart: 8,
    width: (Dimensions.get('window').width/2) * 0.88,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderRadius: 7,
    
   
  },
  cardShopContent: {
    marginLeft: 0,
    flex: 1,
    padding: 0,
    paddingTop: 2,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7,
    margin: 0,
    width: 140,
  //  borderWidth: 1
    
  },
  textShopContainer: {
    // paddingVertical: 2,
    // flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 0,
    marginTop: 10,
    width: 155,
  //borderWidth:1
  },
  cardShopReview:{
    width: 323,
    borderRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  cardShopReviewContent:{
    marginLeft: 10,
    paddingLeft: 2,

  },
  heartReact: {
    paddingLeft: 0,
    marginLeft: 7,
    marginRight: 3,
    marginTop: 5
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
   
    //backgroundColor: "#D8F9C9",
    borderWidth: 1,
    borderColor: "#639D04",
    paddingTop: 10,
    paddingBottom: 5
  },
  cardForumAnswerArea1: {
    backgroundColor: "#EDFCE7",
    paddingTop: 0.5,
    //borderWidth: 1,
   //borderColor: "#639D04",
    paddingBottom: 4,
    borderBottomLeftRadius: 10, 
    borderBottomRightRadius: 10,
    alignItems: 'flex-end'
  },
  cardForumTextArea1: {
    backgroundColor: "#EDFCE7",
    paddingTop: 0.5,
    paddingBottom: 2,
    //marginBottom: 4,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
    //borderWidth: 1, 
    //borderColor: Colors.primary, 
    //borderBottomLeftRadius: 5,
    //borderBottomRightRadius: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardForumCommentArea1: {
    backgroundColor: "#EDFCE7",
    paddingTop: 0.5,
    paddingBottom: 0.5,
    marginBottom: 4,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    //borderWidth: 1, 
    //borderColor: Colors.primary, 
    //borderBottomLeftRadius: 5,
    //borderBottomRightRadius: 5,
    borderRadius: 10
  },
  cardforumPostContainer: {
    width: (Dimensions.get('window').width) * 0.90,
    marginBottom: 15,
    marginTop: 10,
    //marginLeft: 10
  },
  cardforumCommentContainer: {
    width: (Dimensions.get('window').width) * 0.90,
    marginBottom: 15,
    marginTop: 10,
    //marginLeft: 10
  },
  cardForumPostContent: {
    paddingTop: 15,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  cardForumCommentContent: {
    //paddingTop: 15,
    borderWidth: 1, 
    borderColor: Colors.primary, 
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardForumButtonArea: {
    alignItems: 'flex-end',
    flexGrow:1
  },
  cardForumContentStyle:{
    padding: 2,
  },
  forumReactContainer: {
      flexDirection: 'row', 
      borderWidth: 1, 
      borderRadius: 10, 
      alignItems: 'center', 
      padding: 5,
      paddingLeft: 20,
      marginTop: 10
  },
  forumReactSize: {
    height: 30,
    width: (Dimensions.get('window').width) * 0.10,
    marginRight: 30,
    marginLeft: 20,
    alignItems:'center'
  },
  forumBadgeSize: {
    height: 16,
    width: (Dimensions.get('window').width) * 0.05,
    marginRight: 15,
    marginLeft: 10, 
  }, 
    cardForumPostArea2: {
    //backgroundColor: "#D8F9C9",
    borderWidth: 0.5,
    borderColor: "#639D04",
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    paddingTop: 15,
    paddingBottom: 15
  },

  //ACTIVE ORDERS
  cardActiveOrderContainer:{
    flex: 1,
    marginTop: 10,

  },
  cardActiveOrder: {
    borderRadius: 10,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,

  }, 
  cardActiveOrderContent:{
    justifyContent: "space-evenly",
    width: '65%',
    paddingRight: 0,
    padding: 12,
  },

  cardTrackOrderDetailsContainer:{
    flex:1,
   },
 
   cardTrackOrderDetailsContent:{
     padding: 15,
     marginTop: 0,
     justifyContent: 'space-evenly',
 
   },
   orderSummary:{
     paddingLeft: 15,
     padding:5,
     marginTop: 10,
  //  marginBottom:15,
     borderWidth:1,
     borderRadius:5,
   },
   cardItemsOrderContainer: {
    flex:1,

   },
    cardItemsOrder: {
      flex:1,
  marginStart: 10,
      borderRadius: 10,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    alignContent: 'center',
  //  justifyContent: 'center',

    width: '95%',


  },
    cardItemsOrderContent: {
      paddingLeft: 25,
      margin: 10,

    },
 





})