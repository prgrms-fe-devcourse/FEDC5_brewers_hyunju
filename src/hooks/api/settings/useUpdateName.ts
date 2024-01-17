import { useState } from 'react';
import request from '~/api/axios';
import { UserType } from '~/types/common';
import { handleError } from '~/utils/handleError';

export const useUpdateName = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<UserType | null>(null);
  const UPDATE_NAME_URL = '/settings/update-user';

  const updateName = async (fullName: string, username?: string) => {
    setStatus('loading');

    try {
      const response = await request<UserType>({
        method: 'put',
        url: UPDATE_NAME_URL,
        data: {
          fullName,
          username,
        },
      });
      setData(response.data);
      setStatus('success');

      return response.data;
    } catch (e: unknown) {
      handleError(e, 'UpdateName');
      setStatus('error');
    }
  };

  return { status, data: data, request: updateName };
};

export default useUpdateName;
