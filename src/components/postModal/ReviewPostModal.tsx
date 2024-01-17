import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { IconPhoto } from '@tabler/icons-react';
import Modal from '~/components/common/Modal';
import Text from '~/components/common/Text';
import ReviewForm from '~/components/ReviewForm';
import Button from '~/components/common/Button';
import ContentEditableDiv from '~/components/ContentEditableDiv';
import PostButton from '~/components/PostButton';
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
          <Wrapper>
            <Text
              size='lg'
              weight={600}
            >
              어디서 모이나요?
            </Text>
            <input
              placeholder='장소 이름이 무엇인가요?'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPostModal((prev) => ({
                  ...prev,
                  reviewForm: { ...prev.reviewForm, placeName: e.target.value },
                }));
              }}
            />
            <input
              placeholder='주소가 어떻게 되나요?'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPostModal((prev) => ({
                  ...prev,
                  reviewForm: { ...prev.reviewForm, address: e.target.value },
                }));
              }}
            />
          </Wrapper>
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

const Wrapper = styled.div`
  box-sizing: border-box;
`;
