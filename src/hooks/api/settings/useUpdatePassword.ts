import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';

export const useUpdatePassword = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [message, setMessage] = useState<string | null>(null);
  const UPDATE_PASSWORD_URL = '/settings/update-password';

  const updatePassword = async (password: string) => {
    setStatus('loading');
    try {
      const response = await request<string>({
        method: 'put',
        url: UPDATE_PASSWORD_URL,
        data: {
          password,
        },
      });
      setMessage(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'UpdatePassword');
      setStatus('error');
    }
  };

  return { status, data: message, request: updatePassword };
};

export default useUpdatePassword;
