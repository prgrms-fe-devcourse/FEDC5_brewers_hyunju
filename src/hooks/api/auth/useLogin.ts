import { useRequestFn } from '~/hooks/api';
import { AUTH } from '~/constants/message';
import { LoginRequestType, LoginResponseType } from '~/types/api/auth';
import { setItem } from '~/utils/localStorage';

const useLogin = () => {
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
      if (status === 'success' && data.token) {
        setItem('accessToken', data.token);
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error('api/auth/login: 알 수 없는 에러가 발생했습니다.');
      }
    }
  };

  return { handleLogin, status, error };
};

export default useLogin;
