import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import Input, { InputPropsType } from '~/components/input/Input';
import { regex } from '~/utils/regex';
import { COLOR } from '~/constants/design';
import { INPUT } from '~/constants/regex';

export default {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    message: { control: 'text' },
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
  const [text, setText] = useState('');

  const onChange = (inputText: string) => {
    setText(inputText);
  };

  const validation = (text: string) => {
    return regex(text, INPUT.EMAIL);
  };

  return (
    <div>
      <Input
        {...args}
        inputText={text}
        isValidate={(text) => validation(text)}
        onChange={onChange}
      ></Input>
    </div>
  );
};

export const Search = () => {
  const [text, setText] = useState('');

  const onChange = (inputText: string) => {
    setText(inputText);
  };
  return (
    <div>
      <Input
        inputText={text}
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
  const [text, setText] = useState('');

  const onChange = (inputText: string) => {
    setText(inputText);
  };

  return (
    <div>
      <Input
        inputText={text}
        onChange={onChange}
        label='label text'
      ></Input>
    </div>
  );
};
