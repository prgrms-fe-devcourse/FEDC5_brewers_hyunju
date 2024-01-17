import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { IconPhoto } from '@tabler/icons-react';
import ContentEditableDiv from '~/components/ContentEditableDiv';
import Text from '~/components/common/Text';
import Modal from '~/components/common/Modal';
import Button from '~/components/common/Button';
import Flex from '~/components/common/Flex';
import PostButton from '~/components/PostButton';
import { postModalState } from '~/recoil/postModal/atoms';
import { mogakPostOpenState } from '~/recoil/postModal/selectors';

const MogakPostModal = () => {
  const setPostModal = useSetRecoilState(postModalState);
  const isOpen = useRecoilValue(mogakPostOpenState);
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
            모각코 모집 포스트 작성하기
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Wrapper>
            <Text
              size='lg'
              weight={600}
            >
              언제 모이나요?
            </Text>
            <StyledFlex
              justifyContent='space-evenly'
              alignItems='center'
            >
              <DateInput
                type='date'
                data-placeholder='날짜 선택'
                required
                aria-required
                onChange={(e) => {
                  e.preventDefault();
                  setPostModal((prev) => ({
                    ...prev,
                    mogakForm: { ...prev.mogakForm, date: e.target.value },
                  }));
                }}
              />
              <DateInput
                type='time'
                data-placeholder='시작 시간'
                required
                aria-required
                onChange={(e) => {
                  e.preventDefault();
                  setPostModal((prev) => ({
                    ...prev,
                    mogakForm: { ...prev.mogakForm, startTime: e.target.value },
                  }));
                }}
              />
              <DateInput
                type='time'
                data-placeholder='종료 시간'
                required
                aria-required
                onChange={(e) => {
                  e.preventDefault();
                  setPostModal((prev) => ({
                    ...prev,
                    mogakForm: { ...prev.mogakForm, endTime: e.target.value },
                  }));
                }}
              />
            </StyledFlex>
          </Wrapper>
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
                  mogakForm: { ...prev.mogakForm, placeName: e.target.value },
                }));
              }}
            />
            <input
              placeholder='주소가 어떻게 되나요?'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPostModal((prev) => ({
                  ...prev,
                  mogakForm: { ...prev.mogakForm, address: e.target.value },
                }));
              }}
            />
          </Wrapper>
          <Wrapper>
            <Text
              size='lg'
              weight={600}
            >
              몇명까지 생각하고 계신가요?
            </Text>
            <input
              placeholder='장소 이름이 무엇인가요?'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPostModal((prev) => ({
                  ...prev,
                  mogakForm: { ...prev.mogakForm, maxCount: e.target.value },
                }));
              }}
            />
          </Wrapper>
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

export default MogakPostModal;

const Wrapper = styled.div`
  box-sizing: border-box;
`;

const DateInput = styled.input`
  padding: 15px 5px;
  outline: none;
  border: none;
  border-radius: var(--radius-sm);

  color: var(--adaptive950);

  &::before {
    width: 100%;
    content: attr(data-placeholder);
  }

  &::after {
    margin: 0;
    content: '';
  }
`;

const StyledFlex = styled(Flex)`
  margin: 40px 0;
`;
