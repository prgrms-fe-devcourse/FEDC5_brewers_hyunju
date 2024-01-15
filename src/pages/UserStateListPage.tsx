import { useCallback, useEffect, useState } from 'react';

import Container from '~/components/common/Container';
import UserStateListTemplate from '~/components/templates/UserStateListTemplate';

import useGetUsers from '~/hooks/api/users/useGetUsers';

import { UserType } from '~/types/common';

export interface UserStateListPagePropsType {
  userList: UserType[];
}

const UserStateListPage = () => {
  const [onlineUser, setOnlineUser] = useState<UserType[]>([]);
  const [offlineUser, setOfflineUser] = useState<UserType[]>([]);

  const { handleGetUsers, status, data } = useGetUsers();

  const divideOnlineOfflineUserList = useCallback(() => {
    const online = data ? data.filter((user) => user.isOnline) : [];
    const offline = data ? data.filter((user) => !user.isOnline) : [];
    setOnlineUser([...online]);
    setOfflineUser([...offline]);
  }, [data]);

  useEffect(() => {
    handleGetUsers();
  }, []);

  useEffect(() => {
    if (status === 'success') {
      divideOnlineOfflineUserList();
    }
  }, [status, divideOnlineOfflineUserList]);

  return (
    <Container maxWidth='sm'>
      <UserStateListTemplate
        onlineUserList={onlineUser}
        offlineUserList={offlineUser}
        status={status}
      />
    </Container>
  );
};
export default UserStateListPage;
