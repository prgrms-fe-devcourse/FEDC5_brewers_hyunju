import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isPostEmptyState, postModalState } from '~/atoms/postModalState';
import Button from './common/Button';

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
