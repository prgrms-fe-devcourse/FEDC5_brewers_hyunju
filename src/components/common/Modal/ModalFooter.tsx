import styled from 'styled-components';
import Flex from '../Flex';

interface ModalFooterPropsType {
  children: React.ReactNode;
}
const ModalFooter = ({ children }: ModalFooterPropsType) => {
  return (
    <StyledFlex
      alignItems='center'
      justifyContent='space-between'
      pt={0.375}
    >
      {children}
    </StyledFlex>
  );
};

export default ModalFooter;

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 3.125rem;
  border-top: 0.125rem solid var(--adaptive200);

  box-sizing: border-box;
`;
