import { useSetRecoilState } from 'recoil';
import Flex from '~/components/common/Flex';
import Button from '~/components/common/Button';
import { postModalState } from '~/recoil/postModal/atoms';

const PostTypeButton = () => {
  const setPostModal = useSetRecoilState(postModalState);
  return (
    <Flex alignItems='center'>
      <Button
        variant='outlined'
        size='sm'
        color='--secondaryColor'
        onClick={() =>
          setPostModal((prev) => ({
            ...prev,
            type: 'basic',
          }))
        }
      >
        일반
      </Button>
      <Button
        variant='outlined'
        size='sm'
        color='--secondaryColor'
        onClick={() =>
          setPostModal((prev) => ({
            ...prev,
            type: 'mogakco',
          }))
        }
      >
        모각코
      </Button>
      <Button
        variant='outlined'
        size='sm'
        color='--secondaryColor'
        onClick={() =>
          setPostModal((prev) => ({
            ...prev,
            type: 'review',
          }))
        }
      >
        리뷰
      </Button>
    </Flex>
  );
};

export default PostTypeButton;
