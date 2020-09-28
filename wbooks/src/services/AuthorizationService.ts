import AsyncStorage from '@react-native-community/async-storage';

import api from '../config/api';
import STORAGE from '../constants/storage';
import { User, Credentials } from '../app/interfaces/authorization';
import { PromiseLoginResponse } from '../app/interfaces/api';

export const login = (credentials: Credentials): PromiseLoginResponse =>
  api.post('/auth/sign_in', credentials);

export const setAuthorizationData = (user: User, token: string, client: string) => {
  const storageEntries = [
    [STORAGE.authorizationHeaders, JSON.stringify({ token, client })],
    [STORAGE.user, JSON.stringify(user)]
  ];
  return AsyncStorage.multiSet(storageEntries, () =>
    api.setHeaders({ 'access-token': token, client, uid: user.uid })
  );
};

export const getAuthorizationData = () =>
  AsyncStorage.multiGet([STORAGE.authorizationHeaders, STORAGE.user]).then((authorization) => {
    const parsedData = authorization.map(([key, value]) => [key, value && JSON.parse(value)]);
    return Object.fromEntries(parsedData);
  });
