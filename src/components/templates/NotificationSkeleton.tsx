import styled from '@emotion/styled';
import StyledContainer from '../common/Container';
import Text from '../common/Text';
import Flex from '../common/Flex';
import { NotificationItemSkeleton } from '../notification/NotificationItem';
import Button from '../common/Button';

const NotificationSkeleton = () => {
  return (
    <Container
      maxWidth='md'
      p={2}
    >
      <Flex
        direction='column'
        gap={2}
      >
        <Text
          size='3xl'
          weight={800}
        >
          알림
        </Text>
        <Button
          variant='text'
          size='lg'
          color='--primaryColor'
          disabled={true}
        >
          전체 읽음 처리
        </Button>
        <Flex
          as='ul'
          direction='column'
          gap={1}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <NotificationItemSkeleton />
            </li>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default NotificationSkeleton;

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;

  padding: 0;

  background-color: var(--transparent);
`;
