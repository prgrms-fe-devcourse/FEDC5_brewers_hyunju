import { useState } from 'react';
import { request } from '~/api/axios';
import { getItem } from '~/utils/localStorage';
import { handleError } from '~/utils/handleError';
import {
  CreateCommentRequestType,
  CreateCommentResponseType,
} from '~/types/api/comment';

export const useCreateComment = ({
  comment,
  postId,
}: CreateCommentRequestType) => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<CreateCommentResponseType | null>(null);
  const CREATE_COMMENT_URL = `/comments/create`;

  const createComment = async () => {
    setStatus('loading');
    const userToken = getItem<string | null>('userToken', null);
    try {
      const response = await request({
        method: 'POST',
        url: CREATE_COMMENT_URL,
        headers: {
          ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
        },
        data: { comment, postId },
      });
      setData(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, `Comment (createComment / ${postId})`);
      setStatus('error');
    }
  };
  return { status, data, createComment };
};

export default useCreateComment;
