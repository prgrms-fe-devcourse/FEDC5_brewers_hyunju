import Avatar, { AvatarPropsType } from '~/components/common/Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
  argTypes: {
    lazy: {
      control: { type: 'boolean' },
    },
    threshold: {
      type: { name: 'number' },
      control: { type: 'number' },
    },
    src: {
      type: { name: 'string', require: true },
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    alt: {
      control: 'text',
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'lg'],
      control: { type: 'inline-radio' },
    },
    hoverColor: {
      control: 'text',
    },
  },
  args: {
    src: 'https://picsum.photos/200',
    threshold: 0.5,
    size: 'lg',
    handleClick: () => {
      alert('프로필 페이지 이동');
    },
  },
};

export const Small = (args: AvatarPropsType) => {
  return <Avatar {...args} />;
};

export const Lazy = (args: AvatarPropsType) => {
  return (
    <div>
      {Array.from(new Array(20), (_, k) => k).map(() => (
        <Avatar {...args} />
      ))}
    </div>
  );
};
