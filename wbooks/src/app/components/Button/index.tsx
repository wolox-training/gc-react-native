import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface ButtonProps {
  text: string;
  fill?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  buttonStyle?: any;
  textStyle?: any;
}

const Button = ({ text, fill, onPress, disabled, buttonStyle, textStyle }: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, fill && styles.fillButton, disabled && styles.disabledButton, buttonStyle]}
    disabled={disabled}
    onPress={onPress}>
    <Text style={[styles.title, fill && styles.fillButtonTitle, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
