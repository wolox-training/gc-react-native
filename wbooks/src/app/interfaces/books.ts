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
  comments?: CommentsProps[];
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}
