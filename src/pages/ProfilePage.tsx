import { useEffect } from 'react';
import { useParams } from 'react-router';
import ProfileSkeleton from '~/components/templates/ProfileSkeleton';
import ProfileTemplate from '~/components/templates/ProfileTemplate';
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

  const { request: createFollow } = useCreateFollow();
  const { request: deleteFollow } = useDeleteFollow();

  useEffect(() => {
    requestUser();
    // eslint-disable-next-line
  }, [userId]);

  if (userStatus === 'success' && userData) {
    return (
      <ProfileTemplate
        user={userData}
        actions={{ requestUser, createFollow, deleteFollow }}
      />
    );
  } else {
    return <ProfileSkeleton />;
  }
};

export default ProfilePage;
