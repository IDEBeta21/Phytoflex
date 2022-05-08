import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableNativeFeedbackBase } from "react-native";

import { PFText } from "..";

import Colors from "../../utils/globalColors";

export const PFModalLogin = ({title, message, visible, modalClose}) => {
  const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        // visible={modalVisible}
        visible={visible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          modalClose()
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <PFText style={styles.modalTextTitle} weight={"semi-bold"}>{title}</PFText>
            <PFText style={styles.modalTextMessage}>{message}</PFText>
            <Pressable
              style={[styles.button, styles.buttonClose]}
            //   onPress={() => setModalVisible(false)}
              onPress={() => {modalClose()}}
            //   onPress={() => {this.visible}}
            >
              <PFText style={styles.primaryButtonText} color={'white'}>LOGIN</PFText>
            </Pressable>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
    marginBottom: 15,
    textAlign: "center"
  }
});

// export default PFModalLogin;