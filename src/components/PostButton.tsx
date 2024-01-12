import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import Button from './common/Button';
import { isPostEmptyState, postModalState } from '~/atoms/postModalState';

const PostButton = () => {
  // const content = useRecoilValue(postModalContentState);
  const isEmpty = useRecoilValue(isPostEmptyState);
  const state = useRecoilValue(postModalState);
  return (
    <RoundButton
      disabled={isEmpty ? true : false}
      variant='filled'
      color='--primaryColor'
      size='md'
      onClick={() => console.log(state)}
    >
      작성
    </RoundButton>
  );
};

export default PostButton;

const RoundButton = styled(Button)`
  border-radius: 40px;
`;
