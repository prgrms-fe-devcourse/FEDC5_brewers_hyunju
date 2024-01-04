import { IconSearch } from '@tabler/icons-react';
import Input, { InputPropsType } from '~/components/input/Input';
import { COLOR } from '~/constants/design';

export default {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string' },
    placeholder: { control: 'string' },
    message: { control: 'string' },
    messageColor: { control: 'select', options: COLOR },
  },
  args: {
    label: 'label text',
    labelFontSize: 'sm',
    labelFontWeight: 400,
    placeholder: 'placeholder',
    message: 'message',
    messageColor: '--red600',
  },
};

export const Standard = (args: InputPropsType) => {
  return (
    <div>
      <Input {...args}></Input>
    </div>
  );
};

export const Search = () => {
  return (
    <div>
      <Input placeholder='placeholder'>
        <IconSearch
          size={16}
          stroke={3}
        />
      </Input>
    </div>
  );
};

export const Post = () => {
  return (
    <div>
      <Input label='label text'></Input>
    </div>
  );
};
