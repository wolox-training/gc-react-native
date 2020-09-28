import { actions } from '../../redux/authorization/actions';

export interface AuthorizationState {
  user: User | null;
  userLoading: boolean;
  userError: UserError | null;
}

export interface UserError {
  errors: string[];
  success: boolean;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  uid: string;
}

export interface Credentials {
  email: string;
  password: string;
}

interface LoginAction {
  type: typeof actions.LOGIN;
  payload: User;
}

interface LoginSuccessAction {
  type: typeof actions.LOGIN_SUCCESS;
  payload: User;
}

interface LoginFailureAction {
  type: typeof actions.LOGIN_FAILURE;
  payload: string;
}

export type AuthorizationAction = LoginAction | LoginSuccessAction | LoginFailureAction;
