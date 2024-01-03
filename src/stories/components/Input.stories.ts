import type { Meta, StoryObj } from '@storybook/react';

import Input from '~/components/input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Common/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Standard: Story = {
  args: {
    label: 'label text',
    labelFontSize: 'sm',
    labelFontWeight: 400,
    placeholder: 'placeholder',
    errorMessage: 'error message',
    errorMessageFontSize: 'sm',
    errorFontWeight: 400,
    labelFontColor: '--adaptive900',
    borderColor: '--adaptive900',
  },
};

export const Search: Story = {
  args: {
    placeholder: 'placeholder',
    labelFontColor: '--adaptive900',
  },
};

export const Post: Story = {
  args: {
    label: 'label text',
    labelFontSize: 'sm',
    labelFontWeight: 400,
    labelFontColor: '--adaptive900',
    borderColor: '--primaryColor',
  },
};
