import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IconPhoto } from '@tabler/icons-react';
import { mogakPostOpenState, postModalState } from '~/atoms/postModalState';
import ContentEditableDiv from '~/components/ContentEditableDiv';
import Input from '~/components/input/Input';
import Text from './Text';
import Modal from './Modal';
import Button from './Button';
import Flex from './Flex';
import PostButton from '../PostButton';

const MogakPostModal = () => {
  const setPostModalData = useSetRecoilState(postModalState);
  const isOpen = useRecoilValue(mogakPostOpenState);

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
              />
              <DateInput
                type='time'
                data-placeholder='시간 선택'
                required
                aria-required
              />
              <DateInput
                type='time'
                data-placeholder='시간 선택'
                required
                aria-required
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
            <Input
              placeholder='장소 이름이 무엇인가요?'
              onChange={() => {}}
            />
            <Input
              placeholder='주소가 어떻게 되나요?'
              onChange={() => {}}
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
  border-radius: 7px;

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
