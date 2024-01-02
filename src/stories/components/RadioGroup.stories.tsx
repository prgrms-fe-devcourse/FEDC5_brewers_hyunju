import Radio from '~/components/RadioGroup/Radio';
import RadioGroup, {
  RadioGroupPropsType,
} from '~/components/RadioGroup/RadioGroup';

export default {
  title: 'Component/RadioGroup',
  component: RadioGroup,
  argTypes: {
    labels: {
      type: { name: 'array' },
      description: 'label 문자열로 이루어진 배열',
      control: {
        type: 'array',
        separator: ',',
      },
    },
  },
};

export const Default = (args: RadioGroupPropsType) => {
  return <RadioGroup {...args}></RadioGroup>;
};

Default.args = {
  children: (
    <>
      <Radio
        name='toilet'
        value='1'
        defaultChecked
      ></Radio>
      <Radio
        name='toilet'
        value='2'
      ></Radio>
      <Radio
        name='toilet'
        value='3'
      ></Radio>
      <Radio
        name='toilet'
        value='4'
      ></Radio>
      <Radio
        name='toilet'
        value='5'
      ></Radio>
    </>
  ),
  labels: ['별로에요', '잘 모르겠어요', '쾌적했어요'],
};
