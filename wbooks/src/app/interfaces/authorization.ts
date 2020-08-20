export interface AuthorizationState {
  user: User | null;
  userLoading: boolean;
  userError: UserError | null;
  userStatusCode: number;
}

export interface UserError {
  errors: [string];
  success: boolean;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  uid: string;
}
