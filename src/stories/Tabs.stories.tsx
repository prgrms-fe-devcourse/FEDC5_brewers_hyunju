import { IconUser } from '@tabler/icons-react';
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
    defaultId: { control: 'number' },
  },
  args: {},
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
        <Tabs.Body id={0}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          mauris et nisl fringilla tempor. Vestibulum maximus tellus ut augue
          imperdiet convallis eu mollis mauris. Vestibulum quis arcu placerat,
          pulvinar diam sit amet, dapibus lacus. Sed sollicitudin nulla varius
          risus laoreet fringilla. Cras enim sem, pretium a turpis in, eleifend
          viverra neque. Etiam sit amet tristique nisl, id varius velit. Nunc
          risus lorem, feugiat vitae dapibus vel, sodales commodo dui. Nulla
          sagittis rutrum semper. Sed semper turpis quis euismod laoreet. Mauris
          suscipit magna malesuada felis pulvinar fermentum. Proin consectetur
          finibus diam ut dictum. Nulla porta metus ut ante pretium, eu viverra
          neque congue. Cras a erat sed justo iaculis fringilla sed ultricies
          justo. Duis sed ornare mauris. Nullam sed mi pharetra, condimentum
          ante nec, luctus massa. Ut vel semper urna, ut sollicitudin metus.
        </Tabs.Body>
      </Tabs>
    </Box>
  );
};

export const MinimumTab = (args: TabsPropsType) => {
  return (
    <Box>
      <Tabs {...args}>
        <Tabs.Header>
          <Tabs.Item
            text='1'
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

export const IconTab = (args: TabsPropsType) => {
  return (
    <Box>
      <Tabs {...args}>
        <Tabs.Header>
          <Tabs.Item
            id={0}
            icon={
              <IconUser
                color='var(--primaryColor)'
                stroke={3}
              />
            }
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
  border: solid 1px var(--secondaryColor);
`;
