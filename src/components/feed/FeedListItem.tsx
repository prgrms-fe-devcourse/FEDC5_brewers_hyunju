import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Image from '~/components/common/Image';
import Avatar from '~/components/common/Avatar';
import styled from '@emotion/styled';
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--adaptive400);
  margin: 1rem 0;
`;

export const FeedItemContainer = styled(Container)`
  padding: 34px 40px;
  flex-shrink: 0;
  background-color: var(-adaptive50);
  border: 1px solid var(--adaptive200);
  border-radius: 0.75rem;
  box-shadow: 0px 4px 4px 0px var(--adaptiveOpacity100);
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
      >
        <div>
          <Avatar
            src={profileImage}
            size='sm'
            handleClick={handleUserClick}
            alt='user image'
          ></Avatar>
        </div>
        <Flex
          direction='column'
          ml={1}
          style={{
            width: '44rem',
          }}
        >
          <Text
            size='lg'
            weight={600}
            style={{ marginTop: '0.2rem', marginBottom: '1rem' }}
          >
            {userName}
          </Text>
          <Text
            color='--adaptive500'
            style={{ marginBottom: '0.5rem' }}
          >
            {updatedAt ? `${updatedAt} · 수정됨` : createdAt}
          </Text>
          <Text height={175}>{content}</Text>
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
          <Flex>
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
