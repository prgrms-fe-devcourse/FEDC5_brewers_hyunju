import styled from '@emotion/styled';
import { IconX } from '@tabler/icons-react';
import { FONT_SIZE } from '~/constants/design';

const SearchBar = () => {
  return (
    <Wrapper>
      <SearchInput placeholder='검색' />
      <CloseButton>
        <IconX
          size={8}
          color={'var(--adaptive200)'}
        />
      </CloseButton>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  position: relative;

  max-width: 50%;
  padding: 0.4375rem 0.875rem;
  border-radius: 0.4375rem;

  background-color: var(--adaptive200);

  font-size: ${FONT_SIZE['md']};

  box-sizing: border-box;
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

  transform: translateY(-50%);
`;
