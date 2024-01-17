import UserStateListItem, {
  UserStateListItemPropsType,
} from '~/components/userListItem/UserStateListItem';

export default {
  title: 'Component/UserStateListItem',
  component: UserStateListItem,
  argTypes: {
    src: { control: { type: 'text' } },
    fullName: { control: { type: 'text' } },
    isOnline: { control: { type: 'boolean' } },
  },
  args: {
    isOnline: false,
    src: 'https://picsum.photos/200',
    fullName: 'user-name',
  },
};

export const Default = (args: UserStateListItemPropsType) => {
  return <UserStateListItem {...args} />;
};
