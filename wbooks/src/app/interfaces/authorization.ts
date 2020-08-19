export interface AuthorizationState {
  user: UserData | null;
  userLoading: boolean;
  userError: UserError | null;
  userStatusCode: number;
}

export interface UserData {
  data: User;
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
