import NavBar, { NavBarPropsType } from '~/components/common/NavBar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Component/NavBar',
  component: NavBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    isLoggedIn: {
      control: {
        type: 'boolean',
      },
    },
    userName: {
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = (args: NavBarPropsType) => {
  return <NavBar {...args}></NavBar>;
};

Default.args = {
  isLoggedIn: false,
  userName: '주니모',
};
