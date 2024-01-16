import { WORKING_SPOT } from '~/constants/post';
import Container from '../common/Container';
import Text from '../common/Text';
import styled from '@emotion/styled';
import Button from '../common/Button';
import {
  BasicPostContentType,
  PostType,
  WorkingSpotType,
} from '~/types/common';
import Image from '../common/Image';
import Flex from '../common/Flex';
import { FormEvent, useMemo, useRef, useState } from 'react';
import { IconPhotoPlus } from '@tabler/icons-react';
import useUpdatePost from '~/hooks/api/post/useUpdatePost';
import { useNavigate } from 'react-router-dom';

export interface PostEditTemplatePropsType {
  data: PostType;
}

const PostEditTemplate = (props: PostEditTemplatePropsType) => {
  const navigator = useNavigate();

  const { request: updatePost } = useUpdatePost();

  const spotRef = useRef<HTMLSelectElement | null>(null);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  console.log(previewImage);
  const [isDeleteImage, setIsDeleteImage] = useState(false);

  const post: BasicPostContentType = useMemo(() => {
    const parsePost = JSON.parse(props.data.title);

    return parsePost;
  }, [props.data]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await updatePost(
      props.data._id,
      {
        ...post,
        workingSpot: (spotRef.current?.value ?? 'home') as WorkingSpotType,
        body: {
          text: textRef.current?.value ?? '',
        },
      },
      fileRef.current?.files ? fileRef.current?.files[0] : undefined,
      isDeleteImage ? props.data.imagePublicId : undefined
    );

    navigator(`/post/${props.data._id}`);
  };

  const handleFileReset = () => {
    if (fileRef.current) {
      fileRef.current.value = '';
      setPreviewImage(null);
    }
  };

  return (
    <Container
      maxWidth='md'
      p={2}
    >
      <Text
        size='2xl'
        weight={800}
        mb={1.5}
      >
        포스트 수정
      </Text>
      <Form onSubmit={handleSubmit}>
        <WorkingSpot>
          <Select
            ref={spotRef}
            name='workingSpot'
            defaultValue={post.workingSpot}
          >
            {WORKING_SPOT.map((spot) => (
              <option
                key={spot}
                value={spot}
              >
                {spot}
              </option>
            ))}
          </Select>
        </WorkingSpot>
        <Content>
          <Textarea
            ref={textRef}
            name='post'
            defaultValue={post.body.text}
          />
        </Content>
        <Images gap={0.5}>
          {props.data.image && !previewImage && (
            <ImageItem>
              <Image
                width={7}
                height={7}
                src={props.data.image}
                alt=''
              />
              <fieldset>
                <input
                  type='checkbox'
                  id='toDeleteImageId'
                  name='toDeleteImageId'
                  value={props.data.imagePublicId}
                  checked={isDeleteImage}
                  onChange={(e) => setIsDeleteImage(e.target.checked)}
                />
                <label htmlFor='toDeleteImageId'>
                  <Text
                    as='span'
                    color='--secondaryColor'
                    size='sm'
                  >
                    삭제
                  </Text>
                </label>
              </fieldset>
            </ImageItem>
          )}
          {previewImage && (
            <ImageItem>
              <Image
                width={7}
                height={7}
                src={previewImage}
                alt=''
              />
              <Button
                variant='text'
                size='sm'
                color='--secondaryColor'
                onClick={handleFileReset}
              >
                업로드 취소
              </Button>
            </ImageItem>
          )}
          <ImageItem>
            <UploadButton
              variant='outlined'
              color='--primaryColor'
              size='lg'
              onClick={() => fileRef.current?.click()}
            >
              <IconPhotoPlus />
            </UploadButton>
            <input
              type='file'
              ref={fileRef}
              name='file'
              onChange={(e) => {
                e.target.files &&
                  setPreviewImage(URL.createObjectURL(e.target.files[0]));
              }}
              hidden
            />
          </ImageItem>
        </Images>
        <Button
          type='submit'
          variant='filled'
          size='lg'
          color='--primaryColor'
        >
          수정
        </Button>
      </Form>
    </Container>
  );
};

export default PostEditTemplate;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

const Select = styled.select`
  height: 2rem;
  padding: 0.25rem 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;

  resize: none;
`;

const WorkingSpot = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.5rem;
`;

const Content = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.5rem;
`;

const Images = styled(Flex)();

const ImageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  gap: 0.5rem;
`;

const UploadButton = styled(Button)`
  width: 7rem;
  height: 7rem;
`;
