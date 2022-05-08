import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableNativeFeedbackBase } from "react-native";

// import { PFText } from "..";
import { PFText } from ".";

import Colors from "../utils/globalColors";

export const PFPopupMenu = ({
  visible, 
  modalClose
}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        // visible={modalVisible}
        visible={visible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          modalClose()
        }}
        dismissable={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <PFText style={styles.modalTextMessage}>Unfollow usename</PFText>
            <PFText style={styles.modalTextMessage}>View Profile</PFText>
            <PFText style={styles.modalTextMessage}>Report</PFText>
          </View>
        </View>
      </Modal>

      {/* <Modal visible={visible}>
          <View>
              <Text>Hello world</Text>
          </View>
      </Modal> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 22,
    // width: 50
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: Colors.secondary,
  },
  primaryButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTextTitl: {

  },
  modalTextMessage: {
    marginBottom: 5,
    textAlign: "center"
  }
});

// export default PFModalAlert;