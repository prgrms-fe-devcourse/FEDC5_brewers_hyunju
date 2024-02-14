import { useRequestFn } from '~/hooks/api';

import { handleError } from '~/utils/handleError';
import { getItem } from '~/utils/localStorage';

import {
  GetMessageListsRequestType,
  GetMessageListsResponseType,
} from '~/types/api/message';

const usePersonalMessageList = () => {
  const { request, status, data, error } =
    useRequestFn<GetMessageListsResponseType>({
      method: 'get',
      url: '/messages',
    });

  const handlePersonalMessageList = async ({
    userId,
  }: GetMessageListsRequestType) => {
    try {
      const token = getItem('accessToken', '');

      const messageListRequest = {
        headers: { Authorization: token },
        params: {
          userId,
        },
      };

      await request(messageListRequest);
    } catch (e) {
      handleError(e, 'api/personal-message');
    }
  };

  return { handlePersonalMessageList, status, error, data };
};

export default usePersonalMessageList;
