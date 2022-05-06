import { Text, StyleSheet, View, Image, FlatList, Button, TouchableHighlight, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import React, { Component } from 'react';
import { useState } from 'react';
// import { Button } from 'react-native-elements';
import { PFText } from '../../components';

import { FAB, Portal, Provider } from 'react-native-paper';
import { Title } from 'react-native-paper';


export default function NavigationPage ({navigation}) {

      // delete later
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

    return (
    
      <View style={styles.hm}>
        <View style={{ alignSelf: 'center', alignContent: 'center', top: 410, }}>
          <Title style={{ textAlign: 'center' }}>Click the plus button</Title>
        </View>

             {/* Delete po later itong Provider */}
            <Provider>
              <Portal>

                <FAB.Group
                    fabStyle={{backgroundColor: '#6C9ADE'}}
                    style={{ position: 'absolute', margin: 1, right: 0, bottom: 0, }}
                    open={open}
                    icon={open ? 'dots-horizontal-circle' : 'plus'}

                    actions={[
                        // { icon: 'plus', onPress: () => console.log('Pressed add') },
                    
                    {
                        icon: 'folder',
                        label: 'Album',
                        onPress: () => navigation.navigate('PlantCareAlbum')
                    },

                    {
                        icon: 'clock',
                        label: 'Reminder',
                        onPress: () => navigation.navigate('PlantCareReminder')
                    },
                    {
                        icon: 'image',
                        label: 'Reminder Details',
                        onPress: () => navigation.navigate('PlantCareReminderDetails')
                    },
                    {
                        icon: 'calendar-today',
                        label: 'Monitor',
                        onPress: () => navigation.navigate('PlantCareMonitor')
                    },
                    {
                        icon: 'book-open-page-variant',
                        label: 'Instructions',
                        onPress: () => navigation.navigate('Instruction') 
                    },
                    {
                        icon: 'file-multiple',
                        label: 'Result',
                        onPress: () => navigation.navigate('PlantCareResult')
                    },
                    {
                        icon: 'information',
                        label: 'Plant info',
                        onPress: () => navigation.navigate('PlantCarePlantInformation'),
                        // small: false,
                    },
                    ]}
                    
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                        // do something if the speed dial is open
                        }
                    }}
                />

              </Portal>
            </Provider>
            
      </View>
    );     
  }

                            
const styles = StyleSheet.create({

    hm: {
        flex: 1
    }
      
})