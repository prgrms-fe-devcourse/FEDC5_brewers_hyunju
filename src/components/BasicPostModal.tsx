import { useState, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import sanitizeHtml from 'sanitize-html';
import { IconPhoto } from '@tabler/icons-react';
import styled from 'styled-components';
import Modal from '~/components/common/Modal';
import Text from '~/components/common/Text';
import Avatar from '~/components/common/Avatar';
import Flex from '~/components/common/Flex';
import Button from '~/components/common/Button';
import { postModalState } from '~/atoms/postModalState';

// TODO: 렌더링 최적화, contentEditable XSS 보호
const BasicPostModal = () => {
  const setPostModal = useSetRecoilState(postModalState);
  const [content, setContent] = useState('');

  const sanitize = useCallback((html: string) => {
    const sanitizeConfig = {
      allowedTags: ['p', 'div'],
      allowedAttributes: { a: ['href'] },
    };

    return sanitizeHtml(html, sanitizeConfig);
  }, []);

  const handleBlur = useCallback(() => {
    setContent((prev) => sanitize(prev));
  }, [sanitize]);

  const handleInput = useCallback((e: React.FormEvent) => {
    setContent(e.currentTarget.innerHTML);
  }, []);
  return (
    <Modal
      handleClose={() => setPostModal((prev) => ({ ...prev, isOpen: false }))}
      visible
    >
      <Modal.Page>
        <Modal.Header
          handleClose={() =>
            setPostModal((prev) => ({ ...prev, isOpen: false }))
          }
        >
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
            <ContentWrapper>
              <Content
                contentEditable
                spellCheck
                onBlur={handleBlur}
                onInput={handleInput}
              />
            </ContentWrapper>
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

export default BasicPostModal;

const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
`;
const Content = styled.div`
  display: block;

  height: 100%;
  outline: none;

  background-color: var(--transparent);

  color: var(--adaptive950);
  font-size: 1.25rem;
  line-height: 40px;
  white-space: pre-wrap;

  font-family: inherit;
  user-select: text;
  word-break: break-word;

  &:empty {
    &::before {
      color: var(--adaptive400);
      content: '오늘의 카공은 어떠신가요?';
    }
  }
`;

const RoundButton = styled(Button)`
  border-radius: 40px;
`;
