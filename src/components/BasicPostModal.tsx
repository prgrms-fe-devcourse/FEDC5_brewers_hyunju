import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IconPhoto } from '@tabler/icons-react';
import Modal from '~/components/common/Modal';
import Text from '~/components/common/Text';
import Avatar from '~/components/common/Avatar';
import Flex from '~/components/common/Flex';
import Button from '~/components/common/Button';
import ContentEditableDiv from './ContentEditableDiv';
import PostButton from './PostButton';
import { postModalState } from '~/recoil/postModal/atoms';
import { basicPostOpenState } from '~/recoil/postModal/selectors';

// TODO: 렌더링 최적화, contentEditable XSS 보호
const BasicPostModal = () => {
  const setPostModal = useSetRecoilState(postModalState);
  const isOpen = useRecoilValue(basicPostOpenState);
  const handleClose = useCallback(() => {
    setPostModal({
      type: 'basic',
      isOpen: false,
      content: '',
      reviewForm: {},
      mogakForm: {},
    });
  }, [setPostModal]);
  return (
    <Modal
      handleClose={handleClose}
      visible={isOpen}
    >
      <Modal.Page>
        <Modal.Header handleClose={handleClose}>
          <Text
            size='xl'
            weight={600}
          >
            포스트 작성하기
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Flex
            justifyContent='center'
            gap={1}
          >
            <div>
              <Avatar
                size='sm'
                handleClick={() => console.log('클릭')}
              />
            </div>
            <ContentEditableDiv />
          </Flex>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='text'
            size='sm'
            color='--primaryColor'
          >
            <IconPhoto size={30} />
          </Button>
          <PostButton />
        </Modal.Footer>
      </Modal.Page>
    </Modal>
  );
};

export default BasicPostModal;
