import { useState } from 'react';
import { axiosInstance } from '~/api/axios';
import * as commentApiType from '~/types/api/comment';

export const useComment = () => {
  const [createdComment, setCreatedComment] = useState<
    commentApiType.CreateCommentResponseType | undefined
  >(undefined);

  const createComment = async ({
    comment,
    postId,
  }: commentApiType.CreateCommentRequestType) => {
    try {
      const CREATE_COMMENT_URL = `/comments/create/${postId}`;
      const { data } =
        await axiosInstance.post<commentApiType.CreateCommentResponseType>(
          CREATE_COMMENT_URL,
          { comment, postId }
        );
      setCreatedComment(data);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Comment: ${e.message} (createComment / ${postId})`);
      }
    }
  };

  const deleteComment = async ({
    id,
  }: commentApiType.DeleteCommentRequestType) => {
    try {
      const DELETE_COMMENT_URL = `/comments/delete/${id}`;
      const { data } =
        await axiosInstance.delete<commentApiType.DeleteCommentResponseType>(
          DELETE_COMMENT_URL,
          { data: { id } }
        );
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Comment: ${e.message} (deleteComment/${id})`);
      }
    }
  };

  return { createdComment, createComment, deleteComment };
};

export default useComment;
