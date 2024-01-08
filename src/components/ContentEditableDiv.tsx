import React from 'react';
import styled from 'styled-components';

interface ContentEditableDivPropsType {
  handleBlur: () => void;
  handleInput: (e: React.FormEvent) => void;
}
const ContentEditableDiv = ({
  handleBlur,
  handleInput,
}: ContentEditableDivPropsType) => {
  return (
    <ContentWrapper>
      <Content
        contentEditable
        spellCheck
        onBlur={handleBlur}
        onInput={handleInput}
      />
    </ContentWrapper>
  );
};

export default ContentEditableDiv;

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
