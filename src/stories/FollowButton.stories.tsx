import FollowButton, {
  FollowButtonPropsType,
} from '~/components/search/FollowButton';

export default {
  title: 'Component/FollowButton',
  component: FollowButton,
  argTypes: {
    isFollowing: { control: 'boolean' },
  },
  args: {
    isFollowing: false,
  },
};

export const Default = (args: FollowButtonPropsType) => {
  return <FollowButton {...args} />;
};
