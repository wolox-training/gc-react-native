import api from '../config/api';

export const books = {
  getBookList: () => api.get('/books')
};
