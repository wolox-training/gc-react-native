import React, { useState } from 'react';
import {
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native';

import Button from '../../components/Button';
import Routes from '../../../constants/routes';
import { validateEmail, validatePassword } from '../../../utils/validations';

import styles from './styles';
import backgroundImage from './assets/background.png';
import wbooks from './assets/wbooks.png';

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>();
  const [passwordError, setPasswordError] = useState<string | undefined>();

  const handleClick = () => navigation.navigate(Routes.BookList);

  const handleEmailInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(value.nativeEvent.text);
    setEmailError(validateEmail(email));
  };

  const handlePasswordInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(value.nativeEvent.text);
    setPasswordError(validatePassword(password));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Image source={wbooks} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Usuario'}
            onChange={handleEmailInput}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Text style={styles.error}>{!!emailError && emailError}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Contraseña'}
            secureTextEntry={true}
            textContentType={'password'}
            onChange={handlePasswordInput}
          />
          <Text style={styles.error}>{!!passwordError && passwordError}</Text>
          <Button
            text={'Ingresar'}
            style={styles.button}
            textStyle={styles.textStyle}
            onPress={handleClick}
          />
        </View>
        <Text>Designd, developed and used by woloxers</Text>
      </ImageBackground>
    </View>
  );
};

export default Login;
