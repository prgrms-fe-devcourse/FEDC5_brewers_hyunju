import { useEffect } from 'react';
import { useParams } from 'react-router';
import Text from '~/components/common/Text';
import ProfileSkeleton from '~/components/templates/ProfileSkeleton';
import ProfileTemplate from '~/components/templates/ProfileTemplate';
import useAuth from '~/hooks/api/auth/useAuth';
import useCreateFollow from '~/hooks/api/follow/useCreateFollow';
import useDeleteFollow from '~/hooks/api/follow/useDeleteFollow';
import useGetUser from '~/hooks/api/users/useGetUser';

const ProfilePage = () => {
  const { userId } = useParams();

  const {
    status: userStatus,
    data: userData,
    request: requestUser,
  } = useGetUser(userId);

  const { data: authData, request: requestAuth } = useAuth();

  const { request: createFollow } = useCreateFollow();
  const { request: deleteFollow } = useDeleteFollow();

  useEffect(() => {
    requestAuth();
  }, []);

  useEffect(() => {
    requestUser();
  }, [userId]);

  if (userStatus === 'success' && userData)
    return (
      <ProfileTemplate
        user={userData}
        auth={authData}
        actions={{ requestUser, createFollow, deleteFollow }}
      />
    );
  else if (userStatus === 'error') return <Text>Error</Text>;
  else return <ProfileSkeleton />;
};

export default ProfilePage;
