import type { Meta, StoryObj } from '@storybook/react';
import CircleLoading from '~/components/loading/CircleLoading';

const meta: Meta<typeof CircleLoading> = {
  title: 'Component/CircleLoading',
  component: CircleLoading,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CircleLoading>;

export const Small: Story = {
  args: {
    size: 'sm',
    color: '--primaryColor',
    backgroundColor: '--adaptive300',
  },
};

export const Large: Story = {
  args: {
    size: 'md',
    color: '--primaryColor',
    backgroundColor: '--adaptive300',
  },
};
