import { useRequestUsersFn } from '~/hooks/api';

import { handleError } from '~/utils/handleError';

import { GetUsersResponseType } from '~/types/api/users';

export const useGetUsers = () => {
  const { request, status, data, error } =
    useRequestUsersFn<GetUsersResponseType>({
      method: 'get',
      url: '/users/get-users',
    });

  const handleGetUsers = async () => {
    try {
      await request();
    } catch (e) {
      handleError(e, 'api/get-users');
    }
  };
  return { handleGetUsers, status, data, error };
};

export default useGetUsers;
