import { UserSimpleType, PostSimpleType } from '~/types/common';

export type SearchUserResponseType = UserSimpleType[];

export type SearchTotalResponseType = (UserSimpleType | PostSimpleType)[];
