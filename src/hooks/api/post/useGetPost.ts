import { GetPostDetailResponseType } from '~/types/api/posts';
import { useRequestFn } from '~/hooks/api';

export const useGetPost = (postId?: string) => {
  const { request, status, data, error } =
    useRequestFn<GetPostDetailResponseType>({
      method: 'get',
      url: `/posts/${postId}`,
    });

  return { status, data, request, error };
};

export default useGetPost;
