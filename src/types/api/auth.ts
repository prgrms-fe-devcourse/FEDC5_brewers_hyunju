import { UserType } from '~/types/common';

export interface LoginRequestType {
  email: string;
  password: string;
}

export interface LoginResponseType {
  user: UserType;
  token: string;
}

export interface SignupRequestType {
  email: string;
  fullName: string;
  password: string;
}
export interface SignupResponseType {
  user: UserType;
  token: string;
}

export type AuthUserResponseType = UserType;
