import { Button, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Alert, FlatList, Pressable, ViewPropTypes} from 'react-native';
import React, { Component, useState } from 'react';
import { Portal } from 'react-native-paper';
import { globalStyles } from './globalStyles';


// global import
import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton,
  PFFlatList, 
  AccountListItem, PlantListItem, AddressListItem, BadgeHistoryListItem, MessagaNotifItem,
  PFCard, 
  PFSwitch
} from '../../components';

import Colors from '../../utils/globalColors';

import SampleData from '../../utils/SampleData';

import { DrawerContent } from './Drawer';

import { ScrollView } from 'react-native-gesture-handler';

export default function ComponentsSample({navigation}) {
  // Calling Plantcare search screen
  // Modals
  const [loginVisible, setloginVisible] = useState(false)
  const [confirmVisible, setconfirmVisible] = useState(false)
  const [alertVisible, setalerVisible] = useState(false)

  const [popupvisible, setpopupvisible] = useState(false)

  // TextInput
  const [inpText, setinpText] = useState("")

  // Switch
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);


  return (
    <View style={ styles.mainContainer }>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.searchBoxContainer}>
        <Image
          style={styles.searchBoxIcon}
          source={require('../../assets/drawerIcons/plantCareIcons/search.png')}
          resizeMode='contain'
        />
        <TextInput
          style={{fontSize: 15, fontFamily: 'poppins-regular', flex: 1}}
          placeholder='Search'
        />
      </View>

      <PFTextInput
        mode='flat'
        label='Text Input Here'
        onChangeText={setinpText}
        // disabled={disabled}
      />
      <PFTextInput
        mode='flat'
        label='Text Input Here'
        onChangeText={setinpText}
        // disabled={disabled}
      />

      <PFText style={ styles.titleText } color={Colors.primary} weight={'italic'}>
        This is the Plant Care Main Page
      </PFText>

      <Text style={ styles.paragraphText }>
        Open up plantCareHomePage.js to start working on your app!
      </Text>

      {/* <Button onPress={() => toPlantCareSearch()} title="Plant Care Search"></Button> */}
      <Button 
        onPress={
          // () => navigation.navigate('PlantCareSearch')
          // () => this.props.navigation.dispatch(navigation.openDrawer())
          () => setloginVisible(true)
        } 
        title="Login">
      </Button>

      <Text></Text>

      <Button 
        onPress={
          // () => navigation.navigate('PlantCareSearch')
          // () => this.props.navigation.dispatch(navigation.openDrawer())
          () => setconfirmVisible(true)
        } 
        title="Confirmation">
      </Button>

      <Text></Text>
      
      <Button 
        onPress={
          () => setalerVisible(true)
        } 
        title="Alert">
      </Button>

      <Text></Text>

      <Button 
        onPress={
          () => setpopupvisible(true)
        } 
        title="Popup Menu">
      </Button>

      <Text></Text>

      {/* <PFFlatListFollower
        data={SampleData.userList}
        renderItem={({item}) => (
          <PFText>{item.fName}</PFText>
        )}
      /> */}

      <PFPrimaryButton
        icon={"account-circle"}
        bordered={false}
        style={{padding: 10}}
        onPress={() => Alert.alert("Hello")}
        title={"PF Primary Button"}
        roundness={30}
      ></PFPrimaryButton>
      
      <Text></Text>
      
      <PFSecondaryButton
        style={{padding: 10}}
        onPress={() => Alert.alert("Hello")}
        title={"PF Primary Button"}
        roundness={10}
      ></PFSecondaryButton>

      <Text></Text>

      <PFFlatList
        noDataMessage='No Followers'
        data={SampleData.follower}
        renderItem={(item) => (
          <Pressable onPress={() => Alert.alert(item.fName)}>
            <Text 
              style={{
                color: 'black', padding: 10, margin: 2,
                paddingVertical: 20, borderRadius: 12, 
                borderWidth: 1, borderColor: 'green', 
              }}
            >
                {item.fName} {item.lName}
              
            </Text>
          </Pressable>
        )}
        keyExtractor={item => item.id}
      />

      <Text></Text>
      
      <View>
        <PFFlatList
          numColumns={2}
          noDataMessage='No Followers'
          data={SampleData.cardData}
          renderItem={(item) => (
            <PFCard 
              imageURL={item.imageURL}
              description={item.description}
              onPress={() => Alert.alert(item.name)}/>
          )}
          keyExtractor={(item,index) => index}
        />
      </View>

      <Text></Text>

      {/* Flatlist for accounts */}
      <View>
        <PFFlatList
          numColumns={1}
          noDataMessage='Nothing here'
          data={SampleData.userList}
          renderItem={(item) => (
            <AccountListItem 
              imageURL={item.imageURL}
              accountName={item.fName + ' ' + item.lName}
              onPress={() => Alert.alert(item.fname)}
            />
          )}
          keyExtractor={(item,index) => index}
        />
      </View>
      

      {/* <PFCard></PFCard> */}
      <Text></Text>

      {/* Flatlist for itemlist for shop */}
      <View style={{borderWidth: 1, borderColor: 'black', margin: 5, padding: 5, borderRadius: 7}}>
        <PFFlatList
          numColumns={1}
          noDataMessage='No Plant item to post'
          data={SampleData.itemList}
          renderItem={(item) => (
            <PlantListItem 
              imageURL={item.imageURL}
              itemName={item.itemName}
              category={item.category}
              price={item.price}
              quantity={item.quantity}
              onPress={() => Alert.alert(item.itemName)}
            />
          )}
          keyExtractor={(item,index) => index}
        />
      </View>


      {/* Flatlist for itemlist as card for shop */}
      <View>
        <PFFlatList
          numColumns={2}
          noDataMessage='No Plant to Post'
          data={SampleData.itemList}
          renderItem={(item) => (
            <PlantListItem 
              CardList
              imageURL={item.imageURL}
              itemName={item.itemName}
              category={item.category}
              price={item.price}
              sold={item.sold}
              onPress={() => Alert.alert(item.itemName)}
            />
          )}
          keyExtractor={(item,index) => index}
        />
      </View>

      <Button 
        onPress={
           () => navigation.navigate('PlantCareTips')
          // () => this.props.navigation.dispatch(navigation.openDrawer())
          //() => setalerVisible(true)
        } 
        title="Tips">
      </Button>
      
      {/* Switch */}
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <PFText weight='regular'>Push Notification</PFText>
        </View>
        <PFSwitch 
          style={{flex: 1}}
          value={isSwitchOn}
          onValueChange={onToggleSwitch}/>
      </View>
      

      {/* Address list */}
      <View>
        <PFFlatList
          // numColumns={1}
          noDataMessage='No Address Saved Yet'
          data={SampleData.address}
          renderItem={(item) => (
            <AddressListItem 
              onEditPress={() => Alert.alert('Edit pressed')}

              defaultAddress={item.defaultAddress} 
              city={item.city}
              contactNumber={item.contactNumber}
              address={item.address}
            />
          )}
          keyExtractor={(item,index) => index}
        />
      </View>

      
      {/* Badge History */}
      <View>
        <PFFlatList
          // numColumns={1}
          noDataMessage='Nothing here'
          data={SampleData.badgeHistory}
          renderItem={(item) => (
            <BadgeHistoryListItem 
              points={item.points}
              message={item.message}
            />
          )}
          keyExtractor={(item,index) => index}
        />
      </View>

      {/* Message Notification List */}
      <View>
        <PFFlatList
          // numColumns={1}
          noDataMessage='Nothing here'
          data={SampleData.messageNotif}
          renderItem={(item) => (
            <MessagaNotifItem 
              imageURL={item.imageURL}
              senderName={item.name}
              messagePreview={item.messagePreview}
              timeRecieved={item.timeRecieved}

              onProfilePress={() => Alert.alert('Profile Picture Pressed')}
              onMessagePress={() => Alert.alert('Message Pressed')}
              onDeletePress={() => Alert.alert('Delete Button Pressed')}
            />
          )}
          keyExtractor={(item,index) => index}
        />
      </View>







      <PFModalLogin
        title={"SUCCESSFUL"} 
        message={"Transaction Succeeded"} 
        visible={loginVisible} 
        modalClose={() => setloginVisible(false)} 
      ></PFModalLogin>

      <PFModalPrompt 
        title={"CONFIRMATION"} 
        message={"Are you sure you want to accept the offer?"} 
        visible={confirmVisible} 
        modalClose={() => setconfirmVisible(false)} 
        type={"confirm"}
        onConfirm={() => Alert.alert("Clicked!!")}
      ></PFModalPrompt>

      <PFModalAlert
        title={"SUCCESSFUL"} 
        message={"Transaction Succeeded"} 
        visible={alertVisible} 
        modalClose={() => setalerVisible(false)} 
      ></PFModalAlert>

      <PFPopupMenu
        visible={popupvisible}
        modalClose={() => setpopupvisible(false)}
      />


      <PFActivityIndicator visible={false}/>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.fabContainer}
        onPress={() => navigation.navigate('Instruction')}
        >
        <Image
          // FAB using TouchableOpacity with an image
          // For online image
          source={ require('../../assets/drawerIcons/plantCareIcons/camera.png')}
          // For local image
          //source={require('./images/float-add-icon.png')}
          style={styles.fabImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal: 12
  },
  titleText: {
    // fontFamily: 'poppins-semiBold',
    fontSize: 14,
    color: '#1D4123'
  },
  paragraphText: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
    color: '#1D4123',
    marginVertical: 8,
    lineHeight: 20,
  },
  searchBoxContainer: {
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    // flex:1,
  },
  searchBoxIcon: {
    height: 20,
    width: 20
  },
  fab: {
    position: 'absolute',
    margin: 15,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F7FA',
  },
  fabContainer: {
    backgroundColor: Colors.white,
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,
    bottom: 20,

    borderRadius: 35,
    // borderColor: 'black',
    // borderWidth: 5,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 10,
  },
  fabImage: {
    // marginTop: 7,
    resizeMode: 'contain',
    width: 25,
    height: 25,
    //backgroundColor:'black'
  },
})