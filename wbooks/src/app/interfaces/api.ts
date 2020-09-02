import { ApiResponse, HEADERS } from 'apisauce';

import { User } from './authorization';

export interface AuthorizationResponseHeaders extends HEADERS {
  token: string;
  client: string;
}

export interface LoginResponse {
  data: User;
}

export type PromiseLoginResponse = Promise<ApiResponse<LoginResponse, string>>;
