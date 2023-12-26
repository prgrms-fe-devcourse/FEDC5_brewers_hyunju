import { LikeType } from '~/types/common';

export interface createLikeRequestType {
  postId: string;
}
export type createLikeResponseType = LikeType;

export interface deleteLikeRequestType {
  id: string;
}
export type deleteLikeResponseType = LikeType;
