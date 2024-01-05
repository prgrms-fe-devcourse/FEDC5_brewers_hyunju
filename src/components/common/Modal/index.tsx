import { ReactNode, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import Container from '../Container';
import styled from 'styled-components';
import ModalHeader from './ModalHeader';
import ModalPage from './ModalPage';
import ModalBody from './ModalBody';

type ModalVariantType = 'simple' | 'full';
export interface ModalPropsType {
  visible: boolean;
  handleClose: () => void;
  children: ReactNode;
  variant: ModalVariantType;
}
const Modal = ({ children, visible, handleClose, variant }: ModalPropsType) => {
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
            variant={variant}
            maxWidth='sm'
            p={variant === 'simple' ? 1 : 0.1}
            py={variant === 'simple' ? undefined : 0.375}
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

const ModalContainer = styled(Container)<{ variant: ModalVariantType }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;

  height: ${({ variant }) => (variant === 'simple' ? '15.625rem' : undefined)};
  min-height: 15.625rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1875rem 0.375rem var(--adaptive300);

  box-sizing: border-box;
  transform: translate(-50%, -50%);
`;
