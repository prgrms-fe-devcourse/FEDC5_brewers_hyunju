import { useState } from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import Flex from '../common/Flex';
import Input from '../input/Input';
import Text from '../common/Text';

const LoginForm = () => {
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = (text: string, InputName: string) => {
    setUserLoginInfo({ ...userLoginInfo, [InputName]: text });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('onSubmit');
  };

  const onClick = () => {
    alert('onClick');
  };

  const onBlur = (text: string) => text === 'example';

  return (
    <Container maxWidth='md'>
      <form onSubmit={onSubmit}>
        <Flex direction='column'>
          <Container maxWidth='sm'>
            <Text
              size='lg'
              color='--adaptive900'
            >
              로그인
            </Text>
          </Container>
          <Input
            label='이메일'
            type='email'
            placeholder='example@gmail.com'
            message='올바르지 않은 이메일 형식이에요'
            messageColor='--red600'
            onChange={onChange}
            onBlur={onBlur}
            InputName='email'
          />
          <Input
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            onChange={onChange}
            InputName='password'
            type='password'
          />
          <Container
            maxWidth='md'
            style={{ width: 'fit-content' }}
          >
            <Flex
              direction='column'
              gap={1}
            >
              <Button
                size='lg'
                variant='filled'
                color='--primaryColor'
                type='submit'
              >
                로그인
              </Button>
              <Button
                size='lg'
                variant='outlined'
                color='--primaryColor'
                type='button'
                onClick={onClick}
              >
                가입하기
              </Button>
            </Flex>
          </Container>
        </Flex>
      </form>
    </Container>
  );
};

export default LoginForm;
