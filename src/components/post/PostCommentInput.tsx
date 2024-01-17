import { useState } from 'react';
import styled from '@emotion/styled';
import { FONT_SIZE } from '~/constants/design';
import Avatar from '~/components/common/Avatar';
import Button from '~/components/common/Button';
import Flex from '~/components/common/Flex';
import Container from '~/components/common/Container';

export interface PostCommentInputPropsType {
  userId: string | null;
  profileImage: string | null;
  onCreateComment: (comment: string) => void;
}

const PostCommentInputContainer = styled(Container)`
  flex-shrink: 0;

  width: 100%;
  padding: var(--padding-lg);

  background-color: var(-adaptive50);

  box-sizing: border-box;
`;

const PostCommentTextarea = styled.textarea`
  width: calc(100% - 3.7rem);
  height: 3rem;
  padding: var(--padding-md) var(--padding-lg);
  outline: none;
  border: solid 0.0938rem var(--transparent);
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

const PostCommentInput = ({
  userId,
  profileImage,
  onCreateComment,
}: PostCommentInputPropsType) => {
  const [content, setContent] = useState('');

  const resetData = () => {
    setContent('');
  };

  // '작성' 버튼 클릭시
  const handleSubmitBtnClick = async () => {
    if (!userId) {
      alert('댓글을 작성하려면 로그인 해주세요!');
      return;
    }
    if (content) {
      onCreateComment(content);

      resetData();
    }
  };

  return (
    <PostCommentInputContainer maxWidth='md'>
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
        style={{ flexShrink: '0', width: '100%' }}
      >
        <Flex
          style={{
            flexShrink: '0',
            width: 'calc(100% - 5.5rem)',
          }}
        >
          <div style={{ marginRight: '1rem' }}>
            <Avatar
              userId={userId ? userId : ''}
              src={profileImage ? profileImage : ''}
              size='sm'
              alt='user image'
            ></Avatar>
          </div>

          <PostCommentTextarea
            placeholder='댓글을 남겨주세요'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Flex>
        <Flex
          direction='column'
          ml={1}
          style={{
            width: '44rem',
          }}
        >
          <Button
            variant='filled'
            size='md'
            color='--primaryColor'
            onClick={handleSubmitBtnClick}
            style={{
              height: '100%',
              width: '4.5rem',
              marginLeft: 'auto',
            }}
          >
            작성
          </Button>
        </Flex>
      </Flex>
    </PostCommentInputContainer>
  );
};

export default PostCommentInput;
