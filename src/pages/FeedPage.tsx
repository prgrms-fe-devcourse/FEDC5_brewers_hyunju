import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import FeedPageTemplate from '~/components/FeedPageTemplate';
import Text from '~/components/common/Text';
import useCreatePost from '~/hooks/api/post/useCreatePost';
import useGetPosts from '~/hooks/api/post/useGetPosts';

import { CustomPostContentType } from '~/types/common';

const FeedPage = () => {
  const { request: createPost } = useCreatePost();
  const user = useRecoilValue(userState);

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
      if (!user) return; // 로그인 안되었을 경우
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
          userId={user ? user._id : null}
          profileImage={user ? user.image : ''}
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
