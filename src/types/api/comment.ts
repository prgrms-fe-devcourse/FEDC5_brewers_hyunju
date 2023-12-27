import { CommentType } from '~/types/common';

export interface CreateCommentRequestType {
  comment: string;
  postId: string;
}

export type CreateCommentResponseType = CommentType;

export interface DeleteCommentRequestType {
  id: string;
}

export type DeleteCommentResponseType = CommentType;
