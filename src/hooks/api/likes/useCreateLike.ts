import { useRequestFn } from '~/hooks/api';

const useCreateLike = () => {
  const { status, request } = useRequestFn({
    method: 'post',
    url: '/likes/create',
  });

  return { status, request };
};

export default useCreateLike;
