import { useEffect } from 'react';
import { useParams } from 'react-router';
import Text from '~/components/common/Text';
import PostTemplate from '~/components/templates/PostTemplate';
import useUpdatePost from '~/hooks/api/post/useUpdatePost';
import useDeletePost from '~/hooks/api/post/useDeletePost';
import useGetPost from '~/hooks/api/post/useGetPost';
import useCreateComment from '~/hooks/api/comment/useCreateComment';

const PostPage = () => {
  const { postId } = useParams();

  const {
    status: postStatus,
    data: postData,
    request: requestPost,
  } = useGetPost(postId);

  const { request: createComment } = useCreateComment();

  // post 전송 시
  const handleCreateComment = async (comment: string) => {
    try {
      console.log(comment, postId);
      await createComment(comment, postId);
      requestPost();
    } catch (error) {
      console.error('comment 전송 Error 발생');
    }
  };

  const { request: updatePost } = useUpdatePost();
  const { request: deletePost } = useDeletePost();

  useEffect(() => {
    requestPost();
  }, [postId]);

  if (postStatus === 'success' && postData) {
    return (
      <PostTemplate
        post={postData}
        // auth={authData}
        actions={{ requestPost, updatePost, deletePost }}
        onCreateComment={handleCreateComment}
      />
    );
  } else if (postStatus === 'error') {
    return <Text>Error</Text>;
  } else {
    return;
    // skeleton return
  }
};

export default PostPage;
