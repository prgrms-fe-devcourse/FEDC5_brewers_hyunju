import { NotificationType } from '~/types/common';

export type getNotificationListType = NotificationType[];

export interface createNotificationRequestType {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}

export type createNotificationResponseType = NotificationType;
