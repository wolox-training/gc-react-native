import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import leftArrow from './assets/leftArrow.png';
import styles from './styles';

interface Props {
  navigation: any;
}

const BackButton = ({ navigation }: Props) => {
  const handleClick = () => navigation.goBack();
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={handleClick}>
        <Image source={leftArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
