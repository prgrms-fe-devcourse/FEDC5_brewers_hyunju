import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';

export const useReadNotification = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');

  const NOTIFICATION_URL = '/notifications/seen';

  const readNotification = async () => {
    setStatus('loading');
    try {
      await request({
        method: 'put',
        url: NOTIFICATION_URL,
      });
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'ReadNotification');
      setStatus('error');
    }
  };
  return { status, request: readNotification };
};

export default useReadNotification;
