import { ReactNode } from 'react';
import styled from 'styled-components';
import Flex from '~/components/common/Flex';
import Avatar from '~/components/common/Avatar';
import FollowButton from './FollowButton';
import UserProfileBox from './UserProfileBox';

interface ListItemPropsType {
  children: ReactNode;
  handleClick?: () => void;
  gap?: number;
  justifyContent?: string;
}
const ListItem = ({
  children,
  handleClick,
  gap,
  justifyContent,
}: ListItemPropsType) => {
  return (
    <StyledFlex
      alignItems='center'
      p={1}
      gap={gap}
      onClick={handleClick && handleClick}
      justifyContent={justifyContent}
      style={handleClick ? { cursor: 'pointer' } : { cursor: 'default' }}
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
  padding: var(--padding-lg);

  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: var(--adaptive200);
  }
`;
