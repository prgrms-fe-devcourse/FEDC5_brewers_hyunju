import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import {
  IconMessage,
  IconSettings,
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
import { useRecoilValue } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import Tabs from '../common/Tabs';
import PasswordChangeForm from '../profile/PasswordChangeForm';
import NameChangeForm from '../profile/NameChangeForm';

export interface ProfileTemplatePropsType {
  user: UserType;
  actions: {
    requestUser: (config?: OptionalConfig) => Promise<void>;
    createFollow: (config?: OptionalConfig) => Promise<void>;
    deleteFollow: (config?: OptionalConfig) => Promise<void>;
    uploadPhoto: (config?: OptionalConfig) => Promise<void>;
  };
}

const ProfileTemplate = ({ user, actions }: ProfileTemplatePropsType) => {
  const auth = useRecoilValue(userState);

  const [isShowUpload, setIsShowUpload] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);
  const [isShowFollow, setIsShowFollow] = useState(false);
  const [isShowSetting, setIsShowSetting] = useState(false);

  const [isLoadingUpload, setIsLoadingUpload] = useState(false);

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
          {isMe && (
            <>
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
                onClick={() => setIsShowFollow(true)}
                disabled={!auth}
              >
                팔로잉 / 팔로워
              </Button>
              <Button
                variant='outlined'
                size='lg'
                color='--adaptive400'
                leftItem={
                  <IconSettings
                    size={18}
                    stroke={2.5}
                  />
                }
                onClick={() => setIsShowSetting(true)}
                disabled={!auth}
              >
                내 정보 수정
              </Button>
            </>
          )}
          {!isMe && (
            <>
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
            </>
          )}
        </Flex>
      </ProfileContainer>
      <PostContainer maxWidth='md'>
        {user.posts.map((post) => (
          <div key={post._id}>{post._id}</div>
        ))}
      </PostContainer>
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
          visible={isShowFollow}
          handleClose={() => setIsShowFollow(false)}
        >
          <Modal.Header handleClose={() => setIsShowFollow(false)}>
            팔로우 목록
          </Modal.Header>
          <Modal.Body>
            <Tabs>
              <Tabs.Header>
                <Tabs.Item
                  id={0}
                  text='팔로워'
                />
                <Tabs.Item
                  id={1}
                  text='팔로잉'
                />
              </Tabs.Header>
              <Tabs.Body id={0}>
                <Flex
                  py={1}
                  direction='column'
                >
                  {user.followers.length === 0 && (
                    <Text>팔로워가 없습니다.</Text>
                  )}
                  {user.followers.map((follow) => (
                    <UserListItem
                      key={follow._id}
                      id={follow.user}
                    />
                  ))}
                </Flex>
              </Tabs.Body>
              <Tabs.Body id={1}>
                <Flex
                  py={1}
                  direction='column'
                >
                  {user.following.length === 0 && (
                    <Text>팔로잉하고 있는 사용자가 없습니다.</Text>
                  )}
                  {user.following.map((follow) => (
                    <UserListItem
                      key={follow._id}
                      id={follow.user}
                    />
                  ))}
                </Flex>
              </Tabs.Body>
            </Tabs>
          </Modal.Body>
        </Modal>
        <Modal
          visible={isShowSetting}
          handleClose={() => setIsShowSetting(false)}
        >
          <Modal.Header handleClose={() => setIsShowSetting(false)}>
            내 정보 수정
          </Modal.Header>
          <Modal.Body>
            <Tabs>
              <Tabs.Header>
                <Tabs.Item
                  id={0}
                  text='이름'
                />
                <Tabs.Item
                  id={1}
                  text='비밀번호'
                />
              </Tabs.Header>
              <Tabs.Body id={0}>
                <NameChangeForm
                  onSuccess={async () => {
                    await actions.requestUser();
                    setIsShowSetting(false);
                  }}
                />
              </Tabs.Body>
              <Tabs.Body id={1}>
                <PasswordChangeForm onSuccess={() => setIsShowSetting(false)} />
              </Tabs.Body>
            </Tabs>
          </Modal.Body>
        </Modal>
      </>
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
