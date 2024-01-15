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
    });

    handlePersonalMessageList({ userId });

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
