import { PostSimpleType, PostType } from '~/types/common';
import { RangeTemplateType } from './common';

export interface GetChannelPostsRequestType extends RangeTemplateType {}
export type GetChannelPostsResponseType = PostType[];

export interface GetUserPostsRequestType extends RangeTemplateType {}
export type GetUserPostsResponseType = PostType[];

export type CreatePostRequestType = FormData;
export type CreatePostResponseType = PostType;

export type GetPostDetailResponseType = PostType;

export type UpdatePostRequestType = FormData;
export type UpdatePostResponseType = PostType;

export interface DeletePostRequestType {
  id: string;
}
export type DeletePostResponseType = PostSimpleType;

export type SpotsType = 'cafe' | 'home' | 'etc';

export interface CommonPostType {
  type: 'common';
  title: string;
  workingSpot: SpotsType;
  body: {
    text: string;
  };
}

export interface ReviewPostType {
  type: 'review';
  title: string;
  workingSpot: SpotsType;
  body: {
    text: string;
  };
}

export interface MogakPostType {
  type: 'mogak';
  title: string;
  workingSpot: SpotsType;
  body: {
    location: string;
    text: string;
    startTime: string;
    endTime: string;
    date: string;
    maxCount: number;
  };
}

export interface SpotPostType {
  type: 'spot';
  title: string;
  workingSpot: SpotsType;
  body: {
    spot: SpotsType;
  };
}

export type CustomPostType =
  | CommonPostType
  | ReviewPostType
  | MogakPostType
  | SpotPostType;
