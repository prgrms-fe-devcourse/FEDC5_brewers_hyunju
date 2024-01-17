import { useRequestUsersFn } from '~/hooks/api';

import { OnlineUsersResponseType } from '~/types/api/users';
import { handleError } from '~/utils/handleError';

export const useGetOnlineUsers = () => {
  const { request, status, data, error } =
    useRequestUsersFn<OnlineUsersResponseType>({
      method: 'get',
      url: '/users/online-users',
    });

  const handleGetOnlineUsers = async () => {
    try {
      const onlineUsersRequest = {
        headers: { 'Cache-Control': 'no-cache', Expires: 0 },
      };
      await request(onlineUsersRequest);
    } catch (e) {
      handleError(e, 'api/online-users');
    }
  };

  return { handleGetOnlineUsers, status, data, request, error };
};

export default useGetOnlineUsers;
