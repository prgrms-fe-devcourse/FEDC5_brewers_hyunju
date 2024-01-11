import LoginForm from '~/components/loginForm/LoginForm';

export default {
  title: 'Component/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Standard = () => {
  return <LoginForm />;
};
