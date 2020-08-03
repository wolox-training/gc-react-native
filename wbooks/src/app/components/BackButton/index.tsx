import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import leftArrow from './assets/leftArrow.png';
import styles from './styles';

interface Props {
  navigation: NavigationStackProp;
}

const BackButton = ({ navigation }: Props) => {
  const handleClick = () => navigation.goBack();
  return (
    <TouchableOpacity onPress={handleClick}>
      <Image style={styles.imgage} source={leftArrow} />
    </TouchableOpacity>
  );
};

export default BackButton;
