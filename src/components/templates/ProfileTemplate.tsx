import { useMemo } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Text from '../common/Text';
import Flex from '../common/Flex';
import Avatar from '../common/Avatar';
import Image from '../common/Image';
import Button from '../common/Button';
import {
  IconMessage,
  IconUserMinus,
  IconUserPlus,
  IconUsers,
} from '@tabler/icons-react';
import { UserType } from '~/types/common';
import { OptionalConfig } from '~/hooks/api';

export interface ProfileTemplatePropsType {
  user: UserType;
  auth?: UserType;
  actions: {
    requestUser: (config?: OptionalConfig) => Promise<void>;
    createFollow: (config?: OptionalConfig) => Promise<void>;
    deleteFollow: (config?: OptionalConfig) => Promise<void>;
  };
}

const ProfileTemplate = ({ user, auth, actions }: ProfileTemplatePropsType) => {
  const isMe = useMemo(() => {
    return user._id === auth?._id;
  }, [user, auth]);

  const myFollow = useMemo(() => {
    return user.followers.find((follow) => follow.follower === auth?._id);
  }, [user, auth]);

  const handleFollow = async () => {
    if (myFollow) {
      await actions.deleteFollow({
        data: {
          id: myFollow._id,
        },
      });
    } else {
      await actions.createFollow({
        data: {
          userId: user._id,
        },
      });
    }

    actions.requestUser();
  };

  const handlerProfileClick = () => {
    if (isMe) {
      alert('profile edit modal');
    } else {
      alert('large profile image');
    }
  };

  return (
    <>
      <ProfileContainer maxWidth='md'>
        <Text
          size='3xl'
          weight={800}
        >
          프로필
        </Text>
        <Image
          width='100%'
          height={14}
          src={user.coverImage}
          alt={`${user.fullName}'s cover image`}
          letterBoxColor='--adaptive300'
          mode='cover'
        />
        <Flex
          gap={1.5}
          mt={-5}
          px={1}
        >
          <Avatar
            src={user.image}
            size='lg'
            handleClick={handlerProfileClick}
          />
          <Flex
            direction='column'
            justifyContent='flex-end'
          >
            <Text
              size='2xl'
              weight={800}
              height={175}
            >
              {user.fullName}
            </Text>
            <Text
              height={150}
              weight={600}
            >
              {user.email}
            </Text>
            <Text
              height={150}
              weight={600}
            >
              {user.role}
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap={1}
          px={1}
        >
          {isMe ? (
            <Button
              variant='filled'
              size='lg'
              color='--primaryColor'
              leftItem={
                <IconUsers
                  size={18}
                  stroke={2.5}
                />
              }
              onClick={() => alert('my follower list')}
            >
              팔로워
            </Button>
          ) : (
            <Button
              variant='filled'
              size='lg'
              color='--primaryColor'
              leftItem={
                myFollow ? (
                  <IconUserMinus
                    size={18}
                    stroke={2.5}
                  />
                ) : (
                  <IconUserPlus
                    size={18}
                    stroke={2.5}
                  />
                )
              }
              onClick={handleFollow}
            >
              {myFollow ? '팔로우 해제' : '팔로우'}
            </Button>
          )}
          {isMe ? (
            <Button
              variant='outlined'
              size='lg'
              color='--adaptive400'
              leftItem={
                <IconUsers
                  size={18}
                  stroke={2.5}
                />
              }
              onClick={() => alert('my following list')}
            >
              팔로잉
            </Button>
          ) : (
            <Button
              variant='outlined'
              size='lg'
              color='--adaptive400'
              leftItem={
                <IconMessage
                  size={18}
                  stroke={2.5}
                />
              }
              disabled
            >
              메시지
            </Button>
          )}
        </Flex>
      </ProfileContainer>
      <PostContainer maxWidth='md'>
        {user.posts.map((el) => (
          <div>{el._id}</div>
        ))}
      </PostContainer>
    </>
  );
};

export default ProfileTemplate;

const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const PostContainer = styled(Container)`
  background-color: var(--transparent);
`;
