import { ChangeEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import Avatar from '~/components/common/Avatar';
import Button from '~/components/common/Button';
import Image from '../common/Image';
import Flex from '~/components/common/Flex';
import Container from '~/components/common/Container';
import { CustomPostContentType, WorkingSpotType } from '~/types/common';
import useGetPosts from '~/hooks/api/post/useGetPosts';
import WorkSpotSelector from '../WorkSpotSelector';

export interface FeedListInputPropsType {
  userId: string;
  profileImage: string;
  onHandleCreatePost: (
    newPost: CustomPostContentType,
    file?: File | null
  ) => void;
}

const FeedListInputContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  margin-bottom: 3.25rem;
  padding: 34px 40px;
  border: 1px solid var(--adaptive200);
  border-radius: 0.75rem;
  box-shadow: 0 4px 4px 0 var(--adaptiveOpacity100);

  background-color: var(-adaptive50);

  box-sizing: border-box;
  gap: 10px;
`;

const FeedListTextarea = styled.textarea`
  width: 100%;
  height: 4.875rem;
  padding-top: 0.625rem;
  border: none;

  font-size: 1rem;

  box-sizing: border-box;
  resize: none;

  :focus {
    outline: none;
  }
`;

const FeedListInput = ({
  userId,
  profileImage,
  onHandleCreatePost,
}: FeedListInputPropsType) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useGetPosts();

  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [workingSpot, setWorkingSpot] = useState<WorkingSpotType>('cafe');
  const resetData = () => {
    setContent('');
    setPreviewUrl(undefined);
    setSelectedFile(null);
  };

  // '작성' 버튼 클릭시
  const handleSubmitBtnClick = async () => {
    if (content) {
      const newPost: CustomPostContentType = {
        type: 'common',
        title: '새로운 포스트',
        workingSpot,
        body: {
          text: content,
        },
      };

      console.log(newPost);
      onHandleCreatePost(newPost, selectedFile);

      resetData();
    }
  };

  // '사진' 버튼 클릭 시
  const handleImageBtnClick = () => {
    formRef.current?.file.click();
  };

  // 파일 변경 시
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  return (
    <FeedListInputContainer maxWidth='md'>
      <WorkSpotSelector
        handleChange={(e) => setWorkingSpot(e.target.value as WorkingSpotType)}
      />
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <div>
          <Avatar
            src={profileImage}
            size='sm'
            alt='user image'
            handleClick={() => {
              alert(userId);
            }}
          ></Avatar>
        </div>
        <Flex
          direction='column'
          ml={1}
          style={{
            width: '44rem',
          }}
        >
          <FeedListTextarea
            placeholder='무엇을 하고 계신가요?'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {selectedFile && (
            <Image
              width={10}
              height={10}
              src={previewUrl}
              alt='Profile Image'
              letterBoxColor='--transparent'
            />
          )}
          <Flex
            mt={1.2}
            style={{ height: '2.75rem' }}
          >
            <Button
              variant='outlined'
              size='md'
              color='--primaryColor'
              onClick={() => {
                alert('위치');
              }}
              mr={1.2}
              style={{ height: '100%', width: '4.5rem' }}
            >
              위치
            </Button>
            <form
              ref={formRef}
              onChange={(e) => console.log(e)}
            >
              <input
                type='file'
                name='file'
                onChange={handleFileChange}
                hidden
              />
            </form>
            <Button
              variant='outlined'
              size='md'
              color='--primaryColor'
              onClick={handleImageBtnClick}
              style={{ height: '100%', width: '4.5rem' }}
            >
              사진
            </Button>
            <Button
              variant='filled'
              size='md'
              color='--primaryColor'
              onClick={handleSubmitBtnClick}
              style={{ height: '100%', width: '4.5rem', marginLeft: 'auto' }}
            >
              작성
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </FeedListInputContainer>
  );
};

export default FeedListInput;
