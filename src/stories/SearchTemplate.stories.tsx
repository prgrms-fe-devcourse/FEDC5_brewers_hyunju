import SearchTemplate, {
  SearchTemplatePropsType,
} from '~/components/SearchTemplate';

export default {
  title: 'Template/Search',
  component: [SearchTemplate],
  argTypes: {},
  args: {
    users: Array.from(Array(20)).map((_, idx) => {
      if (idx <= 10) {
        return {
          userImage: 'https://picsum.photos/200',
          userId: `tester_${idx}`,
          userName: `tester${idx}`,
          isFollowing: false,
        };
      } else {
        return {
          userImage: 'https://picsum.photos/200',
          userId: `tester_${idx}`,
          userName: `tester${idx}`,
          isFollowing: true,
        };
      }
    }),
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
  },
};

export const Template = (args: SearchTemplatePropsType) => {
  return <SearchTemplate {...args} />;
};
