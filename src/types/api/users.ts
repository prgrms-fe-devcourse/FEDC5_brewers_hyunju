import { UserType } from '~/types/common';
import { rangeTemplateType } from './common';

export interface getUsersRequestType extends rangeTemplateType {}
export type getUsersResponseType = UserType[];

export type onlineUsersResponseType = UserType[];

export type getUserResponseType = UserType;

export type uploadPhotoRequestType = FormData;
export type uploadPhotoResponseType = UserType;
