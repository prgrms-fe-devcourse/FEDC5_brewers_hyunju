import { GetUsersResponseType } from '~/types/api/users';
import { useRequestFn } from '~/hooks/api';

export const useGetUsers = () => {
  const { request, status, data, error } = useRequestFn<GetUsersResponseType>({
    method: 'get',
    url: '/users/get-users',
  });

  return { status, data, request, error };
};

export default useGetUsers;
