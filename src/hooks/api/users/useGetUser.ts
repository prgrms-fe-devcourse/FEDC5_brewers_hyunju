import { GetUserResponseType } from '~/types/api/users';
import { useRequestFn } from '~/hooks/api';

export const useGetUser = (userId?: string) => {
  const { request, status, data, error } = useRequestFn<GetUserResponseType>({
    method: 'get',
    url: `/users/${userId}`,
  });

  return { status, data, request, error };
};

export default useGetUser;
