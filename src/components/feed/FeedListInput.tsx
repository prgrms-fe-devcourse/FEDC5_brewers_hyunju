import { ChangeEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { FONT_SIZE } from '~/constants/design';
import Avatar from '~/components/common/Avatar';
import Button from '~/components/common/Button';
import Image from '../common/Image';
import Flex from '~/components/common/Flex';
import Container from '~/components/common/Container';
import { CustomPostContentType, WorkingSpotType } from '~/types/common';
import useGetPosts from '~/hooks/api/post/useGetPosts';
import WorkSpotSelector from '../WorkSpotSelector';
import { IconPhoto, IconX } from '@tabler/icons-react';
import ResponseStatusType from '~/types/api/status';

export interface FeedListInputPropsType {
  createStatus: ResponseStatusType;
  userId: string;
  profileImage: string;
  onHandleCreatePost: (newPost: CustomPostContentType, file?: File) => void;
}

const FeedListInput = ({
  createStatus,
  userId,
  profileImage,
  onHandleCreatePost,
}: FeedListInputPropsType) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useGetPosts();

  const [hover, setHover] = useState(false);
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
  const [workingSpot, setWorkingSpot] = useState<WorkingSpotType>('cafe');
  const resetData = () => {
    setContent('');
    setPreviewUrl(undefined);
    setSelectedFile(undefined);
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
            userId={userId}
            src={profileImage}
            size='sm'
            alt='user image'
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
            placeholder={
              createStatus === 'loading'
                ? '업로드 중입니다...'
                : '무엇을 하고 계신가요?'
            }
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={createStatus === 'loading' ? true : false}
          />
          {selectedFile && (
            <ImageWrapper
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Image
                width={10}
                height={10}
                src={previewUrl}
                alt='Profile Image'
                letterBoxColor='--transparent'
              />
              {hover && (
                <CloseButton
                  onClick={() => {
                    setSelectedFile(undefined);
                    setPreviewUrl(undefined);
                  }}
                >
                  <IconX size={15} />
                </CloseButton>
              )}
            </ImageWrapper>
          )}
          <Flex
            mt={1.2}
            style={{ height: '2.75rem' }}
            alignItems='center'
          >
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
              variant='text'
              size='md'
              color='--primaryColor'
              onClick={handleImageBtnClick}
              style={{ height: '100%', width: '4.5rem' }}
              disabled={createStatus === 'loading' ? true : false}
            >
              <IconPhoto size='32' />
            </Button>
            <Button
              variant='filled'
              size='md'
              color='--primaryColor'
              onClick={handleSubmitBtnClick}
              style={{ height: '100%', width: '4.5rem', marginLeft: 'auto' }}
              disabled={createStatus === 'loading' ? true : false}
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

const FeedListInputContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  background-color: var(-adaptive50);

  box-sizing: border-box;
  gap: 10px;
`;

const FeedListTextarea = styled.textarea`
  width: 100%;
  height: 4.875rem;
  padding: var(--padding-lg);
  outline: none;
  border: solid 0.0938rem var(--transparent);

  /* border: none; */
  border-radius: var(--radius-sm);

  background-color: var(--adaptive200);

  color: var(--adaptive950);
  font-size: ${FONT_SIZE['md']};

  box-sizing: border-box;
  resize: none;

  :focus {
    border-color: var(--secondaryColor);
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  width: fit-content;
  margin-top: 1rem;
  border: solid 1px var(--adaptive300);
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -8px;

  width: 20px;
  height: 20px;
  padding: 0;
  padding-top: 0.5px;
  padding-left: 1px;
  border: none;
  border-radius: 50%;

  background-color: var(--adaptive500);

  box-sizing: border-box;
  cursor: pointer;
`;
