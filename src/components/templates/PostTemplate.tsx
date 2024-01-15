import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import Post from '~/components/post/Post';
import { PostType, UserType } from '~/types/common';
import { OptionalConfig } from '~/hooks/api';
import PostCommentListItem from '~/components/postComment/PostCommentListItem';
import PostCommentInput from '~/components/post/PostCommentInput';

export interface PostTemplatePropsType {
  post: PostType;
  user: UserType | null;
  actions: {
    requestPost: (config?: OptionalConfig) => Promise<void>;
    updatePost: (config?: OptionalConfig) => Promise<void>;
    deletePost: (config?: OptionalConfig) => Promise<void>;
  };
  onCreateComment: (comment: string) => void;
  onDeleteComment: (commentId: string) => void;
}

const PostContainer = styled(Container)``;

const PostTemplate = ({
  post,
  user,
  actions,
  onCreateComment,
  onDeleteComment,
}: PostTemplatePropsType) => {
  // dropDown 버튼 클릭 시
  const handleDropDownClick = async (action: string) => {
    // if (!auth) return;

    // '수정하기' 클릭 시
    if (action === 'put') {
      await actions.updatePost({
        data: {
          id: post._id,
        },
      });
    } else {
      // '삭제하기' 클릭 시
      await actions.deletePost({
        data: {
          userId: post._id,
        },
      });
      // == 다시 post로 돌아가게? navigation?
    }
    // actions.requestPost();
  };

  // Avatar 클릭 시
  const handleUserClick = () => {
    // navigation 설정?
    // navigation(post.author._id)
  };

  let contentText = '';
  try {
    const parsedTitle = JSON.parse(post.title);
    if (parsedTitle.body && parsedTitle.body.text) {
      contentText = parsedTitle.body.text;
    } else {
      contentText = post.title;
    }
  } catch (error) {
    contentText = post.title;
  }

  return (
    <PostContainer maxWidth='md'>
      <Text
        size='3xl'
        weight={800}
        mb={2.25}
      >
        포스트
      </Text>
      <div style={{ marginBottom: '3.375rem' }}></div>
      {post && (
        <Post
          id={post._id}
          key={post._id}
          author={post.author}
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
          content={contentText}
          imageUrl={post.image}
          likes={post.likes}
          comments={post.comments}
          onDropDownClick={handleDropDownClick}
          onUserClick={handleUserClick}
        />
      )}
      <PostCommentInput
        userId={user ? user._id : null}
        profileImage={user ? user.image : null}
        onCreateComment={onCreateComment}
      ></PostCommentInput>
      {post.comments &&
        post.comments.map((comment) => (
          <PostCommentListItem
            id={comment._id}
            isMine={comment.author._id === user?._id}
            userName={comment.author.fullName}
            createdAt={comment.createdAt}
            avatarSrc={comment.author.image}
            message={comment.comment}
            handleClick={handleUserClick}
            updatedAt={comment.updatedAt}
            onDeleteComment={onDeleteComment}
          ></PostCommentListItem>
        ))}
    </PostContainer>
  );
};

export default PostTemplate;
