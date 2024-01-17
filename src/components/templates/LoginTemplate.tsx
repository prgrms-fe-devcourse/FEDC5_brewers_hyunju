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
    <LoginContainer maxWidth='sm'>
      <Text
        size='3xl'
        weight={800}
      >
        로그인
      </Text>
      <Login maxWidth='sm'>
        <Flex
          direction='column'
          gap={2}
        >
          <LoginForm
            onSubmit={onSubmit}
            onChange={onChange}
            status={status}
            error={error}
            userLoginInfo={userLoginInfo}
            userLoginInfoIsError={userLoginInfoIsError}
          >
            {formErrorMessage && (
              <Box
                width='sm'
                style={{ width: '40rem', margin: 'auto' }}
              >
                <Text
                  color='--red600'
                  style={{ paddingLeft: 'var(--padding-md)' }}
                >
                  {formErrorMessage}
                </Text>
              </Box>
            )}
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

  background-color: var(--transparent);

  box-sizing: border-box;
  gap: 1.5rem;
`;

const Login = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  box-sizing: border-box;
  gap: 1.5rem;
`;
