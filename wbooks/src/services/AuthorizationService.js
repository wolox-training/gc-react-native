import api from '../config/api';

export const login = (credentials) => api.post('/auth/sign_in', credentials);
