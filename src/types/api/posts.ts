import { PostType } from '~/types/common';
import { rangeTemplateType } from './common';

export interface getChannelPostsRequestType extends rangeTemplateType {}
export type getChannelPostsResponseType = PostType[];

export interface getUserPostsRequestType extends rangeTemplateType {}
export type getUserPostsResponseType = PostType[];

export type createPostRequestType = FormData;

export type getPostDetailResponseType = PostType;

export type updatePostRequestType = FormData;
export type updatePostResponseType = PostType;

export interface deletePostRequestType {
  id: string;
}
