import { ChangeEvent } from 'react';
import styled from '@emotion/styled';

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
      content: '무엇을 하고 계신가요?';
    }
  }
`;

export interface FeedContentEditablePropsType {
  onChange: (e: ChangeEvent<HTMLDivElement>) => void;
  content?: string;
}

const FeedContentEditable = ({
  onChange,
  content,
}: FeedContentEditablePropsType) => {
  return (
    <ContentWrapper>
      <Content
        contentEditable
        spellCheck
        onInput={(e: ChangeEvent<HTMLDivElement>) => {
          onChange(e);
        }}
      ></Content>
    </ContentWrapper>
  );
};

export default FeedContentEditable;
