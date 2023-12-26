import { CommentType } from '~/types/common';

export interface createCommentRequestType {
  comment: string;
  postId: string;
}

export type createCommentResponseType = CommentType;

export interface deleteCommentRequestType {
  id: string;
}

export type deleteCommentResponseType = CommentType;
