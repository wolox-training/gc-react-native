import { CommentsProps } from './comments';

export interface Book {
  id: string;
  author: string;
  title: string;
  image: string;
  editor: string;
  year: string;
  genre: string;
  createAt: string;
  updateAt: string;
  available?: boolean;
  comments: CommentsProps[];
  rents: any;
}

export interface BooksResponse {
  page: Book[];
  count: number;
  totalPages: number;
  totalCount: number;
  currentPage: number;
  nextPage: number;
}

export interface BooksState {
  books: BooksResponse;
  booksLoading: boolean;
  booksError: string;
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}
