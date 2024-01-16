import { NotificationType } from '~/types/common';
import Avatar from '../common/Avatar';
import Flex from '../common/Flex';
import Text from '../common/Text';
import Skeleton from '../common/Skeleton';
import { useMemo } from 'react';

export interface NotificationItemPropsType {
  data: NotificationType;
}

const NotificationItem = ({ data }: NotificationItemPropsType) => {
  const type = useMemo(() => {
    if (data.message) return 'MESSAGE';
    else if (data.comment) return 'COMMENT';
    else if (data.follow) return 'FOLLOW';
    else return 'LIKE';
  }, [data]);

  const message = {
    MESSAGE: '메시지를 보냈습니다.',
    COMMENT: '댓글을 남겼습니다.',
    FOLLOW: '팔로우 했습니다.',
    LIKE: '좋아요를 누르셨습니다.',
  };

  return (
    <Flex
      alignItems='center'
      gap={1}
    >
      <Avatar
        size='sm'
        handleClick={() => {}}
        src={data.author.image}
        userId={data.author._id}
      />
      <Flex
        direction='column'
        gap={0.25}
      >
        <Text size='md'>{type}</Text>
        <Text size='sm'>
          {data.author.fullName}님께서 {message[type]}
        </Text>
      </Flex>
    </Flex>
  );
};

export const NotificationItemSkeleton = () => {
  return (
    <Flex
      alignItems='center'
      gap={1}
    >
      <Skeleton
        width={2.75}
        circle
        animation
      />
      <Flex
        direction='column'
        gap={0.25}
      >
        <Skeleton width={4} />
        <Skeleton height={0.875} />
      </Flex>
    </Flex>
  );
};

export default NotificationItem;
