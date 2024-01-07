import { IconArrowRight, IconUser } from '@tabler/icons-react';
import Button, { ButtonPropsType } from '~/components/common/Button';
import Container from '~/components/common/Container';
import { BUTTON_VARIANT, BUTTON_SIZE_UNIT, COLOR } from '~/constants/design';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: BUTTON_VARIANT },
    size: { control: 'select', options: BUTTON_SIZE_UNIT },
    color: { control: 'select', options: COLOR },
    disabled: { control: 'boolean' },
    grow: { control: 'number' },
    shrink: { control: 'number' },
    basis: { control: 'number' },
    width: { control: 'number' },
    height: { control: 'number' },
    minWidth: { control: 'number' },
    minHeight: { control: 'number' },
    maxWidth: { control: 'number' },
    maxHeight: { control: 'number' },
    m: { control: 'number' },
    mx: { control: 'number' },
    my: { control: 'number' },
    mt: { control: 'number' },
    mb: { control: 'number' },
    ml: { control: 'number' },
    mr: { control: 'number' },
  },
  args: {
    variant: 'filled',
    size: 'md',
    color: '--primaryColor',
    children: '버튼',
  },
};

export const Text = (args: ButtonPropsType) => {
  return (
    <Container maxWidth='md'>
      <Button
        {...args}
        onClick={() => alert('click')}
      />
    </Container>
  );
};

export const Icon = (args: ButtonPropsType) => {
  return (
    <Container maxWidth='md'>
      <Button
        {...args}
        leftItem={
          <IconUser
            size={16}
            stroke={3}
          />
        }
        rightItem={
          <IconArrowRight
            size={16}
            stroke={3}
          />
        }
        onClick={() => alert('click')}
      >
        로그인
      </Button>
    </Container>
  );
};
