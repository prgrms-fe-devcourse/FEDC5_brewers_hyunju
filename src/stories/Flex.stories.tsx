import Text from '~/components/common/Text';
import Flex, { FlexPropsType } from '~/components/common/Flex';

export default {
  title: 'Component/Flex',
  component: Flex,
  tags: ['autodocs'],
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
    gap: { control: 'number' },
    rowGap: { control: 'number' },
    columnGap: { control: 'number' },
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
    direction: 'row',
    wrap: 'nowrap',
    alignContent: 'normal',
    alignItems: 'normal',
    justifyContent: 'normal',
  },
};

export const Primary = (args: FlexPropsType) => {
  return (
    <Flex {...args}>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
    </Flex>
  );
};
