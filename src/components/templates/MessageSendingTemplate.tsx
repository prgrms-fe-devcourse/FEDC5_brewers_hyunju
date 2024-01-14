import { useRef } from 'react';

import CircleLoading from '../loading/CircleLoading';
import Container from '../common/Container';
import Flex from '../common/Flex';
import PersonalConversation from '../PersonalConversation';
import MessageSending from '../MessageSending';

import useCreateMessage from '~/hooks/api/conversation/useCreateMessage';

import {
  GetMessageListsRequestType,
  GetMessageListsResponseType,
} from '~/types/api/message';

interface MessageSendingTemplatePropsType {
  messageListStatus: 'stale' | 'loading' | 'error' | 'success';
  messageListData: GetMessageListsResponseType;
  userId: string | undefined;
  handlePersonalMessageList: ({
    userId,
  }: GetMessageListsRequestType) => Promise<void>;
}

const MessageSendingTemplate = ({
  messageListStatus,
  messageListData,
  userId,
  handlePersonalMessageList,
}: MessageSendingTemplatePropsType) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { handleCreateMessage } = useCreateMessage();

  const onClick = () => {
    if (!textareaRef.current || !textareaRef.current.value) {
      return;
    }

    if (!userId) {
      return;
    }

    handleCreateMessage({
      message: textareaRef.current.value,
      receiver: userId,
    });

    handlePersonalMessageList({ userId });

    textareaRef.current.value = '';
  };

  return (
    <Container
      maxWidth='sm'
      style={{ padding: '1rem' }}
    >
      <Flex
        gap={1}
        direction='column'
      >
        {messageListStatus === 'loading' && <CircleLoading />}
        {messageListStatus === 'success' && (
          <PersonalConversation
            messages={messageListData}
            userId={userId}
          />
        )}

        <MessageSending
          ref={textareaRef}
          onClick={onClick}
        />
      </Flex>
    </Container>
  );
};
export default MessageSendingTemplate;
