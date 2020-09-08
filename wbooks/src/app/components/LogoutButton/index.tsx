import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../../../redux/authorization/actions';
import user from './assets/user.png';
import styles from './styles';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(actionCreators.logout());
  return (
    <TouchableOpacity onPress={logout}>
      <Image style={styles.imgage} source={user} />
    </TouchableOpacity>
  );
};

export default LogoutButton;
