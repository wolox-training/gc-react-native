import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from '../../../interfaces/button';
import styles from './styles';

const Button = ({ text, fill, onPress, disabled }: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, fill && styles.fillButton, disabled && styles.disabledButton]}
    disabled={disabled}
    onPress={onPress}>
    <Text style={[styles.title, fill && styles.fillButtonTitle]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
