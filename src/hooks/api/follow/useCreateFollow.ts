import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { CreateFollowResponseType } from '~/types/api/follow';

export const useCreateFollow = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<CreateFollowResponseType | null>(null);
  const CREATE_FOLLOW_URL = '/follow/create';

  const createFollow = async (userId: string) => {
    setStatus('loading');
    try {
      const response = await request<CreateFollowResponseType>({
        method: 'post',
        url: CREATE_FOLLOW_URL,
        data: {
          userId,
        },
      });

      setData(response.data);
      setStatus('success');

      return response.data;
    } catch (e: unknown) {
      handleError(e, 'CreateFollow');
      setStatus('error');
    }
  };

  return { status, data, request: createFollow };
};

export default useCreateFollow;
