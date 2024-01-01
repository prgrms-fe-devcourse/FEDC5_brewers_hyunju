import type { Meta, StoryObj } from '@storybook/react';
import Container from '~/components/common/Container';
import { CONTAINER_SIZE_UNIT } from '~/constants/design';

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Primary: Story = {
  argTypes: {
    maxWidth: { control: 'inline-radio', options: CONTAINER_SIZE_UNIT },
    children: { control: 'text' },
    p: { control: 'text' },
    px: { control: 'text' },
    py: { control: 'text' },
    pt: { control: 'text' },
    pb: { control: 'text' },
    pl: { control: 'text' },
    pr: { control: 'text' },
  },
  args: {
    maxWidth: 'md',
    children: '테스트',
  },
};
