import React from 'react';
import styled from '@emotion/styled';

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
        <Content>
          <textarea
            ref={ref}
            placeholder='메시지를 입력해 주세요'
            style={{
              width: '40rem',
              padding: '0.75rem',
              resize: 'none',
              outline: 'none',
              border: 'solid 0.25rem var(--transparent)',

              borderRadius: '0.5rem',
              backgroundColor: 'var(--adaptive200)',
              boxSizing: 'border-box',
            }}
          />
          <Button
            color='--secondaryColor'
            size='sm'
            variant='outlined'
            onClick={onClick}
            style={{ flexShrink: 0 }}
          >
            전송
          </Button>
        </Content>
      </Container>
    );
  }
);
export default MessageSending;

const Content = styled(Flex)`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  gap: 0.5rem;
`;
