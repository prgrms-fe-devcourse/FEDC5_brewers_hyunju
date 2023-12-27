import { UserType } from '~/types/common';

export interface UpdateUserRequestType {
  fullName: string;
  username: string;
}
export type UpdateUserResponseType = UserType;

export interface UpdatePasswordRequestType {
  password: string;
}
