import { useState } from 'react';
import { request } from '~/api/axios';
import { getItem } from '~/utils/localStorage';
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
    const userToken = getItem<string | null>('userToken', null);
    try {
      const response = await request({
        method: 'DELETE',
        url: DELETE_COMMENT_URL,
        headers: {
          ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
        },
        data: { id },
      });
      setData(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, `Comment (deleteComment / ${id})`); // handleError 함수를 사용하여 에러 처리
      setStatus('error');
    }
  };
  return { status, data, deleteComment };
};

export default useDeleteComment;
