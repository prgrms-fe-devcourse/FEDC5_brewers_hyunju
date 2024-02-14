import { FollowType } from '~/types/common';

export interface CreateFollowRequestType {
  userId: string;
}

export type CreateFollowResponseType = FollowType;

export interface DeleteFollowRequestType {
  id: string;
}

export type DeleteCommentResponseType = FollowType;
