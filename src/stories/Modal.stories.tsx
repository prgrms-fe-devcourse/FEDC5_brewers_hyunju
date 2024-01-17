import { useState } from 'react';
import Modal from '~/components/common/Modal';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Button from '~/components/common/Button';
import styled from '@emotion/styled';

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {},
};

export const ModalWithHeader = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      visible={isOpen}
      handleClose={() => setIsOpen(false)}
    >
      <Modal.Page>
        <Modal.Header handleClose={() => setIsOpen(false)}>
          <Text
            weight={600}
            size='lg'
          >
            제목
          </Text>
        </Modal.Header>
        {/* <IconUfo stroke={4} /> */}
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          lobortis sodales luctus. Duis arcu ipsum, imperdiet sed massa vitae,
          suscipit scelerisque odio. Pellentesque vel pretium mi. Mauris vel dui
          lacus. Suspendisse laoreet ultricies eros, a feugiat sem vulputate ut.
          Proin aliquam, mi ullamcorper dapibus condimentum, mi purus pulvinar
          velit, ut convallis mauris eros at velit. Vivamus volutpat suscipit
          viverra. Mauris ultrices, elit at viverra pulvinar, neque urna
          vulputate turpis, quis egestas massa elit ac augue. Duis at tortor
          odio. Fusce ut nulla orci. Etiam ac finibus orci. Vivamus commodo
          tellus mi, dapibus ultrices enim suscipit at. Ut nec dolor quis sem
          accumsan tincidunt. Quisque finibus sapien odio, non porttitor diam
          aliquam non. Maecenas et nunc vel nisi tempor iaculis id id sapien.
          Quisque et libero sapien. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque lobortis sodales luctus. Duis arcu
          ipsum, imperdiet sed massa vitae, suscipit scelerisque odio.
          Pellentesque vel pretium mi. Mauris vel dui lacus. Suspendisse laoreet
          ultricies eros, a feugiat sem vulputate ut. Proin aliquam, mi
          ullamcorper dapibus condimentum, mi purus pulvinar velit, ut convallis
          mauris eros at velit. Vivamus volutpat suscipit viverra. Mauris
          ultrices, elit at viverra pulvinar, neque urna vulputate turpis, quis
          egestas massa elit ac augue. Duis at tortor odio. Fusce ut nulla orci.
          Etiam ac finibus orci. Vivamus commodo tellus mi, dapibus ultrices
          enim suscipit at. Ut nec dolor quis sem accumsan tincidunt. Quisque
          finibus sapien odio, non porttitor diam aliquam non. Maecenas et nunc
          vel nisi tempor iaculis id id sapien. Quisque et libero sapien. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          lobortis sodales luctus. Duis arcu ipsum, imperdiet sed massa vitae,
          suscipit scelerisque odio. Pellentesque vel pretium mi. Mauris vel dui
          lacus. Suspendisse laoreet ultricies eros, a feugiat sem vulputate ut.
          Proin aliquam, mi ullamcorper dapibus condimentum, mi purus pulvinar
          velit, ut convallis mauris eros at velit. Vivamus volutpat suscipit
          viverra. Mauris ultrices, elit at viverra pulvinar, neque urna
          vulputate turpis, quis egestas massa elit ac augue. Duis at tortor
          odio. Fusce ut nulla orci. Etiam ac finibus orci. Vivamus commodo
          tellus mi, dapibus ultrices enim suscipit at. Ut nec dolor quis sem
          accumsan tincidunt. Quisque finibus sapien odio, non porttitor diam
          aliquam non. Maecenas et nunc vel nisi tempor iaculis id id sapien.
          Quisque et libero sapien. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque lobortis sodales luctus. Duis arcu
          ipsum, imperdiet sed massa vitae, suscipit scelerisque odio.
          Pellentesque vel pretium mi. Mauris vel dui lacus. Suspendisse laoreet
          ultricies eros, a feugiat sem vulputate ut. Proin aliquam, mi
          ullamcorper dapibus condimentum, mi purus pulvinar velit, ut convallis
          mauris eros at velit. Vivamus volutpat suscipit viverra. Mauris
          ultrices, elit at viverra pulvinar, neque urna vulputate turpis, quis
          egestas massa elit ac augue. Duis at tortor odio. Fusce ut nulla orci.
          Etiam ac finibus orci. Vivamus commodo tellus mi, dapibus ultrices
          enim suscipit at. Ut nec dolor quis sem accumsan tincidunt. Quisque
          finibus sapien odio, non porttitor diam aliquam non. Maecenas et nunc
          vel nisi tempor iaculis id id sapien. Quisque et libero sapien.
        </Modal.Body>
      </Modal.Page>
    </Modal>
  );
};
export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      visible={isOpen}
      handleClose={() => setIsOpen(false)}
    >
      <Modal.Page>
        <Modal.Body>
          <StyledFlex
            direction='column'
            alignItems='center'
            justifyContent='space-between'
            style={{ height: '100px' }}
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
              style={{ width: '100%', padding: 'var(--padding-md)' }}
              onClick={() => setIsOpen(false)}
            >
              확인
            </Button>
          </StyledFlex>
        </Modal.Body>
      </Modal.Page>
    </Modal>
  );
};
const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100%;
`;
