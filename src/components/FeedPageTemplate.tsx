import styled from '@emotion/styled';
import FeedListItem from '~/components/feed/FeedListItem';
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import FeedListInput from '~/components/feed/FeedListInput';
import { GetChannelPostsResponseType } from '~/types/api/posts';
import { useNavigate } from 'react-router-dom';
import { CustomPostContentType, WorkingSpotType } from '~/types/common';

export interface FeedPageTemplatePropsType {
  posts?: GetChannelPostsResponseType;
  userId: string | null;
  profileImage: string;
  onHandleCreatePost: (newPost: CustomPostContentType, file?: File) => void;
}

const FeedPageTemplate = ({
  posts,
  userId,
  profileImage,
  onHandleCreatePost,
}: FeedPageTemplatePropsType) => {
  const navigate = useNavigate();
  return (
    <FeedContainer maxWidth='md'>
      <Text
        size='3xl'
        weight={800}
      >
        피드
      </Text>
      {userId && (
        <FeedInputContainer>
          <FeedListInput
            userId={userId}
            profileImage={profileImage}
            onHandleCreatePost={onHandleCreatePost}
          ></FeedListInput>
        </FeedInputContainer>
      )}

      {posts &&
        posts.map((post) => {
          let workingSpot = 'cafe';
          try {
            const parsedTitle = JSON.parse(post.title);

            if (parsedTitle.workingSpot) {
              workingSpot = parsedTitle.workingSpot;
            }
          } catch (error) {
            console.error(error);
          }

          return (
            <FeedListItem
              id={post._id}
              key={post._id}
              userId={post.author._id}
              profileImage={post.author.image}
              userName={post.author.fullName}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              content={JSON.parse(post.title).body.text}
              workingSpot={workingSpot as WorkingSpotType}
              likes={post.likes}
              comments={post.comments}
              onFeedClick={(feedId: string) => {
                // navigation으로 구현
                navigate(`/post/${feedId}`);
              }}
              imageUrl={post.image}
            />
          );
        })}
    </FeedContainer>
  );
};

export default FeedPageTemplate;

const FeedContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 0;
  border-radius: var(--radius-lg);

  background-color: var(--transparent);

  gap: 1.5rem;
`;

const FeedInputContainer = styled.div`
  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);

  background-color: var(--adaptive50);
`;
