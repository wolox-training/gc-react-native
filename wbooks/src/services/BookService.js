import api from '../config/api';

export const getBookList = (params) => api.get('/books', params);
