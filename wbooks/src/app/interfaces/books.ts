import { actions } from '../../redux/books/actions';

import { CommentsProps } from './comments';

export interface Book {
  id: string;
  author: string;
  title: string;
  image: Image;
  editor: string;
  year: string;
  genre: string;
  createAt: string;
  updateAt: string;
  available?: boolean;
  comments: CommentsProps[];
  rents: any;
}

export interface Image {
  url: string;
}

export interface BooksState {
  books: Book[];
  booksLoading: boolean;
  booksError: string;
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}

interface GetBooksAction {
  type: typeof actions.GET_BOOKS;
  payload: Book[];
}

interface GetBooksSuccessAction {
  type: typeof actions.GET_BOOKS_SUCCESS;
  payload: Book[];
}

interface GetBooksFailureAction {
  type: typeof actions.GET_BOOKS_FAILURE;
  payload: string;
}

export type BooksAction = GetBooksAction | GetBooksSuccessAction | GetBooksFailureAction;
