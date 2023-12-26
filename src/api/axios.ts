import axios, { AxiosRequestConfig } from 'axios';
import { ERROR_MESSAGES } from '~/constants/error';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const request = async (config: AxiosRequestConfig) => {
  try {
    const response = await axiosInstance.request({
      ...config,
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status >= 200 && response.status <= 299) return response.data;
    else {
      throw new Error(ERROR_MESSAGES.API_REQUEST_ERROR);
    }
  } catch (error: unknown) {
    console.error(error);
  }
};
