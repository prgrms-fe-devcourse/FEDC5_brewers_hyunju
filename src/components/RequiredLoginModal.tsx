import { useCallback } from 'react';
import Modal from './common/Modal';
import RequiredLoginTemplate from './templates/RequiredLoginTemplate';
import { useRecoilState } from 'recoil';
import { isLoginModalOpenState } from '~/recoil/loginModal/atoms';

const RequiredLoginModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useRecoilState(
    isLoginModalOpenState
  );

  const handleClose = useCallback(() => {
    setIsLoginModalOpen(false);
  }, [setIsLoginModalOpen]);

  return (
    <Modal
      visible={isLoginModalOpen}
      handleClose={handleClose}
    >
      <Modal.Page>
        <Modal.Body>
          <RequiredLoginTemplate handleClick={handleClose} />
        </Modal.Body>
      </Modal.Page>
    </Modal>
  );
};

export default RequiredLoginModal;
