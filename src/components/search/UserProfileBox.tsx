import styled from '@emotion/styled';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

export interface UserProfileBoxPropsType {
  userName: string;
  handleClick: () => void;
}
const UserProfileBox = ({ userName, handleClick }: UserProfileBoxPropsType) => {
  return (
    <StyledFlex
      direction='column'
      justifyContent='flex-start'
    >
      <Text
        color='--adaptive950'
        weight={600}
        size='sm'
        style={{ cursor: 'pointer' }}
        onClick={handleClick}
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
