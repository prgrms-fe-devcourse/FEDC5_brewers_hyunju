import { useEffect } from 'react';
import { useParams } from 'react-router';
import Text from '~/components/common/Text';
import PostTemplate from '~/components/templates/PostTemplate';
import useUpdatePost from '~/hooks/api/post/useUpdatePost';
import useDeletePost from '~/hooks/api/post/useDeletePost';
import useGetPost from '~/hooks/api/post/useGetPost';
// import useAuth from '~/hooks/api/auth/useAuth';

const PostPage = () => {
  const { postId } = useParams();

  const {
    status: postStatus,
    data: postData,
    request: requestPost,
  } = useGetPost(postId);

  // const { data: authData, request: requestAuth } = useAuth();

  const { request: updatePost } = useUpdatePost();
  const { request: deletePost } = useDeletePost();

  // useEffect(() => {
  //   requestAuth();
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    requestPost();
    // eslint-disable-next-line
  }, [postId]);

  if (postStatus === 'success' && postData) {
    return (
      <PostTemplate
        post={postData}
        // auth={authData}
        actions={{ requestPost, updatePost, deletePost }}
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
