import { useRequestFn } from '~/hooks/api';
import { DeletePostRequestType } from '~/types/api/posts';

export const useDeletePost = (postId?: string) => {
  const { request, status, data, error } = useRequestFn<DeletePostRequestType>({
    method: 'delete',
    url: '/posts/delete',
    data: {
      id: postId,
    },
  });

  return { status, data, request, error };
};

export default useDeletePost;
