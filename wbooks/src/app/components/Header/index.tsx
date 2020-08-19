import React from 'react';
import { ImageBackground, Text, Platform } from 'react-native';

import BackButton from '../BackButton';
import { Navigation } from '../../interfaces/navigation';
import { ios } from '../../../constants/platforms';

import background from './assets/bcNavBar.png';
import styles from './styles';

interface Props extends Navigation {
  title: string;
}

const Header = ({ navigation, title }: Props) => (
  <ImageBackground style={styles.header} source={background}>
    {navigation.canGoBack() && <BackButton navigation={navigation} />}
    <Text
      style={[
        styles.title,
        Platform.OS === ios && styles.centerTitle,
        !navigation.canGoBack() && styles.leftSpace
      ]}>
      {title}
    </Text>
  </ImageBackground>
);

export default Header;
