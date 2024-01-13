import { useRequestFn } from '~/hooks/api';
import { AuthUserResponseType } from '~/types/api/auth';

export const useAuth = () => {
  const { request, status, data, error } = useRequestFn<AuthUserResponseType>({
    method: 'get',
    url: '/auth-user',
  });

  return { status, data, request, error };
};

export default useAuth;
