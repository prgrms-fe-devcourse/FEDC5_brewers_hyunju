import { useRequestFn } from '~/hooks/api';

import { handleError } from '~/utils/handleError';
import { getItem } from '~/utils/localStorage';

import {
  SendMessageRequestType,
  SendMessageResponseType,
} from '~/types/api/message';

const useCreateMessage = () => {
  const { request, status, data, error } =
    useRequestFn<SendMessageResponseType>({
      method: 'post',
      url: '/messages/create',
    });

  const handleCreateMessage = async ({
    message,
    receiver,
  }: SendMessageRequestType) => {
    try {
      const token = getItem('accessToken', '');

      const messageRequest = {
        headers: { Authorization: token, 'Content-Type': 'application/json' },
        data: { message, receiver },
      };

      await request(messageRequest);
    } catch (e) {
      handleError(e, 'api/personal-message');
    }
  };

  return { handleCreateMessage, status, error, data };
};

export default useCreateMessage;
