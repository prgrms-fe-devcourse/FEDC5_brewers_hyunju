import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { IconX } from '@tabler/icons-react';
import { FONT_SIZE } from '~/constants/design';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState<string>(searchParams.get('q') || '');
  return (
    <Wrapper ref={wrapperRef}>
      <SearchInput
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
        placeholder='검색'
        onFocus={() => wrapperRef.current?.classList.add('focus')}
        onBlur={() => wrapperRef.current?.classList.remove('focus')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setSearchParams((prev) => {
              prev.set('q', input);
              return prev;
            });
            // handleSearch({
            //   url: `/search/${searchType}/${input}`,
            // });
          }
        }}
      />
      {input.length > 0 && (
        <CloseButton
          onClick={() => {
            setInput('');
          }}
        >
          <IconX
            size={8}
            color={'var(--adaptive200)'}
          />
        </CloseButton>
      )}
    </Wrapper>
  );
};
export default SearchBar;

const Wrapper = styled.div`
  position: relative;

  max-width: 60%;
  padding: 0.625rem 0.9375rem;
  border: solid 0.0938rem var(--transparent);
  border-radius: 0.4375rem;

  background-color: var(--adaptive200);

  font-size: ${FONT_SIZE['md']};

  box-sizing: border-box;

  &.focus {
    border-color: var(--secondaryColor);
  }
`;
const SearchInput = styled.input`
  width: calc(100% - 22px);
  outline: none;
  border: none;

  background-color: transparent;

  color: var(--adaptive950);

  &::placeholder {
    color: var(--adaptive500);
  }
`;
const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 10px;

  width: 12px;
  height: 12px;
  padding: 0;
  padding-top: 0.5px;
  padding-left: 0.6px;
  border: none;
  border-radius: 50%;

  background-color: var(--adaptive500);

  box-sizing: border-box;
  cursor: pointer;

  transform: translateY(-50%);
`;
