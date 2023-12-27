import { useState } from 'react';
import { axiosInstance } from '~/api/axios';
import { NotificationType } from '~/types/common';
import * as notificationApiType from '~/types/api/notification';

const useNotification = () => {
  const [notification, setNotification] =
    useState<notificationApiType.GetNotificationListResponseType>();

  const fetchNotification = async () => {
    try {
      const FETCH_NOTIFICATION_URL = `/notifications`;
      const { data } =
        await axiosInstance.get<notificationApiType.GetNotificationListResponseType>(
          FETCH_NOTIFICATION_URL
        );
      setNotification(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Notification: ${e.message} (fetchNotification)`);
      }
    }
  };

  const readNotification = async () => {
    try {
      const READ_NOTIFICATION_URL = `/notifications/seen`;
      await axiosInstance.put<notificationApiType.GetNotificationListResponseType>(
        READ_NOTIFICATION_URL
      );
      fetchNotification();
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Notification: ${e.message} (readNotification)`);
      }
    }
  };

  const createNotification = async (
    notificationParams: notificationApiType.CreateNotificationRequestType
  ) => {
    try {
      const CREATE_NOTIFICATION_URL = `/notifications/create`;
      const { data } = await axiosInstance.post<NotificationType>(
        CREATE_NOTIFICATION_URL,
        notificationParams
      );

      fetchNotification();
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Notification: ${e.message} (createNotification)`);
      }
    }
  };

  return {
    notification,
    fetchNotification,
    readNotification,
    createNotification,
  };
};

export default useNotification;
