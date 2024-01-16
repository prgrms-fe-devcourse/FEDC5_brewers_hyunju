import { NotificationType } from '~/types/common';
import Container from '../common/Container';
import Text from '../common/Text';
import NotificationItem from '../notification/NotificationItem';
import Flex from '../common/Flex';

export interface ProfileTemplatePropsType {
  data: NotificationType[];
}

const NotificationTemplate = ({ data }: ProfileTemplatePropsType) => {
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
          {data.length === 0 && <Text>알림이 없습니다.</Text>}
          {data.map((el) => (
            <li key={el._id}>
              <NotificationItem data={el} />
            </li>
          ))}
        </Flex>
      </Flex>
    </Container>
  );
};

export default NotificationTemplate;
