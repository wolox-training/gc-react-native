import { AuthorizationState } from './authorization';
import { BooksState } from './books';

export interface AppState {
  authorization: AuthorizationState;
  books: BooksState;
}
