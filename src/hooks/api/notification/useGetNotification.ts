import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { GetNotificationListResponseType } from '~/types/api/notification';

export const useGetNotification = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<GetNotificationListResponseType | null>(
    null
  );
  const NOTIFICATION_GET_URL = '/notifications';

  const getNotification = async () => {
    setStatus('loading');
    try {
      const response = await request<GetNotificationListResponseType>({
        method: 'get',
        url: NOTIFICATION_GET_URL,
      });
      setData(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'GetNotification');
      setStatus('error');
    }
  };
  return { status, data, getNotification };
};

export default useGetNotification;
