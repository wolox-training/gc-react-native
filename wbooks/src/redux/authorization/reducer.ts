import { AuthorizationAction } from '../../app/interfaces/authorization';

import { actions } from './actions';

const initialState = {
  user: null,
  userLoading: false,
  userError: {}
};

const reducer = (state = initialState, action: AuthorizationAction) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        userLoading: true,
        userError: ''
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: action.payload,
        userError: ''
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        userLoading: false,
        userError: action.payload
      };
    case actions.LOGOUT:
      return {
        ...state,
        user: null,
        userLoading: false,
        userError: ''
      };
    default:
      return state;
  }
};

export default reducer;
