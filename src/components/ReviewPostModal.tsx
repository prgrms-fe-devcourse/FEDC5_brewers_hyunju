import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IconPhoto } from '@tabler/icons-react';
import { postModalState } from '~/atoms/postModalState';
import Modal from '~/components/common/Modal';
import Text from '~/components/common/Text';
import ReviewForm from './ReviewForm';
import Button from '~/components/common/Button';
import ContentEditableDiv from './ContentEditableDiv';
import usePostContent from '~/hooks/usePostContent';

// TODO: usePostContent를 ContentEditableDiv 안으로 넣기
const ReviewPostModal = () => {
  const setPostModalData = useSetRecoilState(postModalState);
  // const [postModalData, setPostModalData] = useRecoilState(postModalState);
  const { content, handleBlur, handleInput } = usePostContent();
  return (
    <Modal
      // {postModalData.isOpen && postModalData.type === 'review'}
      visible
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
          <ContentEditableDiv
            handleBlur={handleBlur}
            handleInput={handleInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='text'
            size='sm'
            color='--primaryColor'
          >
            <IconPhoto size={30} />
          </Button>
          <RoundButton
            disabled={content ? false : true}
            variant='filled'
            color='--primaryColor'
            size='md'
            onClick={() => alert(`${content}`)}
          >
            작성
          </RoundButton>
        </Modal.Footer>
      </Modal.Page>
    </Modal>
  );
};

export default ReviewPostModal;

const RoundButton = styled(Button)`
  border-radius: 40px;
`;
