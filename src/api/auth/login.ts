import axiosInstance from '~/api/axios';
import { setItem } from '~/utils/localStorage';
import { LoginRequestType, LoginResponseType } from '~/types/api/auth';
import { AUTH } from '~/constants/message';

const login = async (loginData: LoginRequestType) => {
  try {
    const { email, password } = loginData;

    if (email === '') {
      throw new Error(AUTH.EMPTY_EMAIL_ERROR);
    } else if (password === '') {
      throw new Error(AUTH.EMPTY_PASSWORD_ERROR);
    }

    const response = await axiosInstance.post<LoginResponseType>('/login', {
      email,
      password,
    });

    if (response.data && response.data.token) {
      const token = response.data.token;

      setItem('accessToken', token);
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('api/auth/login: 알 수 없는 에러가 발생했습니다.');
    }

    return false;
  }
};

export default login;
