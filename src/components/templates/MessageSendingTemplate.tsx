import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import CircleLoading from '../loading/CircleLoading';
import Container from '../common/Container';
import Flex from '../common/Flex';
import MessageSending from '../MessageSending';
import PersonalConversation from '../PersonalConversation';
import Text from '../common/Text';

import useCreateMessage from '~/hooks/api/conversation/useCreateMessage';

import { userState } from '~/recoil/login/atoms';

import { GetMessageListsResponseType } from '~/types/api/message';

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
    }).then(fetch);

    textareaRef.current.value = '';
  };

  if (!user) {
    return (
      <Container
        maxWidth='sm'
        minWidth={20}
        minHeight={40}
      >
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
      </Container>
    );
  }

  return (
    <Container
      maxWidth='sm'
      style={{ padding: '1rem' }}
    >
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

        {messageListStatus === 'success' && messageSeenStatus === 'success' && (
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
