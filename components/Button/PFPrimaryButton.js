import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button as XButton } from 'react-native-paper'
import Colors from '../../utils/globalColors'

export const PFPrimaryButton = ({onPress = () => {}, title, disabled = false, loading = false, style, labelStyle, roundness = 20, bordered, icon}) => {

    let disabledBtnStyle = disabled ? { backgroundColor: Colors.black } : { backgroundColor: Colors.primary }
    let borderBtnStyle = bordered ? {borderWidth: 2, borderColor: 'white'} : {}

    return (
        <View>
            <XButton
                icon={icon}
                mode='contained'
                onPress={() => onPress()}
                style={{ ...borderBtnStyle, ...disabledBtnStyle, ...styles.btn, ...style }}
                labelStyle={{ fontFamily: 'poppins-regular', color: Colors.white, ...labelStyle }}
                uppercase={false}
                disabled={disabled}
                loading={loading}
                theme={{roundness: roundness}}
            >
                {title}
            </XButton>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        elevation: 7,
    }
})
