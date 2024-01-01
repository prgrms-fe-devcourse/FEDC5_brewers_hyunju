import type { Meta, StoryObj } from '@storybook/react';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';

const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  argTypes: {
    direction: { control: 'select', options: ['row', 'column'] },
    wrap: { control: 'select', options: ['wrap', 'nowrap'] },
    alignContent: {
      control: 'select',
      options: [
        'space-around',
        'space-between',
        'space-evenly',
        'stretch',
        'center',
        'end',
        'flex-end',
        'flex-start',
        'start',
        'baseline',
        'normal',
      ],
    },
    alignItems: {
      control: 'select',
      options: [
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
        'baseline',
        'normal',
        'stretch',
      ],
    },
    justifyContent: {
      control: 'select',
      options: [
        'space-around',
        'space-between',
        'space-evenly',
        'stretch',
        'center',
        'end',
        'flex-end',
        'flex-start',
        'start',
        'left',
        'normal',
        'right',
      ],
    },
    gap: { control: 'text' },
    m: { control: 'text' },
    mx: { control: 'text' },
    my: { control: 'text' },
    mt: { control: 'text' },
    mb: { control: 'text' },
    ml: { control: 'text' },
    mr: { control: 'text' },
    p: { control: 'text' },
    px: { control: 'text' },
    py: { control: 'text' },
    pt: { control: 'text' },
    pb: { control: 'text' },
    pl: { control: 'text' },
    pr: { control: 'text' },
  },
  args: {
    children: [
      <Text>1</Text>,
      <Text>2</Text>,
      <Text>3</Text>,
      <Text>4</Text>,
      <Text>5</Text>,
    ],
  },
};
