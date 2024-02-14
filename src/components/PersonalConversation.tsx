import { ReactNode, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

import PersonalMessage from './PersonalMessage';
import Flex from './common/Flex';

import { MessageType } from '~/types/common';

interface PersonalConversationPropsType {
  messages: MessageType[];
  userId?: string | undefined;
  children?: ReactNode;
}

const PersonalConversation = ({
  messages,
  userId,
  children,
}: PersonalConversationPropsType) => {
  const rootElementRef = useRef<HTMLDivElement>(null);
  const messagesLengthRef = useRef(0);

  const convertTime = (createdAt: string) => {
    return new Date(createdAt).toLocaleTimeString('ko-KR').slice(0, -3);
  };

  useEffect(() => {
    if (!messages) return;
    if (messagesLengthRef.current === messages.length) return;
    messagesLengthRef.current = messages.length;

    if (rootElementRef.current) {
      rootElementRef.current.scrollTop =
        rootElementRef.current.scrollHeight -
        rootElementRef.current.clientHeight;
    }
  }, [messages]);

  if (children) {
    return (
      <Flex
        direction='column'
        gap={0.25}
        px={1}
        style={{ height: '70vh', overflowY: 'auto' }}
        alignItems='center'
        justifyContent='center'
      >
        {children}
      </Flex>
    );
  }

  return (
    <Div
      direction='column'
      gap={0.25}
      px={1}
      style={{ height: '66vh', overflowY: 'auto' }}
      ref={rootElementRef}
    >
      {messages
        ? messages.map((message, index) => (
            <PersonalMessage
              key={message._id}
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
          ))
        : null}
    </Div>
  );
};
export default PersonalConversation;

const Div = styled(Flex)`
  overflow-x: hidden;
`;
