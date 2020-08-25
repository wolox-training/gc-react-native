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
