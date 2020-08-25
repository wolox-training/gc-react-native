import { login, setAuthorizationData } from '../../services/AuthorizationService';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
};

export const actionCreators = {
  login: (credentials) => async (dispatch) => {
    dispatch({ type: actions.LOGIN });
    const response = await login(credentials);
    if (response.ok) {
      const { client, 'access-token': token } = response.headers;
      const user = response.data.data;
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
  rehydrateAuthorization: (user, { token, client }) => (dispatch) => {
    setAuthorizationData(user, token, client).then(() =>
      dispatch({ type: actions.LOGIN_SUCCESS, payload: user })
    );
  }
};
