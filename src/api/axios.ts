import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
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
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(e);
    }
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken: string | null = localStorage.getItem('accessToken');

    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (e) => {
    console.error(e);
    return Promise.reject(e);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (e) => {
    console.error(e);
    return Promise.reject(e);
  }
);

export default axiosInstance;
