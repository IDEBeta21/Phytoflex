import * as React from 'react';
import { Switch } from 'react-native-paper';
import Colors from '../../utils/globalColors';

export const PFSwitch = ({value, onValueChange = () => {}, disabled = false, color , style}) => {
  
  return (
    <Switch 
      value={value} 
      onValueChange={() => onValueChange()} 
      disabled={disabled}
      color={color ?  color : Colors.primary}
      style={{...style}}
    />
  );
  
}