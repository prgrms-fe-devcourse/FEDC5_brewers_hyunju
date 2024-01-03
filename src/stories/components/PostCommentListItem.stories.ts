import type { Meta, StoryObj } from '@storybook/react';

import PostCommentListItem from '~/components/postComment/PostCommentListItem';

const meta: Meta<typeof PostCommentListItem> = {
  title: 'Components/Common/PostCommentListItem',
  component: PostCommentListItem,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof PostCommentListItem>;

export const Default: Story = {
  args: {
    userName: '사용자 이름',
    userNameSize: 'sm',
    userNameWeight: 600,
    time: '12:30',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. ',
    messageSize: 'sm',
    messageWeight: 400,
    avatar: '',
  },
};
