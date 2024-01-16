import { useEffect } from 'react';
import useGetUser from '~/hooks/api/users/useGetUser';
import Flex from '~/components/common/Flex';
import Skeleton from '~/components/common/Skeleton';
import Avatar from '~/components/common/Avatar';
import Text from '~/components/common/Text';

export interface UserListItemPropsType {
  id: string;
}

const UserListItem = (props: UserListItemPropsType) => {
  const { status, data, request } = useGetUser(props.id);

  useEffect(() => {
    request();
  }, []);

  const handleClickProfile = () => {
    // 해당 프로필 페이지로 이동
  };

  if (status === 'success' && data) {
    return (
      <Flex
        alignItems='center'
        gap={0.5}
      >
        <Avatar
          userId={data._id}
          size='sm'
          src={data.image}
          alt={`${data.fullName}s profile image`}
          handleClick={handleClickProfile}
        />
        <Text weight={600}>{data.fullName}</Text>
        <Text color='--adaptive600'>{data.email}</Text>
      </Flex>
    );
  } else {
    return (
      <Flex
        alignItems='center'
        gap={0.5}
      >
        <Skeleton
          width={2.5}
          circle
        />
        <Skeleton />
        <Skeleton />
      </Flex>
    );
  }
};

export default UserListItem;
