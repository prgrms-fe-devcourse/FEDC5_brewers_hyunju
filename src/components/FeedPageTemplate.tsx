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

const FeedContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: var(--radius-lg);
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const FeedInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const FeedPageTemplate = ({
  posts,
  userId,
  profileImage,
  onHandleCreatePost,
}: FeedPageTemplatePropsType) => {
  const navigate = useNavigate();
  return (
    <FeedContainer maxWidth='md'>
      <FeedInnerContainer maxWidth='md'>
        <Text
          size='3xl'
          weight={800}
        >
          피드
        </Text>
        {userId && (
          <>
            <FeedListInput
              userId={userId}
              profileImage={profileImage}
              onHandleCreatePost={onHandleCreatePost}
            ></FeedListInput>
          </>
        )}

        {posts &&
          posts.map((post) => {
            let contentText = '';
            let workingSpot = 'cafe';
            try {
              const parsedTitle = JSON.parse(post.title);
              if (parsedTitle.body && parsedTitle.body.text) {
                contentText = parsedTitle.body.text;
              } else {
                contentText = post.title;
              }
              if (parsedTitle.workingSpot) {
                workingSpot = parsedTitle.workingSpot;
              }
            } catch (error) {
              contentText = post.title;
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
                content={contentText}
                workingSpot={workingSpot as WorkingSpotType}
                likes={post.likes}
                comments={post.comments}
                onFeedClick={(feedId: string) => {
                  // 일단 navigation으로 구현
                  navigate(`/post/${feedId}`);
                }}
                imageUrl={post.image}
              />
            );
          })}
      </FeedInnerContainer>
    </FeedContainer>
  );
};

export default FeedPageTemplate;
