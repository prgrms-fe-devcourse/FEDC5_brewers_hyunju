import { NotificationType } from '~/types/common';
import Avatar from '../common/Avatar';
import Flex from '../common/Flex';
import Text from '../common/Text';
import Skeleton from '../common/Skeleton';

export interface NotificationItemPropsType {
  data: NotificationType;
}

const NotificationItem = ({ data }: NotificationItemPropsType) => {
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
        <Text size='md'>{data.author.fullName}</Text>
        <Text size='sm'>{data.author.fullName}님께서 ...</Text>
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
