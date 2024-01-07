import Container, { ContainerPropsType } from '~/components/common/Container';
import { COLOR, CONTAINER_SIZE_UNIT } from '~/constants/design';

export default {
  title: 'Component/Container',
  component: Container,
  argTypes: {
    maxWidth: { control: 'inline-radio', options: CONTAINER_SIZE_UNIT },
    children: { control: 'text' },
    bgColor: { control: 'select', options: COLOR },
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
    maxWidth: 'md',
    children: '테스트',
  },
};

export const Primary = (args: ContainerPropsType) => {
  return <Container {...args} />;
};
