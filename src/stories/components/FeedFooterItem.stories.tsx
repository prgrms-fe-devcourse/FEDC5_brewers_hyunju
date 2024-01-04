import FeedFooterItem, {
  FeedFooterItemPropTypes,
} from '~/components/feed/FeedFooterItem';

export default {
  title: 'Component/FeedFooterItem',
  component: FeedFooterItem,
  argTypes: {
    iconImg: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    title: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    count: {
      control: {
        type: 'number',
      },
    },
  },
};

export const Default = (args: FeedFooterItemPropTypes) => {
  return <FeedFooterItem {...args}></FeedFooterItem>;
};

Default.args = {
  iconImg: '',
  title: '좋아요',
  count: 34,
};
