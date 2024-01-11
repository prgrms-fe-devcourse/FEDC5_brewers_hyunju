import RadioGroup, {
  RadioGroupPropsType,
} from '~/components/RadioGroup/RadioGroup';

export default {
  title: 'Component/RadioGroup',
  component: RadioGroup,
  argTypes: {
    options: {
      type: { name: 'array' },
      control: {
        type: 'array',
      },
    },
  },
};

export const Default = (args: RadioGroupPropsType) => {
  return <RadioGroup {...args}></RadioGroup>;
};

Default.args = {
  options: [
    { label: '별로에요', value: '1' },
    { label: '', value: '2' },
    { label: '잘 모르겠어요', value: '3' },
    { label: '', value: '4' },
    { label: '쾌적했어요', value: '5' },
  ],
};
