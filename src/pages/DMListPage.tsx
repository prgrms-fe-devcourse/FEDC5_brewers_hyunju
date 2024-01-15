import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import DMListTemplate from '~/components/templates/DMListTemplate';

import useConversations from '~/hooks/api/conversation/useConversations';
import { userState } from '~/recoil/login/atoms';

const DMListPage = () => {
  const { handleConversations, status, data } = useConversations();
  const user = useRecoilValue(userState);

  useEffect(() => {
    if (!user) {
      return;
    }
    handleConversations();
  }, [user]);

  return (
    <DMListTemplate
      conversations={data}
      status={status}
    />
  );
};
export default DMListPage;
