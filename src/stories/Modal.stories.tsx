import { useState } from 'react';
import { IconUfo } from '@tabler/icons-react';
import Modal from '~/components/common/Modal';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Button from '~/components/common/Button';
import styled from 'styled-components';

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
  args: {},
};

export const ModalWithHeader = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      type={'full'}
      visible={isOpen}
      handleClose={() => setIsOpen(false)}
    >
      <Modal.Page>
        <Modal.Header
          text='기본 모달'
          handleClose={() => setIsOpen(false)}
        />
        <IconUfo stroke={4} />
      </Modal.Page>
    </Modal>
  );
};
export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      type='simple'
      visible={isOpen}
      handleClose={() => setIsOpen(false)}
    >
      <Modal.Page>
        <StyledFlex
          direction='column'
          alignItems='center'
          justifyContent='space-between'
        >
          <Text
            size='xl'
            weight={600}
          >
            기본 모달입니다
          </Text>
          <Button
            variant='filled'
            size='md'
            color='--primaryColor'
            style={{ width: '100%', padding: '0.75rem' }}
            onClick={() => setIsOpen(false)}
          >
            확인
          </Button>
        </StyledFlex>
      </Modal.Page>
    </Modal>
  );
};
const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;
