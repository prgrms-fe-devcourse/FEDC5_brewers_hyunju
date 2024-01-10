import React from 'react';
import styled from 'styled-components';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

export interface UserProfileBoxPropsType {
  userName: string;
}
const UserProfileBox = ({ userName }: UserProfileBoxPropsType) => {
  return (
    <StyledFlex
      direction='column'
      justifyContent='flex-start'
    >
      <Text
        color='--adaptive950'
        weight={600}
        size='sm'
      >
        {userName}
      </Text>
    </StyledFlex>
  );
};

export default UserProfileBox;

const StyledFlex = styled(Flex)`
  flex-grow: 1;
  padding: 1rem;
`;
