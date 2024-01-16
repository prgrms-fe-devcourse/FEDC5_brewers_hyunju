import { useEffect } from 'react';
import NotificationSkeleton from '~/components/templates/NotificationSkeleton';
import NotificationTemplate from '~/components/templates/NotificationTemplate';
import useGetNotification from '~/hooks/api/notification/useGetNotification';

const NotificationPage = () => {
  const { data, getNotification } = useGetNotification();

  useEffect(() => {
    getNotification();
  }, []);

  if (!data) return <NotificationSkeleton />;
  return <NotificationTemplate data={data} />;
};

export default NotificationPage;
