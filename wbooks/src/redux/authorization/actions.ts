import { ApiResponse } from 'apisauce';
import { Dispatch } from 'redux';

import { login, setAuthorizationData } from '../../services/AuthorizationService';
import { Credentials, User } from '../../app/interfaces/authorization';
import { LoginResponse, Headers } from '../../app/interfaces/api';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

export const actionCreators = {
  login: (credentials: Credentials) => async (dispatch: Dispatch) => {
    dispatch({ type: actions.LOGIN });
    const response: ApiResponse<LoginResponse, string> = await login(credentials);
    if (response.ok) {
      const { client, 'access-token': token }: any = response.headers;
      const user: any = response.data?.data;
      setAuthorizationData(user, token, client).then(() =>
        dispatch({ type: actions.LOGIN_SUCCESS, payload: user })
      );
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.data
      });
    }
  },
  rehydrateAuthorization: (user: User, { token, client }: Headers) => (dispatch: Dispatch) => {
    setAuthorizationData(user, token, client).then(() =>
      dispatch({ type: actions.LOGIN_SUCCESS, payload: user })
    );
  }
};
