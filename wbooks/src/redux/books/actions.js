import { getBookList } from '../../services/BookService';

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
};

export const actionCreator = {
  getBooks: (uid) => async (dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response = await getBookList({ uid });
    if (response.ok) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_BOOKS_FAILURE
      });
    }
  }
};
