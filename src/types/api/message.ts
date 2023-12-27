import { ConversationType, MessageType } from '~/types/common';

export type GetMessageUserListsResponseType = ConversationType[];

export interface GetMessageListsRequestType {
  userId: string;
}

export type GetMessageListsResponseType = MessageType[];

export interface SendMessageRequestType {
  message: string;
  receiver: string;
}

export type SendMessageResponseType = MessageType;

export interface UpdateMessageSeenRequestType {
  sender: string;
}
