import { useMemo } from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Text from '../common/Text';
import Flex from '../common/Flex';
import Avatar from '../common/Avatar';
import Image from '../common/Image';
import Button from '../common/Button';
import { IconMessage, IconUserMinus, IconUserPlus } from '@tabler/icons-react';
import { PostType, UserType } from '~/types/common';

export interface ProfileTemplatePropsType {
  user?: UserType;
  posts?: PostType[];
}

const ProfileTemplate = ({ user }: ProfileTemplatePropsType) => {
  const isMe = useMemo(() => {
    // 전역 상태에 담겨있는 정보와 profile 비교
    return true;
  }, []);

  const isFollow = useMemo(() => {
    // user followers에 내가 포함되어있는지 확인
    return false;
  }, []);

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
        <Cover alignItems='center'>
          <Image
            width='100%'
            height='auto'
            src={user?.coverImage}
            alt={`${user?.fullName}'s cover image`}
            letterBoxColor='--adaptive300'
          />
        </Cover>
        <Flex
          gap={1.5}
          mt={-5}
          px={1}
        >
          <Avatar
            src={user?.image}
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
              텍스트
            </Text>
            <Text
              height={150}
              weight={600}
            >
              텍스트
            </Text>
            <Text
              height={150}
              weight={600}
            >
              텍스트
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap={1}
          px={1}
        >
          <Button
            variant='filled'
            size='lg'
            color='--primaryColor'
            leftItem={
              isFollow ? (
                <IconUserPlus
                  size={18}
                  stroke={2.5}
                />
              ) : (
                <IconUserMinus
                  size={18}
                  stroke={2.5}
                />
              )
            }
          >
            팔로우
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
          >
            메시지
          </Button>
        </Flex>
      </ProfileContainer>
      {/* posts.map(el => <FeedListItem />) */}
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

const Cover = styled(Flex)`
  width: 100%;
  height: 14rem;

  overflow-y: hidden;
`;
