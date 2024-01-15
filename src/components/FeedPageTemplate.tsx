import styled from '@emotion/styled';
import FeedListItem from '~/components/feed/FeedListItem'; // FeedListItemPropsType,
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import FeedListInput from '~/components/feed/FeedListInput';
import { GetChannelPostsResponseType } from '~/types/api/posts';
import { useNavigate } from 'react-router-dom';
import { PostType } from '~/types/common';

export interface FeedPageTemplatePropsType {
  posts?: GetChannelPostsResponseType;
  userId: string;
  profileImage: string;
}

const FeedPageContainer = styled(Container)``;

const FeedPageTemplate = ({
  posts,
  userId,
  profileImage,
}: FeedPageTemplatePropsType) => {
  const navigate = useNavigate();
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
            id={post._id}
            key={post._id}
            userId={post.author._id}
            profileImage={post.author.image}
            userName={post.author.fullName}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            // content={post.title}
            content={JSON.parse(post.title).body.text}
            likes={post.likes}
            comments={post.comments}
            onFeedClick={(feedId: string) => {
              console.log(feedId);
              // 일단 navigation으로 구현
              navigate(`/post/${feedId}`);
            }}
            onUserClick={(userId: string) => {
              console.log(userId);
            }}
            imageUrl={post.image}
          />
        ))}
    </FeedPageContainer>
  );
};

export default FeedPageTemplate;
