import { useEffect } from 'react';

import UserStateListTemplate from '~/components/templates/UserStateListTemplate';
import useGetUsers from '~/hooks/api/users/useGetUsers';

import { UserType } from '~/types/common';

export interface UserStateListSideBarPropsType {
  userList: UserType[];
}

const UserStateListSideBar = () => {
  const AllUsers = useGetUsers();
  useEffect(() => {
    AllUsers.handleGetUsers();
  }, []);
  return <UserStateListTemplate AllUsers={AllUsers.data} />;
};
export default UserStateListSideBar;
