import { useRequestFn } from '~/hooks/api';
import { AUTH } from '~/constants/message';
import { LoginRequestType, LoginResponseType } from '~/types/api/auth';
import { setItem } from '~/utils/localStorage';
import { handleError } from '~/utils/handleError';

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
      handleError(e, 'api/auth/login');
    }
  };

  return { handleLogin, status, error };
};

export default useLogin;
