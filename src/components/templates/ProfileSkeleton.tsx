import styled from 'styled-components';
import Container from '../common/Container';
import Text from '../common/Text';
import Flex from '../common/Flex';
import Button from '../common/Button';
import { IconMessage, IconUser } from '@tabler/icons-react';
import Skeleton from '../common/Skeleton';

const ProfileSkeleton = () => {
  return (
    <>
      <ProfileContainer maxWidth='md'>
        <Text
          size='3xl'
          weight={800}
        >
          프로필
        </Text>
        <Cover>
          <ImageSkeleton animation />
        </Cover>
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
      </ProfileContainer>
      {/* posts.map(el => <FeedListItem />) */}
    </>
  );
};

export default ProfileSkeleton;

const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const Cover = styled.div`
  width: 100%;
  height: 14rem;
`;

const ImageSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
`;
