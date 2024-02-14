import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
    if (auth) {
      getNotification();
    }
  }, [auth]);

  if (!auth) return <RequiredLoginTemplate />;
  if (!data) return <NotificationSkeleton />;
  return (
    <>
      <Helmet>
        <title>알림</title>
      </Helmet>
      <NotificationTemplate
        data={data}
        action={{ getNotification }}
      />
    </>
  );
};

export default NotificationPage;
