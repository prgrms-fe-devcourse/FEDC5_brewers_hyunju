import UserListItem, {
  UserListItemPropsType,
} from '~/components/search/UserListItem';

export default {
  title: 'Component/UserListItem',
  component: UserListItem,
  argTypes: {
    userImage: { control: 'text' },
    userId: { control: 'text' },
    userName: { control: 'text' },
    isFollowing: { control: 'boolean' },
  },
  args: {
    userImage: '',
    userId: 'admin5001-dummy-id',
    userName: 'Admin5001',
    isFollowing: false,
  },
};

export const Default = (args: UserListItemPropsType) => {
  return <UserListItem {...args} />;
};
