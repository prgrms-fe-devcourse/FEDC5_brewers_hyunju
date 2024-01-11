import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface ModalBodyPropsType {
  children: ReactNode;
}
const ModalBody = ({ children }: ModalBodyPropsType) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};

export default ModalBody;

const BodyWrapper = styled.div`
  flex-grow: 1;

  width: 100%;
  height: 100%;
  padding: 1.5rem;

  box-sizing: border-box;
`;
