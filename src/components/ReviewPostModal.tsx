import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IconPhoto } from '@tabler/icons-react';
import { postModalState, reviewPostOpenState } from '~/atoms/postModalState';
import Modal from '~/components/common/Modal';
import Text from '~/components/common/Text';
import ReviewForm from './ReviewForm';
import Button from '~/components/common/Button';
import ContentEditableDiv from './ContentEditableDiv';
import PostButton from './PostButton';

const ReviewPostModal = () => {
  const setPostModalData = useSetRecoilState(postModalState);
  const isOpen = useRecoilValue(reviewPostOpenState);
  return (
    <Modal
      visible={isOpen}
      handleClose={() =>
        setPostModalData((prev) => ({ ...prev, isOpen: false }))
      }
    >
      <Modal.Page>
        <Modal.Header
          handleClose={() =>
            setPostModalData((prev) => ({ ...prev, isOpen: false }))
          }
        >
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
