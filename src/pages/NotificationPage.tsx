import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import NotificationSkeleton from '~/components/templates/NotificationSkeleton';
import NotificationTemplate from '~/components/templates/NotificationTemplate';
import RequiredLoginTemplate from '~/components/templates/RequiredLoginTemplate';
import useGetNotification from '~/hooks/api/notification/useGetNotification';
import { userState } from '~/recoil/login/atoms';

const NotificationPage = () => {
  const auth = useRecoilValue(userState);
  const { data, getNotification } = useGetNotification();

  useEffect(() => {
    getNotification();
  }, []);

  if (!auth) return <RequiredLoginTemplate />;
  if (!data) return <NotificationSkeleton />;
  return (
    <NotificationTemplate
      data={data}
      action={{ getNotification }}
    />
  );
};

export default NotificationPage;
