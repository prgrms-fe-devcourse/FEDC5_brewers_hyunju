import { LikeType } from '~/types/common';

export interface CreateLikeRequestType {
  postId: string;
}
export type CreateLikeResponseType = LikeType;

export interface DeleteLikeRequestType {
  id: string;
}
export type DeleteLikeResponseType = LikeType;
