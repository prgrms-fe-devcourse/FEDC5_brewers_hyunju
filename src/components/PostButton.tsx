import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { postModalContentState } from '~/atoms/postModalState';
import Button from './common/Button';

const PostButton = () => {
  const content = useRecoilValue(postModalContentState);
  return (
    <RoundButton
      disabled={content ? false : true}
      variant='filled'
      color='--primaryColor'
      size='md'
      onClick={() => alert(`${content}`)}
    >
      작성
    </RoundButton>
  );
};

export default PostButton;

const RoundButton = styled(Button)`
  border-radius: 40px;
`;
