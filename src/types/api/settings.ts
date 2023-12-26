import { UserType } from '~/types/common';

export interface updateUserRequestType {
  fullName: string;
  username: string;
}
export type updateUserResponseType = UserType;

export interface updatePasswordRequestType {
  password: string;
}
