import type { Meta, StoryObj } from '@storybook/react';
import Text from '~/components/common/Text';
import {
  COLOR,
  FONT_SIZE_UNIT,
  FONT_WEIGHT_UNIT,
  LINE_HEIGHT_UNIT,
} from '~/constants/design';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  argTypes: {
    size: {
      control: 'inline-radio',
      options: FONT_SIZE_UNIT,
    },
    height: { control: 'inline-radio', options: LINE_HEIGHT_UNIT },
    weight: { control: 'inline-radio', options: FONT_WEIGHT_UNIT },
    color: { control: 'select', options: COLOR },
    children: { control: 'text' },
    m: { control: 'text' },
    mx: { control: 'text' },
    my: { control: 'text' },
    mt: { control: 'text' },
    mb: { control: 'text' },
    ml: { control: 'text' },
    mr: { control: 'text' },
  },
  args: {
    size: 'md',
    height: 100,
    weight: 400,
    color: '--blue500',
    children: '테스트',
  },
};
