import Container from '../common/Container';
import Text from '../common/Text';
import Flex from '../common/Flex';
import { NotificationItemSkeleton } from '../notification/NotificationItem';

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
          size='xl'
          weight={800}
        >
          알림
        </Text>
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
