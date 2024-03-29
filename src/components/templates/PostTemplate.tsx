import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import Post from '~/components/post/Post';
import { PostType, UserType } from '~/types/common';
import PostCommentListItem from '~/components/postComment/PostCommentListItem';
import PostCommentInput from '~/components/post/PostCommentInput';
import { useNavigate } from 'react-router-dom';
import useCreateComment from '~/hooks/api/comment/useCreateComment';
import useDeleteComment from '~/hooks/api/comment/useDeleteComment';
import useDeletePost from '~/hooks/api/post/useDeletePost';
import useCreateNotification from '~/hooks/api/notification/useCreateNotification';
import { useRecoilValue } from 'recoil';
import { userState } from '~/recoil/login/atoms';

export interface PostTemplatePropsType {
  post: PostType;
  user: UserType | null;
  actions: {
    requestPost: () => void;
  };
}

const PostTemplate = ({ post, user, actions }: PostTemplatePropsType) => {
  const navigator = useNavigate();

  const auth = useRecoilValue(userState);

  const { request: createComment } = useCreateComment();
  const { request: deleteComment } = useDeleteComment();
  const { request: deletePost } = useDeletePost();
  const { request: createNoti } = useCreateNotification();

  const handleDropDownClick = async (action: string) => {
    if (action === 'put') {
      navigator(`/edit/${post._id}`);
    } else {
      await deletePost(post._id);
      navigator('/');
    }
  };

  const handleCreateComment = async (comment: string) => {
    const createdComment = await createComment(comment, post._id);

    createdComment &&
      post.author._id !== auth?._id &&
      createNoti({
        notificationType: 'COMMENT',
        notificationTypeId: createdComment._id,
        userId: post.author._id,
        postId: post._id,
      });

    actions.requestPost();
  };

  const handleDeleteComment = async (commentId: string) => {
    await deleteComment(commentId);
    actions.requestPost();
  };

  const isMine = user?._id === post.author._id;

  return (
    <PostContainer maxWidth='md'>
      <Text
        size='3xl'
        weight={800}
      >
        포스트
      </Text>
      <PostInnerContainer maxWidth='md'>
        {post && (
          <Post
            id={post._id}
            key={post._id}
            author={post.author}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            content={JSON.parse(post.title).body.text}
            imageUrl={post.image}
            likes={post.likes}
            comments={post.comments}
            onDropDownClick={handleDropDownClick}
            isMine={isMine}
          />
        )}
        <PostCommentInput
          userId={user ? user._id : null}
          profileImage={user ? user.image : null}
          onCreateComment={handleCreateComment}
        ></PostCommentInput>
        {post.comments &&
          post.comments.map((comment) => (
            <PostCommentListItem
              id={comment._id}
              isMine={comment.author._id === user?._id}
              userId={comment.author._id}
              userName={comment.author.fullName}
              createdAt={comment.createdAt}
              avatarSrc={comment.author.image}
              message={comment.comment}
              updatedAt={comment.updatedAt}
              onDeleteComment={handleDeleteComment}
            ></PostCommentListItem>
          ))}
      </PostInnerContainer>
    </PostContainer>
  );
};

export default PostTemplate;

const PostContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: var(--radius-lg);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const PostInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  box-sizing: border-box;
  gap: 1.5rem;
`;
