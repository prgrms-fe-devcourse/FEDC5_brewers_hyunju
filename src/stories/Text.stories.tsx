import Text, { TextPropsType } from '~/components/common/Text';
import {
  COLOR,
  FONT_SIZE_UNIT,
  FONT_WEIGHT_UNIT,
  LINE_HEIGHT_UNIT,
} from '~/constants/design';

export default {
  title: 'Component/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: FONT_SIZE_UNIT,
    },
    lineHeight: { control: 'inline-radio', options: LINE_HEIGHT_UNIT },
    weight: { control: 'inline-radio', options: FONT_WEIGHT_UNIT },
    color: { control: 'select', options: COLOR },
    inline: { control: 'boolean' },
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
    size: 'md',
    lineHeight: 100,
    weight: 400,
    color: '--blue500',
    inline: false,
    children: '테스트',
  },
};

export const Primary = (args: TextPropsType) => {
  return <Text {...args} />;
};
