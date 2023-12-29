import { useState } from 'react';
import { request } from '~/api/axios';
import { getItem } from '~/utils/localStorage';
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
    const userToken = getItem<string | null>('userToken', null);
    try {
      const response = await request({
        method: 'GET',
        url: NOTIFICATION_GET_URL,
        headers: {
          ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
        },
      });
      setData(response);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'GetNotification');
      setStatus('error');
    }
  };
  return { status, data, getNotification };
};

export default useGetNotification;
