import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import {
  IconMessage,
  IconUserMinus,
  IconUserPlus,
  IconUsers,
} from '@tabler/icons-react';
import Container from '../common/Container';
import Text from '../common/Text';
import Flex from '../common/Flex';
import Avatar from '../common/Avatar';
import Image from '../common/Image';
import Button from '../common/Button';
import { UserType } from '~/types/common';
import { OptionalConfig } from '~/hooks/api';
import Modal from '../common/Modal';
import ProfileImageUpload from '../uploadImage/ProfileImageUpload';
import UserListItem from '../UserListItem';

export interface ProfileTemplatePropsType {
  user: UserType;
  auth?: UserType;
  actions: {
    requestUser: (config?: OptionalConfig) => Promise<void>;
    createFollow: (config?: OptionalConfig) => Promise<void>;
    deleteFollow: (config?: OptionalConfig) => Promise<void>;
    uploadPhoto: (config?: OptionalConfig) => Promise<void>;
  };
}

const ProfileTemplate = ({ user, auth, actions }: ProfileTemplatePropsType) => {
  const [isShowUpload, setIsShowUpload] = useState(false);
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [isShowFollower, setIsShowFollower] = useState(false);
  const [isShowFollowing, setIsShowFollowing] = useState(false);

  const isMe = useMemo(() => {
    return user._id === auth?._id;
  }, [user, auth]);

  const myFollow = useMemo(() => {
    return user.followers.find((follow) => follow.follower === auth?._id);
  }, [user, auth]);

  const handleFollow = async () => {
    if (!auth) return;

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
      setIsShowUpload(true);
    } else {
      setIsShowProfile(true);
    }
  };

  const handleOnSaveProfileImage = async (file: File) => {
    // 동작
    setIsLoadingUpload(true);

    const form = new FormData();

    form.append('isCover', 'false');
    form.append('image', file);

    await actions.uploadPhoto({
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: form,
    });

    await actions.requestUser();

    setIsShowUpload(false);
    setIsLoadingUpload(false);
  };

  const handleOnCancelProfileImage = () => {
    setIsShowUpload(false);
  };

  return (
    <>
      <>
        <Modal
          visible={isShowUpload}
          handleClose={() => setIsShowUpload(false)}
        >
          <ProfileImageUpload
            currentImageUrl={user.image}
            onSave={handleOnSaveProfileImage}
            onCancel={handleOnCancelProfileImage}
            disabled={isLoadingUpload}
          />
        </Modal>
        <Modal
          visible={isShowProfile}
          handleClose={() => setIsShowProfile(false)}
        >
          <Modal.Header handleClose={() => setIsShowProfile(false)}>
            <Text weight={600}>프로필 이미지</Text>
          </Modal.Header>
          <Image
            width='100%'
            height='50%'
            src={user.image}
            alt={`${user.fullName}'s cover image`}
          />
        </Modal>
        <Modal
          visible={isShowFollower}
          handleClose={() => setIsShowFollower(false)}
        >
          <Modal.Header handleClose={() => setIsShowFollower(false)}>
            팔로워
          </Modal.Header>
          <Modal.Body>
            {user.followers.length === 0 && <Text>팔로워가 없습니다.</Text>}
            {user.followers.map((follow) => (
              <UserListItem
                key={follow._id}
                id={follow.user}
              />
            ))}
          </Modal.Body>
        </Modal>
        <Modal
          visible={isShowFollowing}
          handleClose={() => setIsShowFollowing(false)}
        >
          <Modal.Header handleClose={() => setIsShowFollowing(false)}>
            팔로잉
          </Modal.Header>
          <Modal.Body>
            {user.following.length === 0 && (
              <Text>팔로잉하고 있는 사용자가 없습니다.</Text>
            )}
            {user.following.map((follow) => (
              <UserListItem
                key={follow._id}
                id={follow.user}
              />
            ))}
          </Modal.Body>
        </Modal>
      </>
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
            style={{ flexShrink: 1 }}
          >
            <Text
              size='2xl'
              weight={800}
              lineHeight={175}
            >
              {user.fullName}
            </Text>
            <Text
              lineHeight={150}
              weight={600}
            >
              {user.email}
            </Text>
            <Text
              lineHeight={150}
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
              onClick={() => setIsShowFollower(true)}
              disabled={!auth}
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
              disabled={!auth}
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
              onClick={() => setIsShowFollowing(true)}
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
        {user.posts.map((post) => (
          <div key={post._id}>{post._id}</div>
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
