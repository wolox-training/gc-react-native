export interface Book {
  id?: string;
  author: string;
  title: string;
  img: string;
  genre?: string;
  publisher?: string;
  year?: string;
  available?: boolean;
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}
