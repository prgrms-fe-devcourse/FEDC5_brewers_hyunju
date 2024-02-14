import { NotificationType } from '~/types/common';
import Avatar from '../common/Avatar';
import Flex from '../common/Flex';
import Text from '../common/Text';
import Skeleton from '../common/Skeleton';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export interface NotificationItemPropsType {
  data: NotificationType;
}

const NotificationItem = ({ data }: NotificationItemPropsType) => {
  const navigator = useNavigate();

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
    <StyledFlex
      alignItems='center'
      gap={1}
      p={0.5}
      onClick={() => {
        if (type === 'FOLLOW') return navigator(`/profile/${data.author._id}`);
        if (type === 'MESSAGE') return navigator(`/message/${data.author._id}`);
        return navigator(`/post/${data.post}`);
      }}
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
        <NotiType
          size='md'
          weight={800}
        >
          {type.toLocaleLowerCase()}
        </NotiType>
        <Text size='md'>
          {data.author.fullName}님께서 {message[type]}
        </Text>
      </Flex>
    </StyledFlex>
  );
};

export const NotificationItemSkeleton = () => {
  return (
    <StyledFlex
      alignItems='center'
      gap={1}
      p={0.5}
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
    </StyledFlex>
  );
};

export default NotificationItem;

const StyledFlex = styled(Flex)`
  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shawdow-lg);

  background-color: var(--adaptive50);

  &:hover {
    background-color: var(--adaptive200);

    cursor: pointer;
    transition: 125ms;
  }
`;

const NotiType = styled(Text)`
  text-transform: capitalize;
`;
