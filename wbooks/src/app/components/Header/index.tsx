import React from 'react';
import { ImageBackground, Text, Platform } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

import BackButton from '../BackButton';

import background from './assets/bcNavBar.png';
import styles from './styles';

interface Props {
  title: string;
  navigation: NavigationStackProp;
}

const Header = ({ navigation, title }: Props) => (
  <ImageBackground style={styles.header} source={background}>
    <BackButton navigation={navigation} />
    <Text style={[styles.title, Platform.OS === 'ios' && styles.centerTitle]}>{title}</Text>
  </ImageBackground>
);

export default Header;
