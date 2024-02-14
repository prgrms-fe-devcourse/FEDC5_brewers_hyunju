import styled from '@emotion/styled';
import Container from '../common/Container';
import Flex from '../common/Flex';
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
    <SignupContainer maxWidth='sm'>
      <Text
        size='3xl'
        weight={800}
      >
        회원가입
      </Text>
      <Signup maxWidth='md'>
        <Flex
          direction='column'
          gap={1}
        >
          <SignupForm
            onChange={onChange}
            onSubmit={onSubmit}
            userSignupInfo={userSignupInfo}
            userSignupInfoIsError={userSignupInfoIsError}
            status={status}
          >
            {formErrorMessage && (
              <Text
                size='sm'
                color='--red600'
              >
                {formErrorMessage}
              </Text>
            )}
          </SignupForm>
        </Flex>
      </Signup>
    </SignupContainer>
  );
};

export default SignupTemplate;

const SignupContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const Signup = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  box-sizing: border-box;
  gap: 1.5rem;
`;
