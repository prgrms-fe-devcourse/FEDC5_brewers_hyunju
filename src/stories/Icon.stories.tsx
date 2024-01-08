import { IconUser, IconHome } from '@tabler/icons-react';

export default {
  title: 'Component/Icon',
  component: [IconUser, IconHome],
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number', min: 8, max: 64, step: 1 } },
    color: { control: 'text' },
    stroke: { control: { type: 'number', min: 1, max: 3, step: 0.5 } },
  },
  args: {
    size: 24,
    color: 'currentColor',
    stroke: 2,
  },
};

export const User = (args: typeof IconUser) => {
  return <IconUser {...args} />;
};
export const Home = (args: typeof IconHome) => {
  return <IconHome {...args} />;
};
