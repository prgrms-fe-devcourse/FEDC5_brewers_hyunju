import React from 'react';
import styled from 'styled-components';
import UserListItem, { UserListItemPropsType } from './UserListItem';

export interface UserListPropsType {
  users?: UserListItemPropsType[];
}
const UserList = ({ users }: UserListPropsType) => {
  return (
    <StyledUl>
      {users &&
        users.map(({ userId, userName, userImage, isFollowing }) => (
          <UserListItem
            key={userId}
            userId={userId}
            userName={userName}
            userImage={userImage}
            isFollowing={isFollowing}
          />
        ))}
    </StyledUl>
  );
};

export default UserList;

const StyledUl = styled.ul`
  flex-direction: column;
  align-items: center;

  padding: 1rem;
`;
