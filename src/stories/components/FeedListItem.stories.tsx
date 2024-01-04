import FeedListItem, {
  FeedListItemPropTypes,
} from '~/components/feed/FeedListItem';

export default {
  title: 'Component/FeedListItem',
  component: FeedListItem,
  argTypes: {
    id: {
      type: { name: 'string' },
    },
    userId: {
      type: { name: 'string' },
    },
    profileImage: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },

    userName: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    date: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    content: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    imageUrl: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    likesCount: {
      type: { name: 'number' },
      control: {
        type: 'number',
      },
    },
    commentsCount: {
      type: { name: 'number' },
      control: {
        type: 'number',
      },
    },
  },
};

export const Default = (args: FeedListItemPropTypes) => {
  return <FeedListItem {...args}></FeedListItem>;
};

Default.args = {
  id: '1',
  userId: '123',
  profileImage: 'https://picsum.photos/200',
  userName: '주니모',
  date: '2024년 1월 4일 오후 10시 26분',
  content: '다그닥 다그닥',
  imageUrl: 'https://picsum.photos/400/200',
  likesCount: 23,
  commentsCount: 12,
};
