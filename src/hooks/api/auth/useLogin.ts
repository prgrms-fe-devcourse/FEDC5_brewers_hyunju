import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { useRequestFn } from '~/hooks/api';

import { loginState } from '~/recoil/login/atoms';
import { userState } from '~/recoil/login/atoms';

import { setItem } from '~/utils/localStorage';
import { handleError } from '~/utils/handleError';

const useLogin = () => {
  const setLoginState = useSetRecoilState(loginState);
  const setUserState = useSetRecoilState(userState);

  const { request, status, data, error } = useRequestFn<LoginResponseType>({
    method: 'post',
    url: '/login',
  });

  const handleLogin = async (loginRequest: LoginRequestType) => {
    try {
      const { email, password } = loginRequest;
      if (email === '') {
        throw new Error(AUTH.EMPTY_EMAIL_ERROR);
      } else if (password === '') {
        throw new Error(AUTH.EMPTY_PASSWORD_ERROR);
      }

      await request({ data: loginRequest });
    } catch (e) {
      handleError(e, 'api/auth/login');
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
  }, [status, data, setUserState, setLoginState]);

  return { handleLogin, status, error };
};

export default useLogin;
