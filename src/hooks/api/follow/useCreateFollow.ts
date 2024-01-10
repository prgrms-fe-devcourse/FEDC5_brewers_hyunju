import { useRequestFn } from '~/hooks/api';
import { CreateFollowResponseType } from '~/types/api/follow';

export const useCreateFollow = (userId?: string) => {
  const { request, status, data, error } =
    useRequestFn<CreateFollowResponseType>({
      method: 'post',
      url: '/follow/create',
      data: {
        userId,
      },
    });

  return { status, data, request, error };
};

export default useCreateFollow;
