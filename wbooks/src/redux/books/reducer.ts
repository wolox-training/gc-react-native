import { BooksAction } from '../../app/interfaces/books';

import { actions } from './actions';

const initialState = {
  books: [],
  booksLoading: false,
  booksError: ''
};

const reducer = (state = initialState, action: BooksAction) => {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        booksLoading: true,
        booksError: ''
      };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        booksLoading: false,
        books: action.payload
      };
    case actions.GET_BOOKS_FAILURE:
      return {
        ...state,
        booksLoading: false,
        booksError: 'Error'
      };
    default:
      return state;
  }
};

export default reducer;
