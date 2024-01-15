import { useRequestFn } from '~/hooks/api';

import { handleError } from '~/utils/handleError';
import { getItem } from '~/utils/localStorage';

import { UpdateMessageSeenRequestType } from '~/types/api/message';

const useMessageSeen = () => {
  const { request, status, data, error } = useRequestFn({
    method: 'put',
    url: 'messages/update-seen',
  });

  const handleMessageSeen = async ({
    sender,
  }: UpdateMessageSeenRequestType) => {
    try {
      const token = getItem('accessToken', '');

      const messageSeenRequest = {
        headers: { Authorization: token },
        data: { sender },
      };

      await request(messageSeenRequest);
    } catch (e) {
      handleError(e, 'api/personal-message');
    }
  };

  return { handleMessageSeen, status, error, data };
};

export default useMessageSeen;
