import type { Meta, StoryObj } from '@storybook/react';

import CircleLoading from '~/components/loading/CircleLoading';

const meta: Meta<typeof CircleLoading> = {
  title: 'Components/Common/CircleLoading',
  component: CircleLoading,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CircleLoading>;

export const Standard: Story = {
  args: {
    size: 7.5,
    time: 2,
    strokeWidth: 12,
    primaryColor: '--primaryColor',
    secondaryColor: '--adaptive300',
  },
};
