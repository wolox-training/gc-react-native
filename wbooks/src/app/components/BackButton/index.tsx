import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import leftArrow from './assets/leftArrow.png';
import styles from './styles';

interface Props {
  navigation: any;
}

const BackButton = ({ navigation }: Props) => (
  <TouchableOpacity onPress={navigation.goBack}>
    <Image style={styles.imgage} source={leftArrow} />
  </TouchableOpacity>
);

export default BackButton;
