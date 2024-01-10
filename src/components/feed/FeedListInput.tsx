import { useState } from 'react';
import styled from '@emotion/styled';
import Input from '~/components/input/Input';
import Avatar from '~/components/common/Avatar';
import Button from '~/components/common/Button';
import Flex from '~/components/common/Flex';
import { FeedItemContainer } from './FeedListItem';

export interface FeedListInputPropsType {
  userId: string;
  profileImage: string;
}

const FeedInput = styled(Input)`
  padding-top: 0;
  margin-top: 0;
`;

const FeedListInput = ({ userId, profileImage }: FeedListInputPropsType) => {
  const [text, setText] = useState('');

  const onChange = (inputText: string) => {
    setText(inputText);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      alert(text);
      // post 처리
      setText('');
    }
  };

  return (
    <FeedItemContainer maxWidth='md'>
      <form onSubmit={onSubmit}>
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
            <FeedInput
              value={text}
              onChange={onChange}
              placeholder='무엇을 하고 계신가요?'
            ></FeedInput>
            <Flex style={{ height: '2.75rem' }}>
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
                type='submit'
                variant='filled'
                size='md'
                color='--primaryColor'
                style={{ height: '100%', width: '4.5rem', marginLeft: 'auto' }}
              >
                작성
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </FeedItemContainer>
  );
};

export default FeedListInput;
