import Radio, { RadioPropsType } from '~/components/RadioGroup/Radio';

export default {
  title: 'Component/Radio',
  component: Radio,
  argTypes: {
    value: { control: { type: 'string' } },
    name: { control: { type: 'string' } },
    checked: { control: { type: 'boolean' } },
  },
};

export const Default = (args: RadioPropsType) => {
  return <Radio {...args}></Radio>;
};

Default.args = {
  value: '1',
  name: 'toilet',
  checked: true,
};
