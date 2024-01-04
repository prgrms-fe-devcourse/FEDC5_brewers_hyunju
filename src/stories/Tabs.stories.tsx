import styled from 'styled-components';
import Tabs, { TabsPropsType } from '~/components/common/Tabs';
import { FONT_SIZE_UNIT, FONT_WEIGHT_UNIT } from '~/constants/design';

export default {
  title: 'Component/Tabs',
  component: Tabs,
  argTypes: {
    isFull: { type: 'boolean' },
    gap: { control: 'number' },
    fontSize: { control: 'select', options: FONT_SIZE_UNIT },
    fontWeight: { control: 'select', options: FONT_WEIGHT_UNIT },
  },
  args: {
    isFull: false,
  },
};
export const Default = (args: TabsPropsType) => {
  return (
    <Box>
      <Tabs {...args}>
        <Tabs.Header>
          <Tabs.Item
            text='TAB 1'
            id={0}
          />
          <Tabs.Item
            text='TAB 2'
            id={1}
          />
          <Tabs.Item
            text='TAB 3'
            id={2}
          />
        </Tabs.Header>
      </Tabs>
    </Box>
  );
};

const Box = styled.div`
  width: 500px;
`;
