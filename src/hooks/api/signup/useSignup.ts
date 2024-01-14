import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { useRequestFn } from '..';

import { userState } from '~/recoil/login/atoms';
import { loginState } from '~/recoil/login/atoms';

import { handleError } from '~/utils/handleError';
import { setItem } from '~/utils/localStorage';

import { SignupRequestType, SignupResponseType } from '~/types/api/auth';
import { UserType } from '~/types/common';

const useSignup = () => {
  const setLoginState = useSetRecoilState(loginState);
  const setUserState = useSetRecoilState(userState);

  const { request, status, data, error } = useRequestFn<SignupResponseType>({
    method: 'post',
    url: '/signup',
  });

  const handleSignup = async (signupRequest: SignupRequestType) => {
    try {
      await request({ data: signupRequest });
    } catch (e) {
      handleError(e, 'api/signup');
    }
  };

  useEffect(() => {
    if (status === 'success' && data.token) {
      setItem('accessToken', data.token);
      setUserState(data.user);
      setLoginState(true);
      return;
    }
    setItem('accessToken', '');
    setUserState({} as UserType);
    setLoginState(false);
  }, [status, data, setLoginState, setUserState]);

  return { handleSignup, status, error };
};

export default useSignup;
