import { CommentsProps } from './comments';

export interface Book {
  id?: string;
  author: string;
  title: string;
  img: string;
  genre?: string;
  publisher?: string;
  year?: string;
  available?: boolean;
  comments: CommentsProps[];
}

export interface BookList {
  books: Book[];
}

export interface BooksState {
  books: BookList;
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}
