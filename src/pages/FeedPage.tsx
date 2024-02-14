import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import FeedPageTemplate from '~/components/FeedPageTemplate';
import useCreatePost from '~/hooks/api/post/useCreatePost';
import useGetPosts from '~/hooks/api/post/useGetPosts';
import { CustomPostContentType } from '~/types/common';
import { postModalOpenState } from '~/recoil/postModal/selectors';
import { Helmet } from 'react-helmet';

const FeedPage = () => {
  const { status: createPostStatus, request: createPost } = useCreatePost();
  const user = useRecoilValue(userState);
  const isOpen = useRecoilValue(postModalOpenState);
  const {
    status: postsStatus,
    data: postsData,
    request: getPosts,
  } = useGetPosts();

  useEffect(() => {
    if (isOpen) return;
    getPosts();
  }, [isOpen]);

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
        <Helmet>
          <title>피드</title>
        </Helmet>
        <FeedPageTemplate
          createStatus={createPostStatus}
          posts={postsData}
          userId={user ? user._id : null}
          profileImage={user ? user.image : ''}
          onHandleCreatePost={handleCreatePost}
        />
      </>
    );
  }
};

export default FeedPage;
