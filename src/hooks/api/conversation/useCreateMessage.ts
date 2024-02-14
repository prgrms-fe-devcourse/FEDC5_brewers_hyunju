import { useState } from 'react';
import { handleError } from '~/utils/handleError';
import { getItem } from '~/utils/localStorage';
import request from '~/api/axios';
import {
  SendMessageRequestType,
  SendMessageResponseType,
} from '~/types/api/message';

const useCreateMessage = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<SendMessageResponseType | null>(null);

  const handleCreateMessage = async ({
    message,
    receiver,
  }: SendMessageRequestType) => {
    setStatus('loading');
    try {
      const token = getItem('accessToken', '');

      const messageRequest = {
        method: 'post',
        url: '/messages/create',
        headers: { Authorization: token, 'Content-Type': 'application/json' },
        data: { message, receiver },
      };

      const response = await request<SendMessageResponseType>(messageRequest);

      setData(response.data);
      setStatus('success');

      return response.data;
    } catch (e) {
      handleError(e, 'api/personal-message');
      setStatus('error');
    }
  };

  return { handleCreateMessage, status, data };
};

export default useCreateMessage;
