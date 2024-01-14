import { useEffect } from 'react';

import DMListTemplate from '~/components/templates/DMListTemplate';

import useConversations from '~/hooks/api/conversation/useConversations';

const DMListPage = () => {
  const { handleConversations, status, data } = useConversations();

  useEffect(() => {
    handleConversations();
  }, []);

  return (
    <DMListTemplate
      conversations={data}
      status={status}
    />
  );
};
export default DMListPage;
