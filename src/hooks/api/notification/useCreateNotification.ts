import { useState } from 'react';
import { request } from '~/api/axios';
import { getItem } from '~/utils/localStorage';
import { handleError } from '~/utils/handleError';
import {
  CreateNotificationRequestType,
  CreateNotificationResponseType,
} from '~/types/api/notification';

export const useCreateNotification = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [notification, setNotification] =
    useState<CreateNotificationResponseType | null>(null);
  const CREATE_NOTIFICATION_URL = '/notifications/create';

  const createNotification = async ({
    notificationType,
    notificationTypeId,
    userId,
    postId,
  }: CreateNotificationRequestType) => {
    setStatus('loading');
    const userToken = getItem<string | null>('userToken', null);
    try {
      const response = await request({
        method: 'post',
        url: CREATE_NOTIFICATION_URL,
        headers: {
          ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
        },
        data: {
          notificationType,
          notificationTypeId,
          userId,
          postId,
        },
      });
      setNotification(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'CreateNotification');
      setStatus('error');
    }
  };

  return { status, notification, createNotification };
};

export default useCreateNotification;
