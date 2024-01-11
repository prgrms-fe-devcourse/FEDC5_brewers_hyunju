import styled from '@emotion/styled';
import FeedListItem, {
  FeedListItemPropsType,
} from '~/components/feed/FeedListItem';
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import FeedListInput from './feed/FeedListInput';

export interface FeedPageTemplatePropsType {
  posts?: FeedListItemPropsType[];
  userId: string;
  profileImage: string;
}

const FeedPageContainer = styled(Container)``;

const FeedPageTemplate = ({
  posts,
  userId,
  profileImage,
}: FeedPageTemplatePropsType) => {
  return (
    <FeedPageContainer maxWidth='md'>
      <Text
        size='3xl'
        weight={800}
        mb={2.25}
      >
        피드
      </Text>
      <FeedListInput
        userId={userId}
        profileImage={profileImage}
      ></FeedListInput>
      <div style={{ marginBottom: '3.375rem' }}></div>
      {posts &&
        posts.map((post) => (
          <FeedListItem
            id={post.id}
            userId={post.userId}
            profileImage={post.profileImage}
            userName={post.userName}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            content={post.content}
            likesCount={post.likesCount}
            commentsCount={post.commentsCount}
            onFeedClick={() => {}}
            onUserClick={() => {}}
            imageUrl={post.imageUrl}
          />
        ))}
    </FeedPageContainer>
  );
};

export default FeedPageTemplate;
