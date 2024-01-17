import styled from '@emotion/styled';
import Container from '../common/Container';
import Text from '../common/Text';
import Flex from '../common/Flex';
import Button from '../common/Button';
import { IconMessage, IconUser } from '@tabler/icons-react';
import Skeleton from '../common/Skeleton';

const ProfileSkeleton = () => {
  return (
    <ProfileContainer maxWidth='md'>
      <Text
        size='3xl'
        weight={800}
      >
        프로필
      </Text>
      <Profile maxWidth='md'>
        <ImageSkeleton
          height={14}
          animation
        />
        <Flex
          gap={1.5}
          mt={-5}
          px={1}
        >
          <Skeleton
            width={9.875}
            circle
          />
          <Flex
            direction='column'
            justifyContent='flex-end'
          >
            <Skeleton
              height={1.5}
              my={0.5}
              animation
            />
            <Skeleton
              height={1}
              my={0.25}
              animation
            />
            <Skeleton
              height={1}
              my={0.25}
              animation
            />
          </Flex>
        </Flex>
        <Flex
          gap={1}
          px={1}
        >
          <Button
            variant='filled'
            size='lg'
            color='--adaptive400'
            leftItem={
              <IconUser
                size={18}
                stroke={2.5}
              />
            }
            disabled
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
            disabled
          >
            메시지
          </Button>
        </Flex>
      </Profile>
    </ProfileContainer>
  );
};

export default ProfileSkeleton;

const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: var(--radius-lg);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const Profile = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const ImageSkeleton = styled(Skeleton)`
  width: 100%;
`;
