import { ReactNode } from 'react';
import styled from 'styled-components';
import { IconX } from '@tabler/icons-react';
import Button from '~/components/common/Button';
import Flex from '~/components/common/Flex';

interface ModalHeaderPropsType {
  children: ReactNode;
  handleClose: () => void;
}
const ModalHeader = ({ children, handleClose }: ModalHeaderPropsType) => {
  return (
    <StyledFlex
      justifyContent='space-between'
      alignItems='center'
      pb={0.375}
    >
      <div></div>
      {children}
      <Button
        variant='text'
        size='md'
        color='--adaptive500'
        onClick={handleClose}
        style={{
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
          padding: '0.125rem',
        }}
      >
        <IconX />
      </Button>
    </StyledFlex>
  );
};

export default ModalHeader;

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 3.125rem;
  border-bottom: 0.125rem solid var(--adaptive200);

  box-sizing: border-box;
`;
