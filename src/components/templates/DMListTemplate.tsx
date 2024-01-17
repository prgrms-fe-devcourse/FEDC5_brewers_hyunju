import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';

import Container from '~/components/common/Container';
import CircleLoading from '~/components/loading/CircleLoading';
import DMItem from '~/components/directMessage/DMItem';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

import { userState } from '~/recoil/login/atoms';

import { ConversationType } from '~/types/common';

export interface DMListTemplatePropsType {
  conversations: ConversationType[];
  status: 'stale' | 'loading' | 'error' | 'success';
}
const DMListTemplate = ({ conversations, status }: DMListTemplatePropsType) => {
  const user = useRecoilValue(userState);

  if (!user) {
    return (
      <MessageListContainer maxWidth='md'>
        <MessageList maxWidth='md'>
          <Flex
            direction='column'
            gap={1}
          >
            <Text
              size='3xl'
              weight={800}
            >
              채팅 목록
            </Text>
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
        </MessageList>
      </MessageListContainer>
    );
  }

  return (
    <MessageListContainer maxWidth='md'>
      <MessageList maxWidth='md'>
        <Flex
          direction='column'
          gap={1}
        >
          <Text
            size='3xl'
            weight={800}
          >
            채팅 목록
          </Text>
          <Flex direction='column'>
            <Text style={{ textAlign: 'right' }}>상대방 메시지 확인 상태</Text>
            <Flex
              alignItems='center'
              gap={0.25}
              style={{ marginLeft: 'auto' }}
            >
              <Badge />
              <Text>읽지 않음</Text>
            </Flex>
          </Flex>
          <Flex
            direction='column'
            gap={0.25}
          >
            {status === 'loading' && <CircleLoading size={'sm'} />}
            {status === 'success' && conversations.length ? (
              conversations?.map(
                ({ message, sender, receiver, seen }, index) => (
                  <DMItem
                    key={index}
                    userName={
                      sender._id === user?._id
                        ? receiver.fullName
                        : sender.fullName
                    }
                    message={message}
                    seen={seen}
                    src={
                      sender._id === user?._id ? receiver.image : sender.image
                    }
                    userId={
                      sender._id === user?._id ? receiver._id : sender._id
                    }
                  />
                )
              )
            ) : (
              <Flex
                justifyContent='center'
                mt={10}
              >
                <Text color='--adaptive400'>메시지함이 비었습니다</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      </MessageList>
    </MessageListContainer>
  );
};
export default DMListTemplate;

const Badge = styled.div`
  top: 1.75rem;
  left: 2rem;

  width: 0.75rem;
  height: 0.75rem;
  border-radius: 100%;

  background-color: var(--secondaryColor);
`;

const MessageListContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const MessageList = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;
