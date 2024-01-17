import styled from '@emotion/styled';

import Box from '../common/Box';
import Container from '../common/Container';
import Flex from '../common/Flex';
import Text from '../common/Text';
import LoginForm from '../loginForm/LoginForm';

import ResponseStatusType from '~/types/api/status';

interface LoginTemplateProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (text: string, InputName: string) => void;
  status: ResponseStatusType;
  error: string | null;
  userLoginInfo: {
    [key: string]: string;
  };
  formErrorMessage: string;
  userLoginInfoIsError: {
    [key: string]: boolean;
  };
}

const LoginTemplate = ({
  onSubmit,
  onChange,
  status,
  error,
  userLoginInfo,
  formErrorMessage,
  userLoginInfoIsError,
}: LoginTemplateProps) => {
  return (
    <LoginContainer maxWidth='md'>
      <Login maxWidth='md'>
        <Flex
          direction='column'
          gap={1}
        >
          <Container maxWidth='sm'>
            <Text
              size='3xl'
              weight={800}
            >
              로그인
            </Text>
          </Container>
          <LoginForm
            onSubmit={onSubmit}
            onChange={onChange}
            status={status}
            error={error}
            userLoginInfo={userLoginInfo}
            userLoginInfoIsError={userLoginInfoIsError}
          >
            <Box
              width='sm'
              style={{ width: '40rem', margin: 'auto' }}
            >
              {formErrorMessage ? (
                <Text
                  color='--red600'
                  style={{ paddingLeft: 'var(--padding-md)' }}
                >
                  {formErrorMessage}
                </Text>
              ) : (
                <Box style={{ height: '1rem' }} />
              )}
            </Box>
          </LoginForm>
        </Flex>
      </Login>
    </LoginContainer>
  );
};

export default LoginTemplate;

const LoginContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  border-radius: var(--radius-lg);
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const Login = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;
