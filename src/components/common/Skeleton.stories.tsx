import Skeleton, { SkeletonPropsType } from '~/components/common/Skeleton';

export default {
  title: 'Component/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
    circle: {
      control: { type: 'boolean' },
    },
    animation: {
      control: { type: 'boolean' },
    },
    inline: {
      control: { type: 'boolean' },
    },
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
    width: '10rem',
    height: '1rem',
    circle: false,
    animation: true,
    inline: false,
  },
};

export const Primary = (args: SkeletonPropsType) => {
  return <Skeleton {...args} />;
};

export const Circle = (args: SkeletonPropsType) => {
  return (
    <Skeleton
      {...args}
      circle={true}
    />
  );
};
