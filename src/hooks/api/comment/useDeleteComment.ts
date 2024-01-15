import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { DeleteCommentResponseType } from '~/types/api/comment';

export const useDeleteComment = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<DeleteCommentResponseType | null>(null);
  const DELETE_COMMENT_URL = `/comments/delete`;

  const deleteComment = async (id: string) => {
    setStatus('loading');
    try {
      const response = await request<DeleteCommentResponseType>({
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
  return { status, data, request: deleteComment };
};

export default useDeleteComment;
