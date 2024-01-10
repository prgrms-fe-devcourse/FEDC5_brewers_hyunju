import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';

export interface UserListItemPropsType {
  userImage: string;
  userId: string;
  userName: string;
  isFollowing: boolean;
}
const UserListItem = ({
  userImage,
  userId,
  userName,
  isFollowing,
}: UserListItemPropsType) => {
  const navigation = useNavigate();
  const handleAvatarClick = useCallback(() => {
    navigation(`/profile/${userId}`);
  }, [userId, navigation]);
  return (
    <ListItem>
      <ListItem.Avatar
        size='sm'
        handleClick={handleAvatarClick}
        src={userImage}
      />
      <ListItem.ProfileBox userName={userName} />
      <ListItem.FollowButton isFollowing={isFollowing} />
    </ListItem>
  );
};

export default UserListItem;
