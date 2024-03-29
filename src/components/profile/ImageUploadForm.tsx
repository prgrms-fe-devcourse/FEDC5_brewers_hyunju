import { ChangeEvent, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Flex from '~/components/common/Flex';
import Image from '~/components/common/Image';
import Button from '~/components/common/Button';
import useUploadPhoto from '~/hooks/api/users/useUploadPhoto';
import { useSetRecoilState } from 'recoil';
import { userState } from '~/recoil/login/atoms';

export interface ImageUploadFormPropsType {
  isCover?: boolean;
  currentImageUrl: string;
  onSave: () => void;
  onCancel: () => void;
  disabled?: boolean;
}

const ImageUploadForm = ({
  isCover,
  currentImageUrl,
  onSave,
  onCancel,
  disabled,
}: ImageUploadFormPropsType) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { request: uploadPhoto } = useUploadPhoto();

  const setAuth = useSetRecoilState(userState);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preivewUrl, setPreivewUrl] = useState<string | undefined>(
    currentImageUrl
  );

  const defaultImage = useMemo(async () => {
    const res = await axios({
      url: '/img/default_profile.svg',
      responseType: 'blob',
    });
    const file = new File([res.data], 'default_profile.svg', {
      type: 'image/svg+xml',
    });
    return file;
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setPreivewUrl(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  const handleClickUpload = () => {
    formRef.current?.file.click();
  };

  const handleDelete = () => {
    formRef.current?.reset();
    setPreivewUrl(currentImageUrl);
    setSelectedFile(null);
  };

  const handleDefaultImage = async () => {
    setPreivewUrl('/img/default_profile.svg');
    setIsLoading(true);
    setSelectedFile(await defaultImage);
    setIsLoading(false);
  };

  const handleSave = async () => {
    if (selectedFile) {
      setIsLoading(true);

      const form = new FormData();

      form.append('isCover', (isCover ?? false).toString());
      form.append('image', selectedFile);

      const res = await uploadPhoto(form);

      res && setAuth(res);

      setIsLoading(false);

      onSave();
    }
  };

  return (
    <Flex
      pt={2}
      direction='column'
      gap={2}
    >
      <HiddenForm
        ref={formRef}
        onChange={(e) => console.log(e)}
      >
        <input
          type='file'
          name='file'
          onChange={handleFileChange}
          hidden
        />
      </HiddenForm>
      <Flex gap={2}>
        <Image
          width={10}
          height={10}
          src={preivewUrl}
          alt='Profile Image'
          letterBoxColor='--transparent'
        />
        <Flex
          direction='column'
          gap={1}
          ml={1}
        >
          <Button
            variant='filled'
            size='md'
            color='--primaryColor'
            style={{ padding: '0.5rem 2rem' }}
            onClick={handleClickUpload}
            disabled={disabled || isLoading}
          >
            이미지 선택
          </Button>
          <Button
            variant='text'
            size='md'
            color='--secondaryColor'
            onClick={handleDelete}
            disabled={disabled || isLoading}
          >
            선택 취소
          </Button>
          <Button
            variant='text'
            size='md'
            color='--secondaryColor'
            onClick={handleDefaultImage}
            disabled={disabled || isLoading}
          >
            기본 프로필
          </Button>
        </Flex>
      </Flex>
      <Flex
        justifyContent='space-between'
        style={{ height: '4rem' }}
        gap={1}
      >
        <Button
          variant='outlined'
          size='lg'
          color='--primaryColor'
          onClick={onCancel}
          style={{ flexGrow: '1' }}
          disabled={disabled || isLoading}
        >
          취소
        </Button>
        <Button
          variant='filled'
          size='lg'
          color='--primaryColor'
          onClick={handleSave}
          style={{ flexGrow: '1' }}
          disabled={disabled || isLoading || !selectedFile}
        >
          저장
        </Button>
      </Flex>
    </Flex>
  );
};

const HiddenForm = styled.form`
  display: none;
`;

export default ImageUploadForm;
