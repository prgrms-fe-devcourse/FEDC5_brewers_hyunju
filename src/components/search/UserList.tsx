import styled from 'styled-components';
import UserListItem, { UserListItemPropsType } from './UserListItem';
import Text from '../common/Text';

export interface UserListPropsType {
  users?: UserListItemPropsType[];
}
const UserList = ({ users }: UserListPropsType) => {
  return (
    <StyledUl>
      {users && users.length ? (
        users.map(({ userId, userName, userImage, isFollowing }) => (
          <UserListItem
            key={userId}
            userId={userId}
            userName={userName}
            userImage={userImage}
            isFollowing={isFollowing}
          />
        ))
      ) : (
        <Text>검색 결과가 없습니다</Text>
      )}
    </StyledUl>
  );
};

export default UserList;

const StyledUl = styled.ul`
  flex-direction: column;
  align-items: center;
`;
