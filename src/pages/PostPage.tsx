import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import Text from '~/components/common/Text';
import PostTemplate from '~/components/templates/PostTemplate';
import useUpdatePost from '~/hooks/api/post/useUpdatePost';
import useDeletePost from '~/hooks/api/post/useDeletePost';
import useGetPost from '~/hooks/api/post/useGetPost';
import useCreateComment from '~/hooks/api/comment/useCreateComment';
import useDeleteComment from '~/hooks/api/comment/useDeleteComment';

const PostPage = () => {
  const { postId } = useParams();
  const user = useRecoilValue(userState);

  const {
    status: postStatus,
    data: postData,
    request: requestPost,
  } = useGetPost(postId);

  const { request: createComment } = useCreateComment();
  const { request: deleteComment } = useDeleteComment();

  // comment post 시
  const handleCreateComment = async (comment: string) => {
    try {
      console.log(comment, postId);
      await createComment(comment, postId);
      requestPost();
    } catch (error) {
      console.error('comment 전송 Error 발생');
    }
  };

  // comment delete 시
  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(commentId);
      requestPost();
    } catch (error) {
      console.error('comment 삭제 Error 발생');
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
        user={user}
        // auth={authData}
        actions={{ requestPost, updatePost, deletePost }}
        onCreateComment={handleCreateComment}
        onDeleteComment={handleDeleteComment}
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
