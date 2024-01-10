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
  },
};

export const Template = (args: SearchTemplatePropsType) => {
  return <SearchTemplate {...args} />;
};
