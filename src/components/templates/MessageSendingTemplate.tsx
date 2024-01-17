import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import CircleLoading from '../loading/CircleLoading';
import Container from '../common/Container';
import Flex from '../common/Flex';
import MessageSending from '../MessageSending';
import PersonalConversation from '../PersonalConversation';
import Button from '../common/Button';

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
  const navigate = useNavigate();

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

  const handleLoginClick = () => {
    navigate('/login');
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
                my={10}
              >
                <Button
                  color='--adaptive400'
                  variant='text'
                  size='md'
                  onClick={handleLoginClick}
                >
                  로그인해 주세요
                </Button>
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
