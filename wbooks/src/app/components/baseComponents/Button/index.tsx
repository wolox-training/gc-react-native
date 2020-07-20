import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ButtonProps } from '../../../interfaces/button';
import { styles } from './styles';

const Button = ({ title, style, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.title, title.style]}>{title.text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
