import type { Meta, StoryObj } from '@storybook/react';
import Toast from '../components/Toast';
import ColorType from '~/types/design/color';

const meta: Meta<typeof Toast> = {
  title: 'Components/Common/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Standard: Story = {
  args: {
    text: '포스트를 삭제했어요',
    size: 'md',
    weight: 400,
    color: '--primaryColor' as ColorType,
    borderColor: '--primaryColor' as ColorType,
    progressBarColor: '--primaryColor' as ColorType,
    progressBarHeight: 1,
    time: 3000,
  },
};
