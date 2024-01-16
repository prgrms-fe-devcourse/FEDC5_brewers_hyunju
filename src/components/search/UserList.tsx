import styled from 'styled-components';
import UserListItem from './UserListItem';
import Text from '~/components/common/Text';
import { UserSearchData } from '~/pages/SearchPage';

export interface UserListPropsType {
  users?: UserSearchData[];
}
const UserList = ({ users }: UserListPropsType) => {
  return (
    <StyledUl>
      {users && users.length ? (
        users.map(({ userId, userName, userImage, isFollowing, followId }) => (
          <UserListItem
            key={userId}
            userId={userId}
            userName={userName}
            userImage={userImage}
            isFollowing={isFollowing}
            followId={followId}
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
