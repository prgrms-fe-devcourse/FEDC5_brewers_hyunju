import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getItem } from '~/utils/localStorage';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> | InternalAxiosRequestConfig => {
    const accessToken: string | null = getItem('accessToken', null);
    config.headers = config.headers || {};

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (e: unknown) => {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('api/axios: 알 수 없는 에러가 발생했습니다. (interceptor)');
    }
  }
);

export default axiosInstance;
