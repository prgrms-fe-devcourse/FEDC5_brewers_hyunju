import Skeleton, { SkeletonPropsType } from '~/components/common/Skeleton';

export default {
  title: 'Component/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    circle: { control: 'boolean' },
    animation: { control: 'boolean' },
    inline: { control: 'boolean' },
    m: { control: 'number' },
    mx: { control: 'number' },
    my: { control: 'number' },
    mt: { control: 'number' },
    mb: { control: 'number' },
    ml: { control: 'number' },
    mr: { control: 'number' },
    p: { control: 'number' },
    px: { control: 'number' },
    py: { control: 'number' },
    pt: { control: 'number' },
    pb: { control: 'number' },
    pl: { control: 'number' },
    pr: { control: 'number' },
  },
  args: {
    width: undefined,
    height: undefined,
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
