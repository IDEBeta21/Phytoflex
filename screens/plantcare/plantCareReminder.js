import { Text, StyleSheet, SafeAreaView, View, ScrollView, Platform, Image, Picker, Pressable, TouchableOpacity, Alert } from 'react-native';
import React, { Component, useState, useEffect} from 'react';
import useAutoFocusInputs from 'use-auto-focus-inputs';
import { TextInput, Button } from 'react-native-paper';

// import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

// import { PFRadioButton, PFSecondaryButton, PFText } from '../../../components';
import { NavigationContainer } from '@react-navigation/native'; 
import { 
  PFText , PFTextInput, PFPopupMenu, PFActivityIndicator,
  PFModalLogin , PFModalAlert, PFModalPrompt, 
  PFPrimaryButton, PFSecondaryButton, PFRadioButton,
  PFFlatList, 
  AccountListItem, PlantListItem, MyGardenItem, RecentSnapsItem,
  PFCard
} from '../../components';
import { color } from 'react-native-reanimated';

import firebase from 'firebase';

  // const [selectedValue, setSelectedValue] = useState("java");

export default function PlantCareReminder({navigation, route}) {

  const [selectedValue, setSelectedValue] = useState("Water Plant");

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [isPickerShowWow, setIsPickerShowWow] = useState(false);


  const [userId, setuserId] = useState('')



  const [reminderType, setreminderType] = useState('PLANTING')

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date(Date.UTC(2012, 11, 12, 3, 0, 0)));

  const [frequency, setfrequency] = useState('Every two weeks')

  const [notifMessage, setnotifMessage] = useState('')

  // const t = (time.getHours() == 24 ? "PM" : "AM");

  // const [date, setDate] = useState(new Date(Date.now()));
  useEffect(() => {
    console.log("Monitor Screen")
    // console.log()
    setuserId(firebase.auth().currentUser.uid)
  }, [])
  

  const showDatePicker = () => {
    setIsPickerShow(true);
  };

  const showTimePicker = () => {
    setIsPickerShowWow(true);
  };

  const onChange = (event, value) => {
    if(value !== undefined){
      setDate(value);
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    }else{
      setDate(new Date())
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    }
    
    
  };

  const onChangeTime = (event, value) => {
    if(value !== undefined){
      setTime(value);
      if (Platform.OS === 'android') {
        setIsPickerShowWow(false);
      }
    }else{
      setTime(new Date(Date.UTC(2012, 11, 12, 3, 0, 0)))
      if (Platform.OS === 'android') {
        setIsPickerShowWow(false);
      }
    }

  };

  const onSaveChange = async() => {
    firebase.firestore().collection('PlantReminder').add({

      title: route.params.title,
      remiderDesc: route.params.description,

      documentId: route.params.documentId,
      reminderImageUrl: route.params.reminderImageUrl,

      reminderType: reminderType,

      reminderDate: date,
      reminderTime: time,

      frequency: frequency,
      notifMessage: notifMessage,
      
      userId: userId,
      doneStatus: false
    }).then((res) => {
      Alert.alert('Added Reminder Successfully')
      navigation.navigate('PlantCareHome')
    })
  }


  return (

    <View style={styles.container}>

      <Picker
        selectedValue={reminderType}
        style={{ marginStart: 8, height: 32, marginEnd:8, color: '#639D04', fontFamily: 'poppins-light', fontSize: 18 }}
        onValueChange={(itemValue, itemIndex) => setreminderType(itemValue)}
      >
        {/* <Picker.Item label="Water Plant" value="water" /> */}
        <Picker.Item label="PLANTING"           value="PLANTING" />
        <Picker.Item label="FERTILIZING"        value="FERTILIZING" />
        <Picker.Item label="PESTS AND DISEASES" value="PESTS AND DISEASES" />
        <Picker.Item label="GARDEN MAINTENANCE" value="GARDEN MAINTENANCE" />

      </Picker>


      {/* toLocaleDateString() returns the date (not the time) of a date, as a string, using locale conventions: */}
      {/* toLocaleTimeString() returns the time portion of a date, as a string, using locale conventions: */}
      {/* getDate() returns the day of the month (from 1 to 31) of a date */}

      <View style={[styles.pickedDateContainer, { flexDirection: "row" }]}>
        <View style={{ flex: 1, marginLeft: 3, marginRight: 8 }}>
          <Image
            style={{ height: 25, width: 25, }}
            source={require('../../assets/img/plantcare/icn_calendar.png')} />
        </View>

        {/* Display the selected date */}
        <View style={{flex: 10, }}>
          <Pressable onPress={showDatePicker}>
              <Text style={[styles.pickedDate, { fontSize: 18, fontFamily: 'poppins-regular', }]}>{date.toLocaleDateString()}</Text>
          </Pressable>
        </View>  
    </View>

    <View style={[styles.pickedDateContainer, { flexDirection: "row" }]}>
        <View style={{ flex: 1, marginLeft: 3, marginRight: 8 }}>
          <Image
            style={{ height: 25, width: 25, }}
            source={require('../../assets/img/plantcare/icn_clock.png')} />
        </View>

        {/* Display the selected time */}
        <View style={{flex: 10, }}>
          <Pressable onPress={showTimePicker}>
              <Text style={[styles.pickedDate, { fontSize: 18, fontFamily: 'poppins-regular', }]}>
                {time.toLocaleTimeString('en-US').replace(/(:\d{2}| [AP]M)$/, " ") }
              </Text>
          </Pressable>
        </View>  
    </View>

    <View style={[styles.pickedDateContainer, { flexDirection: "row" }]}>
        <View style={{ flex: 1, marginLeft: 0, marginRight: 0 }}>
          <Image
            style={{ height: 25, width: 25, }}
            source={require('../../assets/img/plantcare/icn_repeat.png')} />
        </View>

        {/* Display the selected time */}
        <View style={{flex: 10, }}>
          <Picker
            selectedValue={frequency}
            style={{ height: 24, color: '#000000', fontFamily: 'poppins-light', fontSize: 20 }}
            onValueChange={(itemValue, itemIndex) => setfrequency(itemValue)}
          >
            <Picker.Item label="Every two weeks" value="two" />
            <Picker.Item label="Every one week" value="one" />
          </Picker>
        </View>  
    </View>

    

      <TextInput
        style={{marginStart: 8, marginEnd: 8, marginBottom: 35, backgroundColor: '#ffffff', borderColor: 'green', fontFamily: 'poppins-light', }}
        mode="outlined"
        placeholder="Notification Message..."
        activeOutlineColor='#9B9B9B'
        multiline={true}
        scrollEnabled={true}
        editable={true}
        numberOfLines={8}
        maxLength={140}
        right={<TextInput.Affix text="/140" />}
        onChangeText={(text) => setnotifMessage(text)}
      />

    <View style={{ flex: 1, justifyContent: 'flex-end'}}>
      <View style={{ flexDirection: "row", marginStart: 8, marginEnd: 8 }}>
        <Button
          color={'#639D04'} 
          style={{ width: '49%', marginRight: 4 }}
          mode="outlined" 
          onPress={() => navigation.navigate('PlantCareHome')}>
          CANCEL
        </Button>

        <Button 
          style={{ width: '49%', marginLeft: 4 }}
          color={'#639D04'} 
          mode="contained" 
          // onPress={() => Alert.alert(userId)}
          onPress={() => onSaveChange()}
        >
          SAVE
        </Button>
      </View>
    </View>


      {/* The button that used to trigger the date picker */}
        {/* {!isPickerShow && (
          <View style={styles.btnContainer}>
            <Button title="Show Date Picker" color="purple" onPress={showDatePicker} />
          </View>
        )} */}

      {/* The button that used to trigger the time picker */}
        {/* {!isPickerShowWow && (
          <View style={styles.btnContainer}>
            <Button title="Show Time Picker" color="purple" onPress={showTimePicker} />
          </View>
        )} */}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onChange}
          is24hourSource="locale"
          style={styles.datePicker}
        />
      )}

      {/* The time picker */}
      {isPickerShowWow && (
        <DateTimePicker
          value={time}
          mode={'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          // is24Hour={true}
          is24hourSource="locale"
          is24Hour={true}
          onChange={onChangeTime}
          style={styles.datePicker}
        />
      )}

  </View>

  )
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 12,
  },
  
  pickedDateContainer: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1, 
    borderRadius: 10,
    marginStart: 8, 
    marginEnd: 8, 
    marginTop: 4,
    marginBottom: 4,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  pickedDate: {
    fontSize: 18,
    color: 'black',
  },

  btnContainer: {
    paddingVertical: 8,
    marginStart: 8, 
    marginEnd: 8,
  },

  // This only works on iOS
  datePicker: {
    width: 400,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },


})

