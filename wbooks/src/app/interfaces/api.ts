import { HEADERS } from 'apisauce';

import { User } from './authorization';

export interface Headers {
  token: string;
  client: string;
}

export interface AuthorizationResponseHeaders extends HEADERS {
  token: string;
  client: string;
}

export interface LoginResponse {
  data: User;
}
