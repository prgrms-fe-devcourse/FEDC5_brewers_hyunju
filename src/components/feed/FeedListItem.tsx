import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Image from '~/components/common/Image';
import Avatar from '~/components/common/Avatar';
import FeedFooterItem from './FeedFooterItem';
import { handleDate } from '~/utils/handleDate';
import WorkingSpotIcon from '~/components/WorkingSpotIcon';
import { CommentType, LikeType, WorkingSpotType } from '~/types/common';

export interface FeedListItemPropsType {
  id: string;
  userId: string;
  profileImage: string;
  userName: string;
  createdAt: string;
  updatedAt?: string;
  content: string;
  workingSpot: WorkingSpotType;
  imageUrl?: string;
  likes: LikeType[];
  comments: CommentType[] | string[];
  onFeedClick: (feedId: string) => void;
}

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;

  background-color: var(--adaptive400);
`;

export const FeedItemContainer = styled(Container)`
  flex-shrink: 0;

  padding: 1rem 1.5rem;
  border: 1px solid var(--adaptive200);

  /* border-radius: 0.75rem; */

  /* box-shadow: 0 4px 4px 0 var(--adaptiveOpacity100); */

  background-color: var(-adaptive50);

  box-sizing: border-box;

  transition: 0.2s background-color ease-in;

  &:hover {
    background-color: var(--adaptive200);
  }
`;

const FeedListItem = ({
  id,
  userId,
  profileImage,
  userName,
  createdAt,
  updatedAt,
  content,
  workingSpot,
  imageUrl,
  likes,
  comments,
  onFeedClick,
}: FeedListItemPropsType) => {
  // 피드 클릭 시
  const handleFeedClick = (feedId: string) => {
    if (onFeedClick) {
      onFeedClick(feedId);
    }
  };

  // 사용자 이미지 클릭 시
  // const handleUserClick = () => {
  //   if (onUserClick) {
  //     onUserClick(userId);
  //   }
  // };

  return (
    <FeedItemContainer
      maxWidth='md'
      onClick={(e) => {
        e.preventDefault();
        handleFeedClick(id);
      }}
    >
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
        gap={1}
      >
        <div>
          <Avatar
            userId={userId}
            src={profileImage}
            size='sm'
            alt='user image'
          ></Avatar>
        </div>
        <Flex
          direction='column'
          style={{
            width: '44rem',
          }}
        >
          <Flex
            alignItems='center'
            style={{ flexGrow: 1 }}
          >
            <div style={{ flexGrow: 1 }}>
              <Text
                size='lg'
                weight={600}
                style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}
              >
                {userName}
              </Text>
              <Text
                size='xs'
                color='--adaptive500'
                style={{ marginBottom: '1rem' }}
              >
                {updatedAt
                  ? `${handleDate(updatedAt)} · 수정됨`
                  : handleDate(createdAt)}
              </Text>
            </div>
            <WorkingSpotIcon workingSpot={workingSpot} />
          </Flex>

          <Text style={{ marginBottom: '1rem' }}>{content}</Text>
          {imageUrl && (
            <Image
              src={imageUrl}
              width='100%'
              height='auto'
              mode='contain'
              alt='content image'
            ></Image>
          )}
          <Divider></Divider>
          <Flex gap={1.5}>
            <FeedFooterItem
              postId={id}
              iconType={'like'}
              likes={likes}
            ></FeedFooterItem>
            <FeedFooterItem
              postId={id}
              iconType={'comment'}
              comments={comments}
            ></FeedFooterItem>
          </Flex>
        </Flex>
      </Flex>
    </FeedItemContainer>
  );
};

export default FeedListItem;
