import styled from '@emotion/styled';
import Post from '~/components/post/Post';
import { PostType } from '~/types/common';
import PostCommentListItem, {
  PostCommentListItemPropsType,
} from '~/components/postComment/PostCommentListItem';
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import { OptionalConfig } from '~/hooks/api';

export interface PostTemplatePropsType {
  post: PostType;
  postComments: PostCommentListItemPropsType[];
  actions: {
    requestPost: (config?: OptionalConfig) => Promise<void>;
    updatePost: (config?: OptionalConfig) => Promise<void>;
    deletePost: (config?: OptionalConfig) => Promise<void>;
  };
}

const PostContainer = styled(Container)``;

const PostTemplate = ({ post, actions }: PostTemplatePropsType) => {
  const handleDropDownClick = async (action: string) => {
    // if (!auth) return;

    if (action === 'put') {
      await actions.updatePost({
        data: {
          id: post._id,
        },
      });
    } else {
      await actions.deletePost({
        data: {
          userId: post._id,
        },
      });
    }
    // navigation
    // actions.requestPost();
  };

  const handleUserClick = () => {
    // navigation(post.author._id)
  };

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
          content={post.title.body.text}
          imageUrl={post.image}
          likes={post.likes}
          comments={post.comments}
          onDropDownClick={handleDropDownClick}
          onUserClick={handleUserClick}
        />
      )}
      {/* 댓글 컴포넌트 */}
    </PostContainer>
  );
};

export default PostTemplate;
