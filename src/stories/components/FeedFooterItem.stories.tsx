import FeedFooterItem, {
  FeedFooterItemPropTypes,
} from '~/components/feed/FeedFooterItem';

export default {
  title: 'Component/FeedFooterItem',
  component: FeedFooterItem,
  argTypes: {
    iconType: {
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
  iconType: 'like',
  title: '좋아요',
  count: 34,
};
