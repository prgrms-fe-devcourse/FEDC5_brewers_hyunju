import { useState } from 'react';
import { request } from '~/api/axios';
import { handleError } from '~/utils/handleError';
import {
  DeleteCommentRequestType,
  DeleteCommentResponseType,
} from '~/types/api/comment';

export const useDeleteComment = ({ id }: DeleteCommentRequestType) => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<DeleteCommentResponseType | null>(null);
  const DELETE_COMMENT_URL = `/comments/delete`;

  const deleteComment = async () => {
    setStatus('loading');
    try {
      const response = await request({
        method: 'delete',
        url: DELETE_COMMENT_URL,
        data: { id },
      });
      setData(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, `Comment (deleteComment / ${id})`);
      setStatus('error');
    }
  };
  return { status, data, deleteComment };
};

export default useDeleteComment;
