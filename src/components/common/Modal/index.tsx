import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import Container from '../Container';
import ModalHeader from './ModalHeader';
import ModalPage from './ModalPage';
import ModalBody from './ModalBody';
export interface ModalPropsType {
  visible: boolean;
  handleClose: () => void;
  children: ReactNode;
}
const Modal = ({ children, visible, handleClose }: ModalPropsType) => {
  const $overlay = useMemo(() => document.createElement('div'), []);
  const $backdrop = useMemo(() => document.createElement('div'), []);
  useEffect(() => {
    document.body.appendChild($overlay);
    document.body.appendChild($backdrop);
    return () => {
      document.body.removeChild($overlay);
      document.body.removeChild($backdrop);
    };
  }, [$overlay, $backdrop]);

  return (
    <>
      {visible &&
        ReactDOM.createPortal(
          <BackgroundDim onClick={handleClose}></BackgroundDim>,
          $backdrop
        )}
      {visible &&
        ReactDOM.createPortal(
          <ModalContainer
            maxWidth='sm'
            p={1}
          >
            {children}
          </ModalContainer>,
          $overlay
        )}
    </>
  );
};
Modal.Page = ModalPage;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
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
  overflow-y: auto;
  transform: translate(-50%, -50%);
`;
