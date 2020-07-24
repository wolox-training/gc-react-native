import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  fill?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: object;
  textStyle?: object;
}

const Button = ({ text, fill, onPress, disabled, style, textStyle }: Props) => (
  <TouchableOpacity
    style={[styles.button, fill && styles.fillButton, disabled && styles.disabledButton, style]}
    disabled={disabled}
    onPress={onPress}>
    <Text style={[styles.title, fill && styles.fillButtonTitle, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
