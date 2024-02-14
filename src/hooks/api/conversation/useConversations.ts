import { useRequestFn } from '~/hooks/api';

import { handleError } from '~/utils/handleError';
import { getItem } from '~/utils/localStorage';

import { GetMessageUserListsResponseType } from '~/types/api/message';

const useConversations = () => {
  const { request, status, data, error } =
    useRequestFn<GetMessageUserListsResponseType>({
      method: 'get',
      url: '/messages/conversations',
    });

  const handleConversations = async () => {
    try {
      const conversationRequest = getItem('accessToken', '');

      await request({ data: conversationRequest });
    } catch (e) {
      handleError(e, 'api/conversations');
    }
  };

  return { handleConversations, status, error, data };
};

export default useConversations;
