import UserProfileBox, {
  UserProfileBoxPropsType,
} from '~/components/search/UserProfileBox';

export default {
  title: 'Component/UserProfileBox',
  component: UserProfileBox,
  argTypes: {
    userName: { control: 'text' },
  },
  args: {
    userName: 'Admin5001',
  },
};

export const Default = (args: UserProfileBoxPropsType) => {
  return <UserProfileBox {...args} />;
};
