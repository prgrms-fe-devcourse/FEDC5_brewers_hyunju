import Container from '~/components/common/Container';
import CircleLoading from '~/components/loading/CircleLoading';
import DMItem from '~/components/directMessage/DMItem';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

import { ConversationType } from '~/types/common';

export interface DMListTemplatePropsType {
  conversations: ConversationType[];
  status: 'stale' | 'loading' | 'error' | 'success';
}
const DMListTemplate = ({ conversations, status }: DMListTemplatePropsType) => {
  const user = useRecoilValue(userState);

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
          <Text size='2xl'>채팅 목록</Text>
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
      minWidth={20}
      minHeight={40}
    >
      <Flex
        direction='column'
        gap={1}
      >
        <Text size='2xl'>채팅 목록</Text>
        <Flex
          direction='column'
          gap={0.25}
        >
          {status === 'loading' && <CircleLoading size={1} />}
          {status === 'success' && conversations.length ? (
            conversations?.map(({ message, sender, seen }, index) => (
              <DMItem
                key={index}
                userName={sender.fullName}
                message={message}
                seen={seen}
                src={sender.image}
              />
            ))
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
    </Container>
  );
};
export default DMListTemplate;
