import React from 'react';
import { ImageBackground, View, Text, Image, TextInput } from 'react-native';

import Button from '../../components/Button';

import styles from './styles';
import backgroundImage from './assets/background.png';
import wbooks from './assets/wbooks.png';

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Image source={wbooks} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={'Usuario'} />
          <TextInput style={styles.input} placeholder={'Contraseña'} secureTextEntry={true} />
          <Button text={'Ingresar'} style={styles.button} textStyle={styles.textStyle} />
        </View>
        <Text>Designd, developed and used by woloxers</Text>
      </ImageBackground>
    </View>
  );
};

export default Login;
