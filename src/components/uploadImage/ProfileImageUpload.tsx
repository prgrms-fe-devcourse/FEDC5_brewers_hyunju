import { ChangeEvent, useState } from 'react';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Image from '~/components/common/Image';
import Button from '~/components/common/Button';

export interface ProfileImageUploadPropsType {
  currentImageUrl: string;
  onSave: (url: string) => void;
  onCancel: () => void;
}

const ProfileImageUpload = ({
  currentImageUrl,
  onSave,
  onCancel,
}: ProfileImageUploadPropsType) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    currentImageUrl
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleDelete = () => {
    setSelectedImage(null);
  };

  const handleSave = () => {
    if (selectedImage) {
      onSave(selectedImage);
    }
  };

  return (
    <Container
      maxWidth='md'
      p={2.75}
      style={{
        width: '35.125rem',
        height: '23.375rem',
        position: 'relative',
        boxSizing: 'border-box',
        borderRadius: '0.5rem',
        boxShadow: `0 0.375rem 0.625rem 0 var(--adaptiveOpacity200)`,
      }}
    >
      <Button
        variant='text'
        size='md'
        color='--adaptive100'
        onClick={onCancel}
        style={{
          color: 'var(--adaptive500)',
          width: '1.5rem',
          height: '1.5rem',
          position: 'absolute',
          top: '0.625rem',
          right: '0.625rem',
          border: 'none',
          textAlign: 'center',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        ✕
      </Button>
      <Flex
        direction='column'
        justifyContent='space-between'
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Text
          size='xl'
          weight={600}
        >
          프로필 이미지 변경
        </Text>
        <Flex>
          <Image
            block={false}
            width={9.375}
            height={9.375}
            src={selectedImage}
            alt='Profile Image'
          ></Image>
          <Flex
            direction='column'
            ml={1}
          >
            <label htmlFor='profileImageInput'>
              <Button
                variant='outlined'
                size='md'
                color='--primaryColor'
                as='span'
                style={{ height: '2.125rem', width: '9.875rem' }}
              >
                사진 업로드
              </Button>
              <input
                type='file'
                id='profileImageInput'
                name='profileImageInput'
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            </label>

            <Button
              variant='text'
              size='md'
              color='--secondaryColor'
              onClick={handleDelete}
            >
              사진 삭제
            </Button>
          </Flex>
        </Flex>
        <Flex
          justifyContent='space-between'
          style={{ height: '4rem' }}
        >
          <Button
            variant='outlined'
            size='md'
            color='--primaryColor'
            onClick={onCancel}
            style={{ height: '100%', width: '48%' }}
          >
            취소
          </Button>
          <Button
            variant='filled'
            size='md'
            color='--primaryColor'
            onClick={handleSave}
            style={{ height: '100%', width: '48%' }}
          >
            저장
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ProfileImageUpload;
