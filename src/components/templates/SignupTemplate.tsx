import Box from '../common/Box';
import Container from '../common/Container';
import Text from '../common/Text';
import SignupForm from '../signupForm/SignupForm';

interface SignupTemplatePropsType {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (text: string, InputName: string) => void;
  userSignupInfo: {
    [key: string]: string;
  };
  userSignupInfoIsError: {
    [key: string]: boolean;
  };
  status: 'stale' | 'loading' | 'error' | 'success';
  formErrorMessage: string;
}

const SignupTemplate = ({
  onSubmit,
  onChange,
  userSignupInfo,
  userSignupInfoIsError,
  status,
  formErrorMessage,
}: SignupTemplatePropsType) => {
  return (
    <Container maxWidth='md'>
      <Box style={{ padding: '4rem 0' }}>
        <Container maxWidth='sm'>
          <Text
            size='2xl'
            color='--adaptive900'
          >
            가입하기
          </Text>
        </Container>
        <SignupForm
          onChange={onChange}
          onSubmit={onSubmit}
          userSignupInfo={userSignupInfo}
          userSignupInfoIsError={userSignupInfoIsError}
          status={status}
        >
          {formErrorMessage ? (
            <Text
              size='sm'
              color='--red600'
            >
              {formErrorMessage}
            </Text>
          ) : (
            <Box style={{ height: '0.875rem' }} />
          )}
        </SignupForm>
      </Box>
    </Container>
  );
};

export default SignupTemplate;
