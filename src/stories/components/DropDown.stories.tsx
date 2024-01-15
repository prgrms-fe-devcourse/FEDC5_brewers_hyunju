import DropDown, { DropDownPropsType } from '~/components/dropDown/DropDown';

export default {
  title: 'Component/DropDown',
  component: DropDown,
  argTypes: {
    list: {
      type: { name: 'array' },
      description: '더보기 목록들',
      control: {
        type: 'array',
        separator: ',',
      },
    },
  },
};

export const Default = (args: DropDownPropsType) => {
  return <DropDown {...args}></DropDown>;
};

Default.args = {
  list: [
    { title: '수정하기', action: 'put' },
    { title: '삭제하기', action: 'delete' },
  ],
  isDropped: true,
};
