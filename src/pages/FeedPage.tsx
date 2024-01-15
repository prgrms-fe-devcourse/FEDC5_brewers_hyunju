import { useEffect } from 'react';
import FeedPageTemplate from '~/components/FeedPageTemplate';
import Text from '~/components/common/Text';
import useGetPosts from '~/hooks/api/post/useGetPosts';

const FeedPage = () => {
  const {
    status: postsStatus,
    data: postsData,
    request: getPosts,
  } = useGetPosts();

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  if (postsStatus === 'success' && postsData) {
    return (
      <>
        <FeedPageTemplate
          posts={postsData}
          userId='1'
          profileImage={''}
          // auth={authData}
          // actions={{ requestPost, updatePost, deletePost }}
        />
      </>
    );
  } else if (postsStatus === 'error') {
    return <Text>Error</Text>;
  } else {
    return;
    // skeleton return
  }
  <>
    {postsData}
    <Text>Feed</Text>
  </>;
};

export default FeedPage;
