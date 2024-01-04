import React from 'react';
import Flex from '../Flex';
import Text from '../Text';
import { IconX } from '@tabler/icons-react';
import styled from 'styled-components';
import Button from '../Button';

interface ModalHeaderProps {
  text: string;
  handleClose: () => void;
}
const ModalHeader = ({ text, handleClose }: ModalHeaderProps) => {
  return (
    <StyledFlex
      justifyContent='space-between'
      alignItems='center'
      pb={0.375}
    >
      <div></div>
      <Text
        size='xl'
        weight={600}
      >
        {text}
      </Text>
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
  margin-bottom: 1rem;
  border-bottom: 0.1875rem solid var(--adaptive200);
`;
