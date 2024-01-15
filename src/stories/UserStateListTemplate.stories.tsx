import UserStateListTemplate from '~/components/templates/UserStateListTemplate';
import { UserType } from '~/types/common';

export default {
  title: 'Template/UserStateListTemplate',
  component: UserStateListTemplate,
};

export const Default = () => {
  const onlineUser: UserType[] = [];
  const offlineUser: UserType[] = [];
  return (
    <UserStateListTemplate
      onlineUserList={onlineUser}
      offlineUserList={offlineUser}
      status={'success'}
    />
  );
};

export const Standard = () => {
  const onlineUser: UserType[] = [];
  const offlineUser: UserType[] = [];
  return (
    <UserStateListTemplate
      onlineUserList={onlineUser}
      offlineUserList={offlineUser}
      status={'success'}
    />
  );
};

export const Loading = () => {
  const onlineUser: UserType[] = [];

  const offlineUser: UserType[] = [];

  return (
    <UserStateListTemplate
      onlineUserList={onlineUser}
      offlineUserList={offlineUser}
      status={'loading'}
    />
  );
};
