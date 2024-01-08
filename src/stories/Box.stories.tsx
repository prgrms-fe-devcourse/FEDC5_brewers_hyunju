import Box, { BoxPropsType } from '~/components/common/Box';
import { COLOR } from '~/constants/design';

export default {
  title: 'Component/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    minWidth: { control: 'number' },
    minHeight: { control: 'number' },
    maxWidth: { control: 'number' },
    maxHeight: { control: 'number' },
    bgColor: { control: 'select', options: COLOR },
    color: { control: 'select', options: COLOR },
    opacity: { control: 'number' },
    grow: { control: 'number' },
    shrink: { control: 'number' },
    basis: { control: 'number' },
    children: { control: 'text' },
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
    children: '테스트',
  },
};

export const Primary = (args: BoxPropsType) => {
  return <Box {...args} />;
};
