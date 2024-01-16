import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Text from '~/components/common/Text';
import useGetPostDetail from '~/hooks/api/post/useGetPostDetail';
import { userState } from '~/recoil/login/atoms';
import ErrorPage from './ErrorPage';
import PostEditTemplate from '~/components/templates/PostEditTemplate';

const PostEditPage = () => {
  const { postId } = useParams();

  const auth = useRecoilValue(userState);

  const { data, request: getPostDetail } = useGetPostDetail();

  useEffect(() => {
    if (postId) {
      getPostDetail(postId);
    }
  }, [postId]);

  if (data && data.author._id === auth?._id)
    return <PostEditTemplate data={data} />;
  else if (data && data.author._id !== auth?._id) return <ErrorPage />;
  else return <Text>loading...</Text>;
};

export default PostEditPage;
