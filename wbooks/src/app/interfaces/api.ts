import { User } from './authorization';

export interface Headers {
  token: string;
  client: string;
}

export interface LoginResponse {
  data: User | undefined;
}

export interface UserResponse {
  user: User;
}
