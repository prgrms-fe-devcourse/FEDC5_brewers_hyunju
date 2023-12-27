import axios, {
  AxiosRequestConfig,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';
import { API } from '~/constants/message';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axiosInstance.request({
      headers: { 'Content-Type': 'application/json' },
      ...config,
    });

    if (response.status < 200 || response.status > 299) {
      throw new Error(API.REQUEST_ERROR);
    }

    return response.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('api/axios: 알 수 없는 에러가 발생했습니다. (request)');
    }
  }
};

axiosInstance.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> | InternalAxiosRequestConfig => {
    const accessToken: string | null = localStorage.getItem('accessToken');

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
