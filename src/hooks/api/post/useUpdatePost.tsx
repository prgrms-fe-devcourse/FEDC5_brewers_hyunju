import { useRequestFn } from '~/hooks/api';
import { UpdatePostRequestType } from '~/types/api/posts';

export const useUpdatePost = (postId?: string) => {
  const { request, status, data, error } = useRequestFn<UpdatePostRequestType>({
    method: 'put',
    url: '/posts/update',
    data: {
      postId,
    },
  });

  return { status, data, request, error };
};

export default useUpdatePost;
