import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Image from '~/components/common/Image';
import styled from 'styled-components';
import FeedFooterItem from './FeedFooterItem';

export interface FeedListItemPropTypes {
  id: string;
  userId: string;
  profileImage: string;
  userName: string;
  date: string;
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

const FeedListItem = ({
  id,
  userId,
  profileImage,
  userName,
  date,
  content,
  imageUrl,
  likesCount,
  commentsCount,
  onFeedClick,
  onUserClick,
}: FeedListItemPropTypes) => {
  // 피드 클릭 시
  const handleFeedClick = (feedId: string) => {
    if (onFeedClick) {
      onFeedClick(feedId);
      alert(feedId);
    }
  };

  // 사용자 이미지 클릭 시
  const handleUserClick = (
    userId: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    if (onUserClick) {
      onUserClick(userId);
      alert(userId);
    }
  };

  return (
    <Container
      maxWidth='md'
      onClick={() => handleFeedClick(id)}
      style={{
        padding: '34px 40px',
        flexShrink: '0',
        backgroundColor: 'var(-adaptive50)',
        border: '1px solid var(--adaptive200)',
        borderRadius: '0.75rem',
        boxShadow: '0px 4px 4px 0px var(--adaptiveOpacity100)',
      }}
    >
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            handleUserClick(userId, e);
          }}
        >
          <Image
            src={profileImage}
            width={3.5}
            height={3.5}
            mode='contain'
            alt='user profile image'
          ></Image>
        </div>

        <Flex
          direction='column'
          style={{
            marginLeft: '1rem',
            width: '43rem',
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
            {date}
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
              iconImg={''}
              title='좋아요'
              count={likesCount}
            ></FeedFooterItem>
            <FeedFooterItem
              iconImg={''}
              title='댓글'
              count={commentsCount}
            ></FeedFooterItem>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default FeedListItem;
