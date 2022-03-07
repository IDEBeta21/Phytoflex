import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Colors from '../../utils/globalColors';

export const PFRadioButton = (
    onPress = () => {},
    value,
    status,
    disabled,
    unchecked,
    uncheckedColor,
    color
) => {
  const ccolor = color == null ? Colors.primary : color

  return (
    <View>
      <RadioButton
        value={value}
        disabled={disabled}
        unchecked={unchecked}
        uncheckedColor={uncheckedColor}
        color={ccolor}
        status={status}
        onPress={() => onPress()}
      />
    </View>
  );
};