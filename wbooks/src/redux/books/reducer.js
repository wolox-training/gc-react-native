import { actions } from './actions';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        loading: true
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error'
      };
    default:
      return state;
  }
};

export default reducer;
