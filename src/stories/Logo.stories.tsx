import Logo, { LogoPropsType } from '~/components/common/Logo';

export default {
  title: 'Component/Logo',
  component: Logo,
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
      options: ['normal', 'simple'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    type: 'normal',
    size: 'md',
  },
};

export const Default = (args: LogoPropsType) => {
  return (
    <Logo
      {...args}
      handleClick={() => alert('로고')}
    />
  );
};
