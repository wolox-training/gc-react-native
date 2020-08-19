import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { AppState } from '../../interfaces/appState';
import { validateEmail, validatePassword } from '../../../utils/validations';
import { actionCreators } from '../../../redux/authorization/actions';

import styles from './styles';
import backgroundImage from './assets/background.png';
import wbooks from './assets/wbooks.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const dispatch = useDispatch();

  const signIn = () => {
    setEmailError(validateEmail(email));
    setPasswordError(validatePassword(password));
    dispatch(actionCreators.login({ email, password }));
  };

  const { userError } = useSelector((state: AppState) => state.authorization);

  const handleEmailInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(value.nativeEvent.text);
    setEmailError('');
  };

  const handlePasswordInput = (value: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(value.nativeEvent.text);
    setPasswordError('');
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
          <Button text={'Ingresar'} style={styles.button} textStyle={styles.textStyle} onPress={signIn} />
          <Text style={styles.error}>{!!userError?.errors && userError?.errors}</Text>
        </View>
        <Text>Designd, developed and used by woloxers</Text>
      </ImageBackground>
    </View>
  );
};

export default Login;
