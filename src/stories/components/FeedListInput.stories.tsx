import FeedListInput, {
  FeedListInputPropsType,
} from '~/components/feed/FeedListInput';

export default {
  title: 'Component/FeedListInput',
  component: FeedListInput,
  argTypes: {
    userId: {
      type: { name: 'string' },
    },
    profileImage: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = (args: FeedListInputPropsType) => {
  return <FeedListInput {...args}></FeedListInput>;
};

Default.args = {
  userId: '123',
  profileImage: 'https://picsum.photos/200',
};
