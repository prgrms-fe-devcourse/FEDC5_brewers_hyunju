import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { RangeTemplateType } from '~/types/api/common';
import { GetUserPostsResponseType } from '~/types/api/posts';

export const useGetPostsByUser = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [post, setPost] = useState<GetUserPostsResponseType | null>(null);

  const getPosts = async (userId: string, config?: RangeTemplateType) => {
    setStatus('loading');
    try {
      const response = await request({
        method: 'get',
        url: `/posts/author/${userId}`,
        data: {
          ...config,
        },
      });
      setPost(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'GetPostsByUser');
      setStatus('error');
    }
  };

  return { status, data: post, request: getPosts };
};

export default useGetPostsByUser;
