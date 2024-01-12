import { UploadPhotoResponseType } from '~/types/api/users';
import { useRequestFn } from '~/hooks/api';

export const useUploadPhoto = () => {
  const { request, status, data, error } =
    useRequestFn<UploadPhotoResponseType>({
      method: 'post',
      url: '/users/upload-photo',
    });

  return { status, data, request, error };
};

export default useUploadPhoto;
