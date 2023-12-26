import { FollowType } from '~/types/common';

export interface createFollowRequestType {
  userId: string;
}

export type createFollowResponseType = FollowType;

export interface deleteFollowRequestType {
  id: string;
}

export type deleteCommentReponseType = FollowType;
