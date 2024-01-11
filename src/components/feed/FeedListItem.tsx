import styled from 'styled-components';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Image from '~/components/common/Image';
import Avatar from '~/components/common/Avatar';
import FeedFooterItem from './FeedFooterItem';

export interface FeedListItemPropsType {
  id: string;
  userId: string;
  profileImage: string;
  userName: string;
  createdAt: string;
  updatedAt?: string;
  content: string;
  imageUrl?: string;
  likesCount: number;
  commentsCount: number;
  onFeedClick: (feedId: string) => void;
  onUserClick: (userId: string) => void;
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

  cursor: pointer;

  &:hover {
    background-color: var(--adaptive100);
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
  imageUrl,
  likesCount,
  commentsCount,
  onFeedClick,
  onUserClick,
}: FeedListItemPropsType) => {
  // 피드 클릭 시
  const handleFeedClick = (feedId: string) => {
    if (onFeedClick) {
      onFeedClick(feedId);
    }
  };

  // 사용자 이미지 클릭 시
  const handleUserClick = () => {
    if (onUserClick) {
      onUserClick(userId);
    }
  };

  return (
    <FeedItemContainer
      maxWidth='md'
      onClick={() => handleFeedClick(id)}
    >
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
        gap={1}
      >
        <div style={{ flex: '1' }}>
          <Avatar
            src={profileImage}
            size='sm'
            handleClick={handleUserClick}
            alt='user image'
          ></Avatar>
        </div>
        <Flex
          direction='column'
          style={{
            width: '43rem',
          }}
        >
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
            {updatedAt ? `${updatedAt} · 수정됨` : createdAt}
          </Text>
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
              iconType={'like'}
              title='좋아요'
              count={likesCount}
            ></FeedFooterItem>
            <FeedFooterItem
              iconType={''}
              title='댓글'
              count={commentsCount}
            ></FeedFooterItem>
          </Flex>
        </Flex>
      </Flex>
    </FeedItemContainer>
  );
};

export default FeedListItem;
