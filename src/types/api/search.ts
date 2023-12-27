import { UserType, PostType } from '~/types/common';

export type SearchUserResponseType = UserType[];

export type SearchTotalResponseType = (UserType | PostType)[];
