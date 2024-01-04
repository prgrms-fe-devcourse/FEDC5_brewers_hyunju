import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import Container from '../Container';
import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import ModalPage from './ModalPage';

export interface ModalPropsType {
  visible: boolean;
  handleClose: () => void;
  children: ReactNode;
  type: 'simple' | 'full';
}
const Modal = ({ children, visible, handleClose, type }: ModalPropsType) => {
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
            p={type === 'simple' ? 3 : 0.1}
            py={type === 'simple' ? undefined : 0.375}
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
// Modal.Body = ModalBody;
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

  height: 15.625rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1875rem 0.375rem var(--adaptive300);

  box-sizing: border-box;
  transform: translate(-50%, -50%);
`;
