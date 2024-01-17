import { useRecoilValue, useSetRecoilState } from 'recoil';
import Button from './common/Button';
import { postModalState } from '~/recoil/postModal/atoms';
import { userState } from '~/recoil/login/atoms';
import { isLoginModalOpenState } from '~/recoil/loginModal/atoms';
import { useCallback } from 'react';

const ModalPostButton = () => {
  const setPostModalOpen = useSetRecoilState(postModalState);
  const setIsLoginModalOpen = useSetRecoilState(isLoginModalOpenState);
  const auth = useRecoilValue(userState);

  const handleClick = useCallback(() => {
    if (!auth) {
      setIsLoginModalOpen(true);
      return;
    }
    setPostModalOpen((prev) => ({
      ...prev,
      isOpen: true,
    }));
  }, [auth, setIsLoginModalOpen, setPostModalOpen]);
  return (
    <Button
      variant='outlined'
      size='md'
      color='--primaryColor'
      ml={0.85}
      mr={0.85}
      style={{ width: '7.5rem', height: '3.125rem' }}
      onClick={handleClick}
    >
      포스트 작성
    </Button>
  );
};

export default ModalPostButton;
