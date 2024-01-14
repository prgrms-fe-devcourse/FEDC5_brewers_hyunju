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

export const Standard: Story = {
  args: {
    size: 1,
    time: 2,
    stroke: 0.25,
    color: '--primaryColor',
    backgroundColor: '--adaptive300',
  },
};
