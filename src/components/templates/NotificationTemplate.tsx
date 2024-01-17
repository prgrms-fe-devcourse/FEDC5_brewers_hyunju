import styled from '@emotion/styled';
import { NotificationType } from '~/types/common';
import StyledContainer from '../common/Container';
import Text from '../common/Text';
import NotificationItem from '../notification/NotificationItem';
import Flex from '../common/Flex';
import Button from '../common/Button';
import useReadNotification from '~/hooks/api/notification/useReadNotification';
import { useMemo } from 'react';

export interface ProfileTemplatePropsType {
  data: NotificationType[];
  action: {
    getNotification: () => void;
  };
}

const NotificationTemplate = ({ data, action }: ProfileTemplatePropsType) => {
  const { request: readNoti } = useReadNotification();

  const noties = useMemo(() => {
    return data.filter((el) => !el.seen);
  }, [data]);

  const handleReadAll = async () => {
    await readNoti();
    action.getNotification();
  };

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
          onClick={handleReadAll}
        >
          전체 읽음 처리
        </Button>
        <Flex
          as='ul'
          direction='column'
          gap={1}
        >
          {noties.length === 0 && <Text>알림이 없습니다.</Text>}
          {noties.map((el) => (
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

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;

  padding: 0;

  background-color: var(--transparent);
`;
