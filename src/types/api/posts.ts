import { PostType } from '~/types/common';
import { RangeTemplateType } from './common';

export interface GetChannelPostsRequestType extends RangeTemplateType {}
export type GetChannelPostsResponseType = PostType[];

export interface GetUserPostsRequestType extends RangeTemplateType {}
export type GetUserPostsResponseType = PostType[];

export type CreatePostRequestType = FormData;

export type GetPostDetailResponseType = PostType;

export type UpdatePostRequestType = FormData;
export type UpdatePostResponseType = PostType;

export interface DeletePostRequestType {
  id: string;
}
