import { useEffect } from 'react';
import FeedPageTemplate from '~/components/FeedPageTemplate';
import Text from '~/components/common/Text';
import useCreatePost from '~/hooks/api/post/useCreatePost';
import useGetPosts from '~/hooks/api/post/useGetPosts';

import { CustomPostContentType } from '~/types/common';

const FeedPage = () => {
  const { request: createPost } = useCreatePost();

  const {
    status: postsStatus,
    data: postsData,
    request: getPosts,
  } = useGetPosts();

  useEffect(() => {
    getPosts();
  }, []);

  // post 전송 시
  const handleCreatePost = async (
    newPost: CustomPostContentType,
    file?: File
  ) => {
    try {
      await createPost(newPost, file);
      getPosts();
    } catch (error) {
      console.error('post 전송 Error 발생');
    }
  };

  if (postsStatus === 'success' && postsData) {
    return (
      <>
        <FeedPageTemplate
          posts={postsData}
          userId='1'
          profileImage={''}
          onHandleCreatePost={handleCreatePost}
        />
      </>
    );
  } else if (postsStatus === 'error') {
    return <Text>Error</Text>;
  } else {
    return;
    // skeleton return
  }
};

export default FeedPage;
