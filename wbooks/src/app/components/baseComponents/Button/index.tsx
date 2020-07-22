import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from '../../../interfaces/button';
import styles from './styles';

const Button = ({ text, fill, onPress, disabled }: ButtonProps) => (
  <TouchableOpacity
    style={
      disabled
        ? [styles.button, fill && styles.fillButton, styles.disabledButton]
        : [styles.button, fill && styles.fillButton]
    }
    disabled={disabled}
    onPress={onPress}>
    <Text style={fill ? [styles.title, styles.fillButtonTitle] : styles.title}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
