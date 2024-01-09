import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IconPhoto } from '@tabler/icons-react';
import { postModalState } from '~/atoms/postModalState';
import ContentEditableDiv from '~/components/ContentEditableDiv';
import Input from '~/components/input/Input';
import Text from './Text';
import Modal from './Modal';
import Button from './Button';
import Flex from './Flex';
import usePostContent from '~/hooks/usePostContent';

const MogakPostModal = () => {
  const setPostModalData = useSetRecoilState(postModalState);

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

export default MogakPostModal;
const RoundButton = styled(Button)`
  border-radius: 40px;
`;
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
