import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';

export interface UserListItemPropsType {
  userImage: string;
  userId: string;
  userName: string;
  isFollowing: boolean;
  followId?: string;
}
const UserListItem = ({
  userImage,
  userId,
  userName,
  isFollowing,
  followId,
}: UserListItemPropsType) => {
  const navigation = useNavigate();
  const handleClick = useCallback(() => {
    navigation(`/profile/${userId}`);
  }, [userId, navigation]);
  return (
    <ListItem>
      <ListItem.Avatar
        userId={userId}
        size='sm'
        src={userImage}
      />
      <ListItem.ProfileBox
        userName={userName}
        handleClick={handleClick}
      />
      <ListItem.FollowButton
        userId={userId}
        followId={followId}
        isFollowing={isFollowing}
      />
    </ListItem>
  );
};

export default UserListItem;
