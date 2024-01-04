import PostCommentListItem, {
  PostCommentListItemPropsType,
} from '~/components/postComment/PostCommentListItem';

export default {
  title: 'Component/PostCommentListItem',
  component: PostCommentListItem,
  tags: ['autodocs'],
  argTypes: {
    userName: { control: 'string' },
    time: { control: 'string' },
    message: { control: 'string' },
    handleClick: { control: 'function' },
  },
  args: {
    userName: '사용자 이름',
    time: '12:10',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    handleClick: () => {
      alert('hello');
    },
  },
};

export const Default = (args: PostCommentListItemPropsType) => {
  return (
    <div>
      <PostCommentListItem
        {...args}
        avatarSrc='https://picsum.photos/200'
      />
    </div>
  );
};
