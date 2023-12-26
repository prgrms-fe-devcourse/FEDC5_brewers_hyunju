import { UserType } from '~/types/common';

export interface loginRequestType {
  email: string;
  password: string;
}

export interface loginResponseType {
  user: UserType;
  token: string;
}

export interface signupRequestType {
  email: string;
  fullName: string;
  password: string;
}
export interface signupResponseType {
  user: UserType;
  token: string;
}

export type authUserResponseType = UserType;
