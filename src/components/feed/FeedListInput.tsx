import { ChangeEvent } from 'react';
import styled from '@emotion/styled';
import Avatar from '~/components/common/Avatar';
import Button from '~/components/common/Button';
import Flex from '~/components/common/Flex';
import FeedContentEditable from '~/components/feed/FeedContentEditable';
import useFeedContent from '~/hooks/useFeedContent';
import Container from '~/components/common/Container';

export interface FeedListInputPropsType {
  userId: string;
  profileImage: string;
}

const FeedListInputContainer = styled(Container)`
  flex-shrink: 0;

  margin-bottom: 3.25rem;
  padding: 34px 40px;
  border: 1px solid var(--adaptive200);
  border-radius: 0.75rem;
  box-shadow: 0 4px 4px 0 var(--adaptiveOpacity100);

  background-color: var(-adaptive50);

  box-sizing: border-box;
`;

const FeedListInput = ({ userId, profileImage }: FeedListInputPropsType) => {
  const { content, removeContent, handleInput } = useFeedContent();

  const handleButtonClick = () => {
    if (content) {
      alert(content);
      removeContent();

      // 데이터 통신
    }
  };

  return (
    <FeedListInputContainer maxWidth='md'>
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
          <FeedContentEditable
            content={content}
            onChange={(e: ChangeEvent<HTMLDivElement>) => {
              handleInput(e);
            }}
          ></FeedContentEditable>
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
            <Button
              variant='outlined'
              size='md'
              color='--primaryColor'
              onClick={() => {
                alert('사진');
              }}
              style={{ height: '100%', width: '4.5rem' }}
            >
              사진
            </Button>
            <Button
              variant='filled'
              size='md'
              color='--primaryColor'
              onClick={() => handleButtonClick()}
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
