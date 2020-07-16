export interface Book {
  author: string;
  title: string;
  img: string;
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}
