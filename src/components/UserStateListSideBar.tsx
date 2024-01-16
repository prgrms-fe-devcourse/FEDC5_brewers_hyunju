import { useEffect } from 'react';

import UserStateListTemplate from '~/components/templates/UserStateListTemplate';

import useGetOnlineUsers from '~/hooks/api/users/useGetOnlineUsers';
import useGetUsers from '~/hooks/api/users/useGetUsers';

import { UserType } from '~/types/common';

export interface UserStateListSideBarPropsType {
  userList: UserType[];
}

const UserStateListSideBar = () => {
  const allUsers = useGetUsers();
  const onlineUsers = useGetOnlineUsers();

  useEffect(() => {
    allUsers.handleGetUsers();
    onlineUsers.handleGetOnlineUsers();

    const timer = setInterval(() => {
      onlineUsers.handleGetOnlineUsers();
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <UserStateListTemplate
      allUsers={allUsers.data}
      onlineUserList={onlineUsers.data}
    />
  );
};
export default UserStateListSideBar;
