import { login } from '../../services/AuthorizationService';

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
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.data
      });
    }
  }
};
