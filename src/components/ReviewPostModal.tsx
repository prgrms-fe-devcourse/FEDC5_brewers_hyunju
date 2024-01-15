import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IconPhoto } from '@tabler/icons-react';
import Modal from '~/components/common/Modal';
import Text from '~/components/common/Text';
import ReviewForm from './ReviewForm';
import Button from '~/components/common/Button';
import ContentEditableDiv from './ContentEditableDiv';
import PostButton from './PostButton';
import { postModalState } from '~/recoil/postModal/atoms';
import { reviewPostOpenState } from '~/recoil/postModal/selectors';

const ReviewPostModal = () => {
  const setPostModal = useSetRecoilState(postModalState);
  const isOpen = useRecoilValue(reviewPostOpenState);
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
      visible={isOpen}
      handleClose={handleClose}
    >
      <Modal.Page>
        <Modal.Header handleClose={handleClose}>
          <Text
            size='xl'
            weight={600}
          >
            리뷰 포스트 작성하기
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ReviewForm />
          <ContentEditableDiv />
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

export default ReviewPostModal;
