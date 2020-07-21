export interface Book {
  id?: string;
  author: string;
  title: string;
  img: string;
}

export interface BookProps {
  book: Book;
  onClick: () => void;
}
