import { useParams } from 'react-router';
import Text from '~/components/common/Text';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <>
      <Text>Profile</Text>
      <Text>{userId}</Text>
    </>
  );
};

export default ProfilePage;
