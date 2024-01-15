import { useCallback, useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { RangeTemplateType } from '~/types/api/common';
import { GetChannelPostsResponseType } from '~/types/api/posts';
import { CHANNEL_ID } from '~/constants/post';

export const useGetPosts = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [post, setPost] = useState<GetChannelPostsResponseType | null>(null);

  const getPosts = useCallback(async (config?: RangeTemplateType) => {
    setStatus('loading');
    try {
      const response = await request({
        method: 'get',
        url: `/posts/channel/${CHANNEL_ID}`,
        data: {
          ...config,
        },
      });
      setPost(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'GetPosts');
      setStatus('error');
    }
  }, []);

  return { status, data: post, request: getPosts };
};

export default useGetPosts;
