import { UserType, PostType } from '~/types/common';

export type searchUserResponseType = UserType[];

export type searchTotalResponseType = (UserType | PostType)[];
