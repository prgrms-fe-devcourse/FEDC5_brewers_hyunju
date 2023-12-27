import axios, { AxiosRequestConfig } from 'axios';
import { API } from '~/constants/message';

export const axiosInstance = axios.create({
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
