import SignupForm from '~/components/signupForm/SignupForm';

export default {
  title: 'Component/SignupForm',
  component: SignupForm,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export const Standard = () => {
  return <SignupForm />;
};
