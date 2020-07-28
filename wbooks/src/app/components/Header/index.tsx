import React from 'react';
import { ImageBackground, Text, View, Platform } from 'react-native';

import BackButton from '../BackButton';

import background from './assets/bcNavBar.png';
import styles from './styles';

interface Props {
  title: string;
  navigation: any;
}

const Header = ({ navigation, title }: Props) => (
  <ImageBackground style={styles.header} source={background}>
    <View style={styles.buttonContainer}>
      <BackButton navigation={navigation} />
    </View>
    <Text style={[styles.title, Platform.OS === 'ios' && styles.centerTitle]}>{title}</Text>
    <View style={styles.buttonContainer} />
  </ImageBackground>
);

export default Header;
