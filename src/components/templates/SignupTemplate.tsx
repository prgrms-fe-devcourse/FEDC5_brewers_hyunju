import styled from '@emotion/styled';

import Box from '../common/Box';
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
    <SignupContainer maxWidth='md'>
      <Signup maxWidth='md'>
        <Flex
          direction='column'
          gap={1}
        >
          <Container maxWidth='sm'>
            <Text
              size='3xl'
              weight={800}
            >
              회원가입
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
        </Flex>
      </Signup>
    </SignupContainer>
  );
};

export default SignupTemplate;

const SignupContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const Signup = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;
