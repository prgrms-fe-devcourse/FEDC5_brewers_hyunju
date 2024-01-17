import { useEffect } from 'react';
import UserStateListTemplate from '~/components/templates/UserStateListTemplate';
import useGetOnlineUsers from '~/hooks/api/users/useGetOnlineUsers';
import { UserType } from '~/types/common';

export interface UserStateListSideBarPropsType {
  userList: UserType[];
}

const UserStateListSideBar = () => {
  const onlineUsers = useGetOnlineUsers();

  useEffect(() => {
    onlineUsers.handleGetOnlineUsers();

    const timer = setInterval(() => {
      onlineUsers.handleGetOnlineUsers();
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <UserStateListTemplate onlineUserList={onlineUsers.data} />;
};
export default UserStateListSideBar;
