import { ReactNode } from 'react';

interface ModalPagePropsType {
  children: ReactNode;
}
const ModalPage = ({ children }: ModalPagePropsType) => {
  return <>{children}</>;
};

export default ModalPage;
