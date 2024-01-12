import { useState } from 'react';
import request from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { UpdatePostResponseType, CustomPostType } from '~/types/api/posts';
import { CHANNEL_ID } from '~/constants/post';

export const useUpdatePost = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [post, setPost] = useState<UpdatePostResponseType | null>(null);
  const UPDATE_POST_URL = '/posts/update';

  const updatePost = async (
    postId: string,
    post: CustomPostType,
    image?: File,
    toDeleteImageId?: string
  ) => {
    setStatus('loading');
    try {
      const formData = new FormData();

      formData.append('postId', postId);
      formData.append('title', JSON.stringify(post));
      image && formData.append('image', image);
      toDeleteImageId &&
        formData.append('imageToDeletePublicId', toDeleteImageId);
      formData.append('channelId', CHANNEL_ID);

      const response = await request({
        method: 'put',
        url: UPDATE_POST_URL,
        data: formData,
      });
      setPost(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'CreatePost');
      setStatus('error');
    }
  };

  return { status, data: post, request: updatePost };
};

export default useUpdatePost;
