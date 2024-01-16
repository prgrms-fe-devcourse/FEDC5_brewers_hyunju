import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MessageSendingTemplate from '~/components/templates/MessageSendingTemplate';
import useMessageSeen from '~/hooks/api/conversation/useMessageSeen';

import usePersonalMessageList from '~/hooks/api/conversation/usePersonalMessageList';

const PersonalMessagePage = () => {
  const { userId } = useParams();

  const { handlePersonalMessageList, status, data } = usePersonalMessageList();
  const messageSeen = useMessageSeen();

  const fetch = async () => {
    if (!userId) {
      return;
    }

    await messageSeen.handleMessageSeen({ sender: userId });

    await handlePersonalMessageList({
      userId,
    });
  };

  useEffect(() => {
    fetch();
    const timer = setInterval(() => {
      fetch();
    }, 10000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MessageSendingTemplate
      messageListStatus={status}
      messageSeenStatus={messageSeen.status}
      messageListData={data}
      userId={userId}
      fetch={fetch}
    />
  );
};

export default PersonalMessagePage;
