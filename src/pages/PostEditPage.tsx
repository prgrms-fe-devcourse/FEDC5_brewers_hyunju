import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import useGetPostDetail from '~/hooks/api/post/useGetPostDetail';
import { userState } from '~/recoil/login/atoms';
import ErrorPage from './ErrorPage';
import PostEditTemplate from '~/components/templates/PostEditTemplate';
import RequiredLoginTemplate from '~/components/templates/RequiredLoginTemplate';

const PostEditPage = () => {
  const { postId } = useParams();

  const auth = useRecoilValue(userState);

  const { data, request: getPostDetail } = useGetPostDetail();

  useEffect(() => {
    if (postId) {
      getPostDetail(postId);
    }
  }, [postId]);

  if (!auth) return <RequiredLoginTemplate />;
  else if (data) {
    if (data.author._id === auth._id) return <PostEditTemplate data={data} />;
    else return <ErrorPage />;
  } else return <></>;
};

export default PostEditPage;
