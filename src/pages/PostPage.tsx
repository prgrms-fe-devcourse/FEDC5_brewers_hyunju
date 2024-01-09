import { useParams } from 'react-router';
import Text from '~/components/common/Text';

const PostPage = () => {
  const { postId } = useParams();

  return (
    <>
      <Text>Post</Text>
      <Text>{postId}</Text>
    </>
  );
};

export default PostPage;
