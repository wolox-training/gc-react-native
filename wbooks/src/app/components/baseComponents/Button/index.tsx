import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from '../../../interfaces/button';
import styles from './styles';

const Button = ({ text, fill, onPress, disabled }: ButtonProps) => {
  let buttonStyle = {};
  if (disabled) {
    buttonStyle = [styles.button, styles.disabledButton];
  } else if (fill) {
    buttonStyle = [styles.button, styles.fillButton];
  } else {
    buttonStyle = styles.button;
  }
  const titleStyle = fill ? [styles.title, styles.fillButtonTitle] : styles.title;
  return (
    <TouchableOpacity style={buttonStyle} disabled={disabled} onPress={onPress}>
      <Text style={titleStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
