import { UserType } from '~/types/common';
import { RangeTemplateType } from './common';

export interface GetUsersRequestType extends RangeTemplateType {}
export type GetUsersResponseType = UserType[];

export type OnlineUsersResponseType = UserType[];

export type GetUserResponseType = UserType;

export type UploadPhotoRequestType = FormData;
export type UploadPhotoResponseType = UserType;
