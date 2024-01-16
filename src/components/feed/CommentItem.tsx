import styled from 'styled-components';
import { IconMessageCircle2 } from '@tabler/icons-react';
import Text from '../common/Text';
import Flex from '../common/Flex';
import { CommentType } from '~/types/common';

interface CommentItemPropsType {
  comments: CommentType[] | string[];
  handleClick: () => void;
}
const CommentItem = ({ comments, handleClick }: CommentItemPropsType) => {
  return (
    <StyledFlex
      alignItems='center'
      onClick={handleClick}
    >
      <IconWrapper
        justifyContent='center'
        alignItems='center'
      >
        <IconMessageCircle2
          width='1.4rem'
          height='1.4rem'
        ></IconMessageCircle2>
      </IconWrapper>

      <Text
        size='sm'
        style={{ marginLeft: '0.2rem', color: 'var(--adaptive500)' }}
      >
        {'댓글'}
      </Text>
      <Text
        size='sm'
        style={{ marginLeft: '0.25rem', color: 'var(--adaptive500)' }}
      >
        {comments.length}
      </Text>
    </StyledFlex>
  );
};

export default CommentItem;

const IconWrapper = styled(Flex)`
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 1px;
  padding-left: 0.7px;
  border-radius: 50%;

  transition: background-color 0.2s ease-in;
`;

const StyledFlex = styled(Flex)`
  transition: background-color 0.2s ease-in;

  /* &:hover {
    background-color: none;
    ${IconWrapper} {
      background-color: var(--blue500);
    }
  } */
`;
