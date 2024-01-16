import { ReactNode } from 'react';

import PersonalMessage from './PersonalMessage';
import Flex from './common/Flex';

import { MessageType } from '~/types/common';

interface PersonalConversationPropsType {
  messages?: MessageType[];
  userId?: string | undefined;
  children?: ReactNode;
}

const PersonalConversation = ({
  messages,
  userId,
  children,
}: PersonalConversationPropsType) => {
  const convertTime = (createdAt: string) => {
    return new Date(createdAt).toLocaleTimeString('ko-KR').slice(0, -3);
  };

  if (children) {
    return (
      <Flex
        direction='column'
        gap={0.25}
        px={1}
        style={{ height: '70vh', overflowY: 'auto' }}
      >
        {children}
      </Flex>
    );
  }

  return (
    <Flex
      direction='column'
      gap={0.25}
      px={1}
      style={{ height: '70vh', overflowY: 'auto' }}
    >
      {messages?.map((message, index) => (
        <PersonalMessage
          key={index}
          message={message.message}
          subject={message.sender._id === userId ? 'you' : 'me'}
          createdAt={
            index < messages.length - 1
              ? convertTime(messages[index + 1].createdAt) ===
                  convertTime(message.createdAt) &&
                messages[index + 1].sender._id === message.sender._id
                ? null
                : convertTime(message.createdAt)
              : convertTime(message.createdAt)
          }
          seen={message.seen}
        />
      ))}
    </Flex>
  );
};
export default PersonalConversation;
