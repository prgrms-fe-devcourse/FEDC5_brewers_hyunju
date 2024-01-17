import PostTemplate, {
  PostTemplatePropsType,
} from '~/components/templates/PostTemplate';

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
    comments: [
      {
        _id: '0',
        comment: '내용입니다',
        author: {
          image: 'https://picsum.photos/400/200',
          fullName: '사용자1',
        },
        post: '1', // 포스트 id
        createdAt: '2024년 1월 15일 오전 02시 26분',
        updatedAt: '2024년 1월 15일 오전 02시 26분',
      },
      {
        _id: '1',
        comment: '내용입니다22',
        author: {
          image: 'https://picsum.photos/400/200',
          fullName: '사용자2',
        },
        post: '1', // 포스트 id
        createdAt: '2024년 1월 15일 오전 02시 28분',
      },
    ],
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
