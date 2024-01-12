import { useNavigate } from 'react-router-dom';

import Box from '../common/Box';
import Button from '../common/Button';
import Container from '../common/Container';
import CircleLoading from '../loading/CircleLoading';
import Flex from '../common/Flex';
import Input from '../input/Input';

import { testRegex } from '~/utils/regex';

import ResponseStatusType from '~/types/api/status';

import { INPUT } from '~/constants/regex';

interface LoginFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (text: string, InputName: string) => void;
  status: ResponseStatusType;
  error: string | null;
  children: React.ReactNode;
  userLoginInfo: {
    [key: string]: string;
  };
  userLoginInfoIsError: {
    [key: string]: boolean;
  };
}

const LoginForm = ({
  onSubmit,
  onChange,
  status,
  userLoginInfo,
  userLoginInfoIsError,
  children,
}: LoginFormProps) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/signup');
  };

  const isValidate = (text: string, inputName: 'email') => {
    const inputValue = userLoginInfo[inputName];

    if (!inputValue) return '';
    return validateInput(inputValue) ? '' : text;
  };

  const validateInput = (text: string) => {
    return testRegex(text, INPUT.EMAIL);
  };

  const emailErrorMessage = () => {
    return userLoginInfoIsError.email
      ? '이메일을 입력해주세요'
      : isValidate('올바르지 않은 이메일 형식이에요', 'email');
  };

  return (
    <form onSubmit={onSubmit}>
      <Flex
        direction='column'
        gap={1}
      >
        <Box>
          <Input
            label='이메일'
            type='text'
            placeholder='example@gmail.com'
            message={emailErrorMessage()}
            messageColor='--red600'
            onChange={onChange}
            InputName='email'
          />
          {!emailErrorMessage() && <Box style={{ height: '0.875rem' }}></Box>}
        </Box>
        <Box>
          <Input
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            onChange={onChange}
            InputName='password'
            messageColor='--red600'
            message={
              userLoginInfoIsError.password ? '비밀번호를 입력해 주세요' : ''
            }
            type='password'
          />
          {!userLoginInfoIsError.password && (
            <Box style={{ height: '0.875rem' }}></Box>
          )}
        </Box>
        {children}
        <Container maxWidth='sm'>
          <Flex
            direction='column'
            gap={1}
          >
            <Button
              size='lg'
              variant='filled'
              color='--primaryColor'
              type='submit'
              style={{ height: '3rem' }}
            >
              {status === 'loading' ? <CircleLoading size={1} /> : '로그인'}
            </Button>
            <Button
              size='lg'
              variant='outlined'
              color='--primaryColor'
              type='button'
              style={{ height: '3rem' }}
              onClick={onClick}
            >
              가입하기
            </Button>
          </Flex>
        </Container>
      </Flex>
    </form>
  );
};

export default LoginForm;
