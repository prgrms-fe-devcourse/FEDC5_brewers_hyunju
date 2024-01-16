import { useEffect } from 'react';
import { useParams } from 'react-router';
import ProfileSkeleton from '~/components/templates/ProfileSkeleton';
import ProfileTemplate from '~/components/templates/ProfileTemplate';
import useGetUser from '~/hooks/api/users/useGetUser';

const ProfilePage = () => {
  const { userId } = useParams();

  const {
    status: userStatus,
    data: userData,
    request: requestUser,
  } = useGetUser(userId);

  useEffect(() => {
    requestUser();
    // eslint-disable-next-line
  }, [userId]);

  if (userStatus === 'success' && userData) {
    return (
      <ProfileTemplate
        user={userData}
        actions={{ requestUser }}
      />
    );
  } else {
    return <ProfileSkeleton />;
  }
};

export default ProfilePage;
