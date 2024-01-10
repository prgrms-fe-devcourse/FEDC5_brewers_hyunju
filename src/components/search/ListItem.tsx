import { ReactNode } from 'react';
import styled from 'styled-components';
import Flex from '~/components/common/Flex';
import Avatar from '~/components/common/Avatar';
import FollowButton from './FollowButton';
import UserProfileBox from './UserProfileBox';

interface ListItemPropsType {
  children: ReactNode;
}
const ListItem = ({ children }: ListItemPropsType) => {
  return (
    <StyledFlex
      alignItems='center'
      p={1}
    >
      {children}
    </StyledFlex>
  );
};

ListItem.Avatar = Avatar;
ListItem.ProfileBox = UserProfileBox;
ListItem.FollowButton = FollowButton;
export default ListItem;

const StyledFlex = styled(Flex)`
  padding: 1rem;

  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: var(--adaptive200);
  }
`;
