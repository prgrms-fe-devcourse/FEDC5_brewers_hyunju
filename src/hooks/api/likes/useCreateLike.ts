import { useState } from 'react';
import { CreateLikeResponseType } from '~/types/api/likes';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';

export const useCreateLike = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<CreateLikeResponseType | null>(null);
  const CREATE_LIKE_URL = '/likes/create';

  const createLike = async (postId: string) => {
    setStatus('loading');
    try {
      const response = await request<CreateLikeResponseType>({
        method: 'post',
        url: CREATE_LIKE_URL,
        data: {
          postId,
        },
      });

      setData(response.data);
      setStatus('success');

      return response.data;
    } catch (e: unknown) {
      handleError(e, 'CreateNotification');
      setStatus('error');
    }
  };

  return { status, data, request: createLike };
};

export default useCreateLike;
