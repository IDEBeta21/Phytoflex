// import { Button, Text, View } from 'react-native';
// import React, { Component } from 'react';
// import { globalStyles } from '../global/globalStyles';

// import { DrawerContent } from '../global/Drawer';

// export default function SocMedSearchPage({navigation}) {
//   // Calling LORD
  
//   return (
//     <View style={ globalStyles.textContainer }>
//       <Text style={ globalStyles.titleText }>
//       TRY    
//       </Text>
//     </View>
//   );
// }



//HI GUYS.! I just COPY THIS from link https://www.bootdey.com/react-native-snippet/12/User-profile-with-options
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class UserProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://cdn.drawception.com/drawings/zKcWBTDttp.png'}}/>

                <Text style={styles.name}> https://youtu.be/dQw4w9WgXcQ </Text>
                <Text style={styles.userInfo}>watch this guys </Text>
                <Text style={styles.userInfo}>HAHAHAHA </Text>
            </View>
          </View>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:18,
    color:"#1D4123",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#1D4123",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#1D4123",
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  
  
  
});
