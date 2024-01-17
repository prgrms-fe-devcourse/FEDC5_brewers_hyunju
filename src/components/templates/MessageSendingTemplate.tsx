import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import CircleLoading from '../loading/CircleLoading';
import Container from '../common/Container';
import Flex from '../common/Flex';
import MessageSending from '../MessageSending';
import PersonalConversation from '../PersonalConversation';
import Text from '../common/Text';

import useCreateMessage from '~/hooks/api/conversation/useCreateMessage';

import { userState } from '~/recoil/login/atoms';

import { GetMessageListsResponseType } from '~/types/api/message';
import useCreateNotification from '~/hooks/api/notification/useCreateNotification';

interface MessageSendingTemplatePropsType {
  messageListStatus: 'stale' | 'loading' | 'error' | 'success';
  messageSeenStatus: 'stale' | 'loading' | 'error' | 'success';
  messageListData: GetMessageListsResponseType;
  userId: string | undefined;
  fetch: () => void;
}

const MessageSendingTemplate = ({
  messageListStatus,
  messageSeenStatus,
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
    return (
      <MessageSendContainer maxWidth='md'>
        <MessageSend maxWidth='md'>
          <Flex
            direction='column'
            gap={1}
          >
            <Flex
              direction='column'
              gap={0.25}
            >
              <Flex
                justifyContent='center'
                mt={10}
              >
                <Text color='--adaptive400'>로그인해 주세요</Text>
              </Flex>
            </Flex>
          </Flex>
        </MessageSend>
      </MessageSendContainer>
    );
  }

  return (
    <MessageSendContainer maxWidth='md'>
      <MessageSend maxWidth='md'>
        <Flex
          gap={1}
          direction='column'
        >
          {(messageListStatus === 'error' || messageSeenStatus === 'error') && (
            <PersonalConversation>
              <CircleLoading color='--secondaryColor' />
            </PersonalConversation>
          )}
          {(messageListStatus === 'loading' ||
            messageSeenStatus === 'loading') && (
            <PersonalConversation>
              <CircleLoading color='--secondaryColor' />
            </PersonalConversation>
          )}

          {messageListStatus === 'success' &&
            messageSeenStatus === 'success' && (
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
      </MessageSend>
    </MessageSendContainer>
  );
};
export default MessageSendingTemplate;

const MessageSendContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const MessageSend = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  box-sizing: border-box;
  gap: 1.5rem;
`;
