import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { GetPostDetailResponseType } from '~/types/api/posts';

export const useGetPostDetail = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [post, setPost] = useState<GetPostDetailResponseType | null>(null);

  const getPost = async (postId: string) => {
    setStatus('loading');
    try {
      const response = await request({
        method: 'get',
        url: `/posts/${postId}`,
      });
      setPost(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'GetPostDetail');
      setStatus('error');
    }
  };

  return { status, data: post, request: getPost };
};

export default useGetPostDetail;
