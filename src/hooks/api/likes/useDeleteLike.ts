import { useRequestFn } from '~/hooks/api';

const useDeleteLike = () => {
  const { status, request } = useRequestFn({
    method: 'delete',
    url: '/likes/delete',
  });

  return { status, request };
};

export default useDeleteLike;
