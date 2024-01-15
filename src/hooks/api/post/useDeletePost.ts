import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { DeletePostResponseType } from '~/types/api/posts';

export const useDeletePost = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [post, setPost] = useState<DeletePostResponseType | null>(null);
  const DELETE_POST_URL = '/posts/delete';

  const deletePost = async (postId: string) => {
    setStatus('loading');
    try {
      const response = await request({
        method: 'delete',
        url: DELETE_POST_URL,
        data: {
          id: postId,
        },
      });
      setPost(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'DeletePost');
      setStatus('error');
    }
  };

  return { status, data: post, request: deletePost };
};

export default useDeletePost;
