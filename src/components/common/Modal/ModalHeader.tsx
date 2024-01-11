import { ReactNode } from 'react';
import { IconX } from '@tabler/icons-react';
import styled from '@emotion/styled';
import Flex from '~/components/common/Flex';
import Button from '~/components/common/Button';

interface ModalHeaderProps {
  children: ReactNode;
  handleClose: () => void;
}
const ModalHeader = ({ children, handleClose }: ModalHeaderProps) => {
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
  border-bottom: 0.125rem solid var(--adaptive200);

  box-sizing: border-box;
`;
