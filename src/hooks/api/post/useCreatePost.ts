import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { CreatePostResponseType } from '~/types/api/posts';
import { CustomPostContentType } from '~/types/common';
import { CHANNEL_ID } from '~/constants/post';

export const useCreatePost = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [post, setPost] = useState<CreatePostResponseType | null>(null);
  const CREATE_POST_URL = '/posts/create';

  const createPost = async (post: CustomPostContentType, image?: File) => {
    setStatus('loading');
    try {
      const formData = new FormData();

      formData.append('title', JSON.stringify(post));
      image && formData.append('image', image);
      formData.append('channelId', CHANNEL_ID);

      const response = await request({
        method: 'post',
        url: CREATE_POST_URL,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
      });
      setPost(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'CreatePost');
      setStatus('error');
    }
  };

  return { status, data: post, request: createPost };
};

export default useCreatePost;
