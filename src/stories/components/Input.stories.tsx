import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
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
    placeholder: 'placeholder',
    message: 'message',
    messageColor: '--red600',
  },
};

export const Standard = (args: InputPropsType) => {
  const [, setText] = useState('');

  const onChange = (inputText: string) => {
    setText(inputText);
  };

  return (
    <div>
      <Input
        {...args}
        onBlur={(text) => text === '111'}
        onChange={onChange}
      ></Input>
    </div>
  );
};

export const Search = () => {
  const [, setText] = useState('');

  const onChange = (inputText: string) => {
    setText(inputText);
  };
  return (
    <div>
      <Input
        onChange={onChange}
        placeholder='placeholder'
      >
        <IconSearch
          size={16}
          stroke={3}
        />
      </Input>
    </div>
  );
};

export const Post = () => {
  const [, setText] = useState('');

  const onChange = (inputText: string) => {
    setText(inputText);
  };

  return (
    <div>
      <Input
        onChange={onChange}
        label='label text'
      ></Input>
    </div>
  );
};
