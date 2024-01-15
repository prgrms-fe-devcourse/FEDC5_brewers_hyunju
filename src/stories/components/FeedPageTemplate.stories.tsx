import FeedPageTemplate, {
  FeedPageTemplatePropsType,
} from '~/components/FeedPageTemplate';

export default {
  title: 'Component/FeedPageTemplate',
  component: FeedPageTemplate,
  argTypes: {},
};

export const Default = (args: FeedPageTemplatePropsType) => {
  return <FeedPageTemplate {...args}></FeedPageTemplate>;
};

Default.args = {
  posts: Array.from(Array(10)).map((_, idx) => ({
    id: `post_${idx}`,
    userId: `user_id`,
    profileImage: 'https://picsum.photos/200',
    imageUrl: 'https://picsum.photos/500/300',
    userName: `tester${idx}`,
    createdAt: '2024-01-11',
    updatedAt: '2024-01-11',
    content: 'test post content',
    likesCount: 53,
    commentsCount: 33,
    onFeedClick: () => {},
    onUserClick: () => {},
  })),
};
