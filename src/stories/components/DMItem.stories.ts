import type { Meta, StoryObj } from '@storybook/react';
import DMItem from '~/components/directMessage/DMItem';

const meta: Meta<typeof DMItem> = {
  title: 'Components/Common/DMItem',
  component: DMItem,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DMItem>;

export const Default: Story = {
  args: {
    userName: '사용자',
    userNameSize: 'md',
    userNameWeight: 600,
    userNameColor: '--adaptive900',
    message: `Lorem ipsum, dolor sit amet consectetur adipisicing elit`,
    messageSize: 'md',
    messageWeight: 400,
    messageColor: '--adaptive900',
    borderColor: '--primaryColor',
    avatar: '',
  },
};

export const Standard: Story = {
  args: {
    userName: '사용자',
    userNameSize: 'md',
    userNameWeight: 600,
    userNameColor: '--adaptive900',
    message: `Lorem ipsum, dolor sit amet consectetur adipisicing elit`,
    messageSize: 'md',
    messageWeight: 400,
    messageColor: '--adaptive900',
    borderColor: '--primaryColor',
    alertColor: '--red600',
    alertCount: 100,
    avatar: 'avatar',
  },
};
