import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MessageSendingTemplate from '~/components/templates/MessageSendingTemplate';

import usePersonalMessageList from '~/hooks/api/conversation/usePersonalMessageList';

const PersonalMessagePage = () => {
  const { handlePersonalMessageList, status, data } = usePersonalMessageList();
  const { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    handlePersonalMessageList({
      userId,
    });
  }, [userId]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const timer = setInterval(() => {
      handlePersonalMessageList({
        userId,
      });
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MessageSendingTemplate
      messageListStatus={status}
      messageListData={data}
      userId={userId}
      handlePersonalMessageList={handlePersonalMessageList}
    />
  );
};

export default PersonalMessagePage;
