import { useRequestFn } from '~/hooks/api';
import { DeleteFollowRequestType } from '~/types/api/follow';

export const useDeleteFollow = (followId?: string) => {
  const { request, status, data, error } =
    useRequestFn<DeleteFollowRequestType>({
      method: 'delete',
      url: '/follow/delete',
      data: {
        id: followId,
      },
    });

  return { status, data, request, error };
};

export default useDeleteFollow;
