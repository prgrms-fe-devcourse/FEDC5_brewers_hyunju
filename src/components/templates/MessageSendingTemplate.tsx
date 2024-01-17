import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import Container from '../common/Container';
import Flex from '../common/Flex';
import MessageSending from '../MessageSending';
import PersonalConversation from '../PersonalConversation';
import RequiredLoginTemplate from './RequiredLoginTemplate';

import useCreateMessage from '~/hooks/api/conversation/useCreateMessage';

import { userState } from '~/recoil/login/atoms';

import { GetMessageListsResponseType } from '~/types/api/message';
import useCreateNotification from '~/hooks/api/notification/useCreateNotification';

interface MessageSendingTemplatePropsType {
  messageListData: GetMessageListsResponseType;
  userId: string | undefined;
  fetch: () => void;
}

const MessageSendingTemplate = ({
  messageListData,
  userId,
  fetch,
}: MessageSendingTemplatePropsType) => {
  const user = useRecoilValue(userState);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { handleCreateMessage, data: messageData } = useCreateMessage();
  const { request: createNoti } = useCreateNotification();

  const onClick = async () => {
    if (!textareaRef.current || !textareaRef.current.value) {
      return;
    }

    if (!userId) {
      return;
    }

    const text = textareaRef.current.value;
    textareaRef.current.value = '';

    await handleCreateMessage({
      message: text,
      receiver: userId,
    }).then(fetch);

    createNoti({
      notificationType: 'MESSAGE',
      notificationTypeId: messageData._id,
      userId: userId,
      postId: null,
    });
  };

  if (!user) {
    return <RequiredLoginTemplate />;
  }

  return (
    <MessageSendContainer maxWidth='md'>
      <MessageSend maxWidth='md'>
        <Flex
          gap={1}
          direction='column'
          style={{ height: '66vh' }}
        >
          <PersonalConversation
            messages={messageListData}
            userId={userId}
          />
          <MessageSending
            ref={textareaRef}
            onClick={onClick}
          />
        </Flex>
      </MessageSend>
    </MessageSendContainer>
  );
};
export default MessageSendingTemplate;

const MessageSendContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const MessageSend = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;
