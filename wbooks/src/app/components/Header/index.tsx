import React from 'react';
import { ImageBackground, Text } from 'react-native';

import BackButton from '../BackButton';
import LogoutButton from '../LogoutButton';
import { Navigation } from '../../interfaces/navigation';
import { isIos } from '../../../constants/platforms';

import background from './assets/bcNavBar.png';
import styles from './styles';

interface Props extends Navigation {
  title: string;
}

const Header = ({ navigation, title }: Props) => {
  const canGoBack = navigation.canGoBack();
  return (
    <ImageBackground style={styles.header} source={background}>
      {canGoBack ? <BackButton navigation={navigation} /> : <LogoutButton />}
      <Text style={[styles.title, isIos && styles.centerTitle]}>{title}</Text>
    </ImageBackground>
  );
};

export default Header;
