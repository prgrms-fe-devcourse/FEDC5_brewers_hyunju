import PersonalMessage from './PersonalMessage';
import Flex from './common/Flex';

import { MessageType } from '~/types/common';

interface PersonalConversationPropsType {
  messages: MessageType[];
  userId: string | undefined;
}

const PersonalConversation = ({
  messages,
  userId,
}: PersonalConversationPropsType) => {
  const convertTime = (createdAt: string) => {
    return new Date(createdAt).toLocaleTimeString('ko-KR').slice(0, -3);
  };

  return (
    <Flex
      direction='column'
      gap={0.25}
    >
      {messages?.map((message, idx) => (
        <PersonalMessage
          message={message.message}
          subject={message.sender._id === userId ? 'you' : 'me'}
          createdAt={
            idx < messages.length - 1
              ? convertTime(messages[idx + 1].createdAt) ===
                  convertTime(message.createdAt) &&
                messages[idx + 1].sender._id === message.sender._id
                ? null
                : convertTime(message.createdAt)
              : convertTime(message.createdAt)
          }
        />
      ))}
    </Flex>
  );
};
export default PersonalConversation;
