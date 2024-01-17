import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';
import Container from '../Container';
import ModalHeader from './ModalHeader';
import ModalPage from './ModalPage';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
export interface ModalPropsType {
  visible: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const Modal = ({ children, visible, handleClose }: ModalPropsType) => {
  return (
    <>
      {visible &&
        createPortal(
          <BackgroundDim onClick={handleClose}></BackgroundDim>,
          document.body
        )}
      {visible &&
        createPortal(
          <ModalContainer
            maxWidth='sm'
            p={1}
          >
            {children}
          </ModalContainer>,
          document.body
        )}
    </>
  );
};
Modal.Page = ModalPage;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
export default Modal;

const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;

  width: 100vw;
  height: 100vh;

  background-color: var(--adaptiveOpacity100);
`;

const ModalContainer = styled(Container)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;

  /* min-height: 15.625rem; */
  max-height: 37.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1875rem 0.375rem var(--adaptive300);

  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translate(-50%, -50%);
`;
