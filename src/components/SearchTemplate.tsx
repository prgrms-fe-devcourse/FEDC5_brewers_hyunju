import React from 'react';
import styled from '@emotion/styled';
import Container from './common/Container';
import Text from './common/Text';
import { PostType, UserType } from '~/types/common';
import SearchBar from './search/SearchBar';

export interface SearchTemplatePropsType {
  users?: UserType[];
  posts?: PostType[];
}

const SearchTemplate = () => {
  return (
    <SearchContainer maxWidth='md'>
      <Text
        size='3xl'
        weight={800}
      >
        검색
      </Text>
      <SearchBar />
    </SearchContainer>
  );
};

export default SearchTemplate;

const SearchContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;
