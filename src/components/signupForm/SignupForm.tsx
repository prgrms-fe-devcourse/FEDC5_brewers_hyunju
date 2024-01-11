import { useState } from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import Flex from '../common/Flex';
import Input from '../input/Input';
import Text from '../common/Text';

const SignupForm = () => {
  const [userSignupInfo, setUserSignupInfo] = useState({
    userName: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const onChange = (text: string, InputName: string) => {
    setUserSignupInfo({ ...userSignupInfo, [InputName]: text });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('onSubmit');
  };

  const onEmailCheck = (text: string) => {
    return text === 'example';
  };

  const onPasswordCheck = (text: string) => {
    return text === userSignupInfo.password;
  };

  return (
    <Container maxWidth='md'>
      <form onSubmit={onSubmit}>
        <Flex direction='column'>
          <Container maxWidth='sm'>
            <Text
              size='lg'
              color='--adaptive900'
            >
              가입하기
            </Text>
          </Container>
          <Input
            label='사용자 이름'
            onChange={onChange}
            InputName='userName'
          />
          <Input
            label='이메일'
            type='email'
            placeholder='example@gmail.com'
            message='올바르지 않은 이메일 형식이에요'
            messageColor='--red600'
            onChange={onChange}
            onBlur={onEmailCheck}
            InputName='email'
          />
          <Input
            label='비밀번호'
            placeholder='비밀번호를 입력해주세요'
            onChange={onChange}
            InputName='password'
          />
          <Input
            label='비밀번호 확인'
            message='입력하신 비밀번호와 다릅니다'
            messageColor='--red600'
            onChange={onChange}
            InputName='checkPassword'
            onBlur={onPasswordCheck}
          />
          <Container
            maxWidth='md'
            style={{ width: 'fit-content' }}
          >
            <Button
              type='submit'
              size='lg'
              variant='filled'
              color='--primaryColor'
            >
              가입하기
            </Button>
          </Container>
        </Flex>
      </form>
    </Container>
  );
};

export default SignupForm;
