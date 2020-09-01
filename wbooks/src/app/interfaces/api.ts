import { ApiResponse, HEADERS } from 'apisauce';

import { User } from './authorization';

export interface AuthorizationResponseHeaders extends HEADERS {
  token: string;
  client: string;
}

export interface LoginResponse {
  data: User;
}

export type LoginApiResponse = ApiResponse<LoginResponse, string>;

export type PromiseLoginResponse = Promise<LoginApiResponse>;
