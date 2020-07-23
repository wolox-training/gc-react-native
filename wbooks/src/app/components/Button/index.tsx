import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface ButtonProps {
  text: string;
  fill?: boolean;
  onPress?: any;
  disabled?: boolean;
}

const Button = ({ text, fill, onPress, disabled }: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, fill && styles.fillButton, disabled && styles.disabledButton]}
    disabled={disabled}
    onPress={onPress}>
    <Text style={[styles.title, fill && styles.fillButtonTitle]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
