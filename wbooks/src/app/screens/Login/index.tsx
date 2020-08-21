import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground, View, Text, Image, TextInput } from 'react-native';

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
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const dispatch = useDispatch();

  const signIn = () => dispatch(actionCreators.login({ email, password }));

  const disabledButton = Boolean(!email || !password || emailError || passwordError);
  const { userError } = useSelector((state: AppState) => state.authorization);

  const handleEmailInput = (inputValue: string) => {
    setEmail(inputValue);
    setEmailError(validateEmail(inputValue));
  };

  const handlePasswordInput = (inputValue: string) => {
    setPassword(inputValue);
    setPasswordError(validatePassword(inputValue));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <Image source={wbooks} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Usuario'}
            onChangeText={handleEmailInput}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <Text style={styles.error}>{!!emailError && emailError}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Contraseña'}
            secureTextEntry={true}
            textContentType={'password'}
            onChangeText={handlePasswordInput}
          />
          <Text style={styles.error}>{!!passwordError && passwordError}</Text>
          <Button
            text={'Ingresar'}
            style={styles.button}
            textStyle={styles.textStyle}
            onPress={signIn}
            disabled={disabledButton}
          />
          <Text style={styles.error}>{!!userError?.errors && userError?.errors}</Text>
        </View>
        <Text>Designd, developed and used by woloxers</Text>
      </ImageBackground>
    </View>
  );
};

export default Login;
