import { useRequestFn } from '~/hooks/api';

export const useLogout = () => {
  const { request, status, error } = useRequestFn({
    method: 'post',
    url: '/logout',
  });

  return { status, request, error };
};

export default useLogout;
