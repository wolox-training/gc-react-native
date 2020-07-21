export interface Book {
  id?: string;
  author: string;
  title: string;
  img: string;
  genre?: string;
  publisher?: string;
  year?: string;
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}
