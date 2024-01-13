import React from 'react';

import Box from '../common/Box';
import Button from '../common/Button';
import Container from '../common/Container';
import CircleLoading from '../loading/CircleLoading';
import Flex from '../common/Flex';
import Input from '../input/Input';

import { testRegex } from '~/utils/regex';

import { INPUT } from '~/constants/regex';

interface SignupFormPropsType {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (text: string, InputName: string) => void;
  userSignupInfo: {
    [key: string]: string;
  };
  status: 'stale' | 'loading' | 'error' | 'success';
  children: React.ReactNode;

  userSignupInfoIsError: {
    [key: string]: boolean;
  };
}
const SignupForm = ({
  onSubmit,
  onChange,
  userSignupInfo,
  status,
  children,
  userSignupInfoIsError,
}: SignupFormPropsType) => {
  const isValidate = (text: string, inputName: 'email' | 'checkPassword') => {
    const inputValue = userSignupInfo[inputName];

    if (!inputValue) return '';
    return validateInput(inputValue) ? '' : text;
  };

  const validateInput = (text: string) => {
    return testRegex(text, INPUT.EMAIL);
  };

  const emailErrorMessage = () => {
    return userSignupInfoIsError.email
      ? '이메일을 입력해주세요'
      : isValidate('올바르지 않은 이메일 형식이에요', 'email');
  };

  const passwordErrorMessage = () => {
    return userSignupInfoIsError.checkPassword
      ? '비밀번호 확인란을 입력해주세요'
      : userSignupInfo.checkPassword !== userSignupInfo.password &&
          userSignupInfo.checkPassword
        ? '비밀번호가 일치하지 않아요'
        : '';
  };

  return (
    <Container maxWidth='md'>
      <form onSubmit={onSubmit}>
        <Flex
          direction='column'
          gap={1}
        >
          <Box>
            <Input
              label='사용자 이름'
              placeholder='프롱이'
              message={
                userSignupInfoIsError.fullName
                  ? '사용자 이름을 입력해 주세요'
                  : ''
              }
              messageColor='--red600'
              onChange={onChange}
              InputName='fullName'
              inputText={userSignupInfo.fullName}
            />
            {!userSignupInfoIsError.fullName && (
              <Box style={{ height: '0.875rem' }}></Box>
            )}
          </Box>
          <Box>
            <Input
              label='이메일'
              placeholder='example@gmail.com'
              message={emailErrorMessage()}
              messageColor='--red600'
              onChange={onChange}
              InputName='email'
              inputText={userSignupInfo.email}
            />
            {!emailErrorMessage() && <Box style={{ height: '0.875rem' }}></Box>}
          </Box>
          <Box>
            <Input
              label='비밀번호'
              placeholder='비밀번호를 입력해주세요'
              messageColor='--red600'
              message={
                userSignupInfoIsError.password ? '비밀번호를 입력해주세요' : ''
              }
              onChange={onChange}
              InputName='password'
              inputText={userSignupInfo.password}
            />
            {!userSignupInfoIsError.password && (
              <Box style={{ height: '0.875rem' }}></Box>
            )}
          </Box>
          <Box>
            <Input
              label='비밀번호 확인'
              placeholder='비밀번호를 입력해주세요'
              message={passwordErrorMessage()}
              messageColor='--red600'
              onChange={onChange}
              InputName='checkPassword'
              inputText={userSignupInfo.checkPassword}
            />
            {!passwordErrorMessage() && (
              <Box style={{ height: '0.875rem' }}></Box>
            )}
          </Box>
          <Container maxWidth='sm'>
            <Flex
              direction='column'
              gap={1}
            >
              <Flex direction='column'>{children}</Flex>
              <Button
                type='submit'
                size='lg'
                variant='filled'
                color='--primaryColor'
                style={{ height: '3rem' }}
              >
                {status === 'loading' ? <CircleLoading /> : '가입하기'}
              </Button>
            </Flex>
          </Container>
        </Flex>
      </form>
    </Container>
  );
};

export default SignupForm;
