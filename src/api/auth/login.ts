import axiosInstance from '~/api/axios';
import { setItem } from '~/utils/localStorage';
import { LoginRequestType, LoginResponseType } from '~/types/api/auth';

async function login(loginData: LoginRequestType) {
  try {
    const { email, password } = loginData;
    const response = await axiosInstance.post<LoginResponseType>('/login', {
      email,
      password,
    });

    if (response.data && response.data.token) {
      const token = response.data.token;
      setItem('accessToken', token);
      return response.data;
    }
  } catch (e) {
    console.error('로그인 실패:', e);
    return false;
  }
}

export default login;
