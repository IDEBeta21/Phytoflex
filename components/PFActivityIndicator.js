import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ActivityIndicator as AI } from 'react-native-paper'
// import Colors from '../../../utils/Colors'
import Colors from '../utils/globalColors';

export const PFActivityIndicator = ({visible = false}) => {
  return (
      <AI
          animating={visible}
          size={30}
          color={Colors.secondary}
          style={styles.loadingStyle}
      />
  );
};

const styles = StyleSheet.create({
    loadingStyle: {
        marginVertical: 20,
    }
});
