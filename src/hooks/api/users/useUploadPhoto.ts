import { UploadPhotoResponseType } from '~/types/api/users';
import request from '~/api/axios';
import { useState } from 'react';
import { handleError } from '~/utils/handleError';

export const useUploadPhoto = () => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<UploadPhotoResponseType | null>(null);
  const UPLOAD_PHOTO_URL = '/users/upload-photo';

  const uploadPhoto = async (formData: FormData) => {
    setStatus('loading');
    try {
      const response = await request<UploadPhotoResponseType>({
        method: 'post',
        url: UPLOAD_PHOTO_URL,
        data: formData,
      });

      setData(response.data);
      setStatus('success');

      return response.data;
    } catch (e: unknown) {
      handleError(e, 'DeletePost');
      setStatus('error');
    }
  };

  return { status, data: data, request: uploadPhoto };
};

export default useUploadPhoto;
