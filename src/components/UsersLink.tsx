import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { TabsActionContext } from './common/Tabs/TabsProvider';
import Text from './common/Text';
import Flex from './common/Flex';

const UsersLink = () => {
  const setSelectedId = useContext(TabsActionContext);
  const [, setSearchParams] = useSearchParams();
  return (
    <StyledFlex
      alignItems='center'
      justifyContent='center'
    >
      <Text
        size='sm'
        color='--secondaryColor'
        onClick={() => {
          setSearchParams((prev) => {
            prev.set('type', 'users');
            return prev;
          });
          setSelectedId!(1);
        }}
      >
        더 보기
      </Text>
    </StyledFlex>
  );
};

export default UsersLink;

const StyledFlex = styled(Flex)`
  padding: 1rem;

  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: var(--adaptive200);
  }
`;
