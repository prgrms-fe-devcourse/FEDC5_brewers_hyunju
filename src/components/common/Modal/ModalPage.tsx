import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface ModalPagePropsType {
  children: ReactNode;
}

const ModalPage = ({ children }: ModalPagePropsType) => {
  return <PageWrapper>{children}</PageWrapper>;
};

export default ModalPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
`;
