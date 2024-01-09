import PostCommentListItem, {
  PostCommentListItemPropsType,
} from '~/components/postComment/PostCommentListItem';

export default {
  title: 'Component/PostCommentListItem',
  component: PostCommentListItem,
  tags: ['autodocs'],
  argTypes: {
    userName: { control: 'string' },
    createdAt: { control: 'string' },
    updatedAt: { control: 'string' },
    message: { control: 'string' },
    handleClick: { control: 'function' },
  },
  args: {
    userName: '사용자 이름',
    createdAt: '9:00',

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

export const Modified = (args: PostCommentListItemPropsType) => {
  return (
    <div>
      <PostCommentListItem
        {...args}
        updatedAt='12:30'
        avatarSrc='https://picsum.photos/200'
      />
    </div>
  );
};
