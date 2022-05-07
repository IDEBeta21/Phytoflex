import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableNativeFeedbackBase } from "react-native";

import { PFText } from "..";

import Colors from "../../utils/globalColors";

export const PFModalPrompt = ({
    title, 
    message, 
    visible, 
    modalClose, 
    onConfirm, 
    type
}) => {

  const [modalVisible, setModalVisible] = useState(visible);

    if(type == "yesorno" || type == null){
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
                    <View style={styles.buttonArea}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            //   onPress={() => setModalVisible(false)}
                            onPress={() => {onConfirm()}}
                            //   onPress={() => {this.visible}}
                        >
                            <PFText style={styles.primaryButtonText} color={'white'}>YES</PFText>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            //   onPress={() => setModalVisible(false)}
                            onPress={() => {modalClose()}}
                            //   onPress={() => {this.visible}}
                        >
                            <PFText style={styles.primaryButtonText} color={'white'}>NO</PFText>
                        </Pressable>
                    </View>
                    
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
    }else if(type == "confirm"){
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
                    <View style={styles.buttonArea}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            //   onPress={() => setModalVisible(false)}
                            onPress={() => {modalClose()}}
                            //   onPress={() => {this.visible}}
                        >
                            <PFText style={styles.primaryButtonText} color={'white'}>CANCEL</PFText>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            //   onPress={() => setModalVisible(false)}
                            onPress={() => {onConfirm()}}
                            //   onPress={() => {this.visible}}
                        >
                            <PFText style={styles.primaryButtonText} color={'white'}>CONFIRM</PFText>
                        </Pressable>
                    </View>
                    
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
    }

  
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
  buttonArea: {
    // flex: 1,
    flexDirection: 'row'
  },
  button: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    marginHorizontal: 10
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

// export default PFModalPrompt;