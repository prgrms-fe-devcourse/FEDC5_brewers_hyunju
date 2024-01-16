import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import Text from '~/components/common/Text';
import PostTemplate from '~/components/templates/PostTemplate';
import useGetPost from '~/hooks/api/post/useGetPost';

const PostPage = () => {
  const { postId } = useParams();
  const user = useRecoilValue(userState);

  const {
    status: postStatus,
    data: postData,
    request: requestPost,
  } = useGetPost(postId);

  useEffect(() => {
    requestPost();
  }, [postId]);

  if (postStatus === 'success' && postData) {
    return (
      <PostTemplate
        post={postData}
        user={user}
        actions={{
          requestPost,
        }}
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
