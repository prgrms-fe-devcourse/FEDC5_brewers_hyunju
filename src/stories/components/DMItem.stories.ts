import type { Meta, StoryObj } from '@storybook/react';
import DMItem from '~/components/directMessage/DMItem';

const meta: Meta<typeof DMItem> = {
  title: 'Component/DMItem',
  component: DMItem,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DMItem>;

export const Default: Story = {
  args: {
    userName: '사용자',
    message: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
    size: 'lg',
    src: 'https://picsum.photos/200',
  },
};
