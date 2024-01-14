import { PostTemplatePropsType } from '~/components/templates/PostTemplate';
import PostTemplate from '~/components/templates/PostTemplate';

export default {
  title: 'Component/PostTemplate',
  component: PostTemplate,
  argTypes: {},
  args: {},
};

export const Default = (args: PostTemplatePropsType) => {
  return <PostTemplate {...args}></PostTemplate>;
};

Default.args = {
  post: {
    _id: '1',
    createdAt: '2024년 1월 4일 오후 10시 26분',
    updatedAt: '2024년 1월 7일 오후 7시 04분',
    image: 'https://picsum.photos/400/200',
    likes: [],
    comments: [],
    title: {
      type: 'common',
      title: 'string',
      workingSpot: 'cafe',
      body: {
        text: '하하',
      },
    },
    author: {
      image: 'https://picsum.photos/400/200',
      fullName: '이름',
    },
  },
};
