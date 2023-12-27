import { NotificationType } from '~/types/common';

export type GetNotificationListResponseType = NotificationType[];

export interface CreateNotificationRequestType {
  notificationType: 'COMMENT' | 'FOLLOW' | 'LIKE' | 'MESSAGE';
  notificationTypeId: string;
  userId: string;
  postId: string | null;
}

export type CreateNotificationResponseType = NotificationType;
