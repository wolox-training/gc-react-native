import { actions } from './actions';

const initialState = {
  user: [],
  userLoading: false,
  userError: {},
  userStatusCode: ''
};

const reducer = (state = initialState, action) => {
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
        user: action.payload
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        userLoading: false,
        userError: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
