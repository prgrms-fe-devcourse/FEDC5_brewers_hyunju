import Box from '../common/Box';
import Container from '../common/Container';
import Flex from '../common/Flex';
import Text from '../common/Text';
import LoginForm from '../loginForm/LoginForm';

interface LoginTemplateProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (text: string, InputName: string) => void;
  status: 'stale' | 'loading' | 'error' | 'success';
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
    <Container maxWidth='md'>
      <Box style={{ padding: '4rem 0' }}>
        <Flex
          direction='column'
          gap={1}
        >
          <Container maxWidth='sm'>
            <Text
              size='2xl'
              color='--adaptive900'
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
                  style={{ paddingLeft: '0.75rem' }}
                >
                  {formErrorMessage}
                </Text>
              ) : (
                <Box style={{ height: '1rem' }} />
              )}
            </Box>
          </LoginForm>
        </Flex>
      </Box>
    </Container>
  );
};

export default LoginTemplate;
