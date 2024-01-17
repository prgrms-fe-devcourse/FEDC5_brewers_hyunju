import React from 'react';
import Container from './common/Container';
import Flex from './common/Flex';
import Button from './common/Button';

interface MessageSendingPropsType {
  onClick: () => void;
}
const MessageSending = React.forwardRef(
  (
    { onClick }: MessageSendingPropsType,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <Container maxWidth='sm'>
        <Flex gap={0.25}>
          <textarea
            ref={ref}
            placeholder='메시지를 입력해 주세요'
            style={{
              width: '40rem',
              height: '5rem',
              padding: 0,
              resize: 'none',
              outline: 'none',
            }}
          ></textarea>
          <Button
            color='--secondaryColor'
            size='sm'
            variant='filled'
            onClick={onClick}
            style={{ flexShrink: 0 }}
          >
            전송
          </Button>
        </Flex>
      </Container>
    );
  }
);
export default MessageSending;
