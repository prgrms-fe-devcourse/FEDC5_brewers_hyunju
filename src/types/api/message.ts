import { ConversationType, MessageType } from '~/types/common';

export type getUserListsResponseType = ConversationType[];

export interface getMessageListsRequestType {
  userId: string;
}

export type getMessageListsResponseType = MessageType[];

export interface sendMessageRequestType {
  message: string;
  receiver: string;
}

export type sendMessageResponseType = MessageType;

export interface updateMessageSeenRequestType {
  sender: string;
}
